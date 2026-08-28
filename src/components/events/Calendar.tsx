"use client";

import { useMemo, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Clock, MapPin, X } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

const eventAnimation = {
  initial: { y: 20, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  transition: { duration: 0.8 },
  viewport: { once: true },
};

interface EventItem {
  id: string;
  name: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  rsvpUrl: string;
}

interface GoogleCalendarEvent {
  id: string;
  summary?: string;
  location?: string;
  htmlLink?: string;
  start: { dateTime?: string; date?: string };
  end: { dateTime?: string; date?: string };
}

const WEEKDAYS = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];

const toKey = (date: Date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

const Calendar = () => {
  const today = new Date();
  const [events, setEvents] = useState<EventItem[]>([]);
  const [view, setView] = useState({
    year: today.getFullYear(),
    month: today.getMonth(),
  });
  const [selected, setSelected] = useState<EventItem | null>(null);

  const { year, month } = view;

  useEffect(() => {
    const fetchCalendarEvents = async () => {
      const url = new URL(
        `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL!}/events`,
      );
      url.searchParams.set(
        "key",
        process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY!,
      );
      url.searchParams.set("singleEvents", "true");
      url.searchParams.set("orderBy", "startTime");

      try {
        const response = await fetch(url.toString());
        const data = await response.json();

        if (!data.items) return;

        const formatted: EventItem[] = data.items.map(
          (event: GoogleCalendarEvent) => {
            const start = new Date(
              event.start.dateTime || event.start.date || "",
            );
            const end = new Date(event.end.dateTime || event.end.date || "");

            return {
              id: event.id,
              name: event.summary || "Untitled Event",
              date: toKey(start),
              startTime: start.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              }),
              endTime: end.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
              }),
              location: event.location || "TBD",
              rsvpUrl: event.htmlLink || "/",
            };
          },
        );

        setEvents(formatted);
      } catch (err) {
        console.error("Error fetching events for main grid layout:", err);
      }
    };

    fetchCalendarEvents();
  }, []);

  const eventsByDate = useMemo(() => {
    return events.reduce<Record<string, EventItem[]>>((acc, event) => {
      (acc[event.date] ||= []).push(event);
      return acc;
    }, {});
  }, [events]);

  const cells = useMemo(() => {
    const firstWeekday = new Date(year, month, 1).getDay();
    const start = new Date(year, month, 1 - ((firstWeekday + 6) % 7));
    return Array.from({ length: 42 }, (_, i) => {
      const date = new Date(start);
      date.setDate(start.getDate() + i);
      return date;
    });
  }, [year, month]);

  const changeMonth = (delta: number) => {
    setSelected(null);
    setView(({ year, month }) => {
      const next = new Date(year, month + delta, 1);
      return { year: next.getFullYear(), month: next.getMonth() };
    });
  };

  const monthLabel = new Date(year, month, 1).toLocaleString("en-US", {
    month: "long",
  });

  return (
    <div className="from-bmes-blue-300 to-bmes-blue-200 bg-linear-to-b p-8 text-center text-lg text-white md:px-10 md:text-xl lg:text-2xl">
      <motion.div
        {...eventAnimation}
        className="relative m-16 mx-auto w-full max-w-6xl rounded-2xl bg-white p-4 shadow-xl md:p-6"
      >
        <div className="mb-4 flex items-center justify-between text-gray-800">
          <button
            onClick={() => changeMonth(-1)}
            aria-label="Previous month"
            className="p-2 text-gray-400 transition-colors hover:text-gray-700"
          >
            <ChevronLeft className="size-6" />
          </button>
          <h3 className="text-base tracking-wide">
            <span className="font-bold">{monthLabel}</span>{" "}
            <span className="font-normal text-gray-400">{year}</span>
          </h3>
          <button
            onClick={() => changeMonth(1)}
            aria-label="Next month"
            className="p-2 text-gray-400 transition-colors hover:text-gray-700"
          >
            <ChevronRight className="size-6" />
          </button>
        </div>

        <div className="mb-2 border-t border-gray-100" />

        <div className="text-bmes-gray-100 grid grid-cols-7 text-center text-xs md:text-sm">
          {WEEKDAYS.map((day) => (
            <div key={day} className="py-2">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1 rounded-md">
          {cells.map((date) => {
            const key = toKey(date);
            const inMonth = date.getMonth() === month;
            const isToday = key === toKey(today);
            const isWeekend = date.getDay() === 6 || date.getDay() === 0;
            const dayEvents = eventsByDate[key] ?? [];

            return (
              <div
                key={key}
                className={`flex min-h-20 flex-col justify-center rounded-lg p-2 text-center md:min-h-22 ${
                  inMonth ? "text-gray-800" : "text-gray-300"
                } ${isToday ? "border-2 border-gray-800" : ""} ${
                  isWeekend && inMonth ? "bg-bmes-gray-200" : ""
                }`}
              >
                <span className="text-xs md:text-sm">{date.getDate()}</span>
                <div className="mt-1 flex flex-col gap-1">
                  {dayEvents.map((event) => (
                    <button
                      key={event.id}
                      onClick={() => setSelected(event)}
                      className="bg-bmes-blue-300 truncate rounded px-1 py-0.5 text-left text-xs text-white"
                    >
                      {event.name}
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {selected && (
          <div className="border-bmes-gray-200 absolute top-1/2 left-1/2 z-10 w-72 max-w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-lg border bg-white p-4 shadow-xl">
            <div className="flex items-start justify-between">
              <h4 className="font-bold text-gray-800">{selected.name}</h4>
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="p-1 text-gray-400 hover:text-gray-700"
              >
                <X className="size-4" />
              </button>
            </div>
            <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
              <Clock className="size-4" />
              <span>
                {selected.startTime} - {selected.endTime}
              </span>
            </div>
            <div className="mt-1 flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="size-4" />
              <span>{selected.location}</span>
            </div>
            <Link
              href={selected.rsvpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border-bmes-gray-100 bg-bmes-blue-300 hover:bg-bmes-blue-400 mt-3 inline-block rounded border px-4 py-1 text-sm text-white transition-colors"
            >
              RSVP
            </Link>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Calendar;
