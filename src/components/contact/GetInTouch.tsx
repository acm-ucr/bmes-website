import Link from "next/link";

export default function GetInTouch() {
  return (
    <div className="flex flex-row items-center gap-8 rounded-2xl bg-white p-8">
      <div className="flex flex-col gap-4">
        <h2 className="text-bmes-blue-100 text-5xl font-bold">Get in Touch!</h2>
        <p className="text-black">
          Whether you are a first year interested in meeting new people or a
          third year looking into internships and learning opportunities, the
          Biomedical Engineering Society is the place for you!
        </p>
        <p className="text-black">
          FOR MEMBERSHIP REQUESTS, please visit and join at{" "}
          <Link
            href="https://highlander.ucr.edu"
            className="text-bmes-blue-300 underline hover:opacity-80"
          >
            HighlanderLink
          </Link>{" "}
          and you will be added to our membership roster and mailing list!
        </p>
      </div>
      <img
        src="/getInTouch.svg"
        alt="Get in Touch"
        className="rounded-xl shadow-lg"
      />
    </div>
  );
}
