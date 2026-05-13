"use client";

import { picturesData } from "@/data/GalleryImages";
import ImageCard from "@/components/gallery/GalleryCard";
import GalleryAnimation from "@/components/gallery/GalleryAnimation";

const GalleryGrid = () => {
  return (
    <div className="my-10 flex w-full flex-col gap-4 px-4 sm:px-6 lg:px-8">
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <GalleryAnimation index={0}>
          <ImageCard
            image={picturesData[0].pictures}
            alt={picturesData[0].alt}
          />
        </GalleryAnimation>
        <GalleryAnimation index={1}>
          <ImageCard
            image={picturesData[1].pictures}
            alt={picturesData[1].alt}
          />
        </GalleryAnimation>
        <GalleryAnimation index={2}>
          <ImageCard
            image={picturesData[2].pictures}
            alt={picturesData[2].alt}
          />
        </GalleryAnimation>
        <GalleryAnimation index={3}>
          <ImageCard
            image={picturesData[3].pictures}
            alt={picturesData[3].alt}
          />
        </GalleryAnimation>
      </div>

      <div className="lg:auto-rows-56 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:row-span-3">
          <GalleryAnimation index={4}>
            <ImageCard
              image={picturesData[4].pictures}
              alt={picturesData[4].alt}
            />
          </GalleryAnimation>
        </div>
        <GalleryAnimation index={5}>
          <ImageCard
            image={picturesData[5].pictures}
            alt={picturesData[5].alt}
          />
        </GalleryAnimation>
        <GalleryAnimation index={6}>
          <ImageCard
            image={picturesData[6].pictures}
            alt={picturesData[6].alt}
          />
        </GalleryAnimation>
        <div className="lg:row-span-3">
          <GalleryAnimation index={7}>
            <ImageCard
              image={picturesData[9].pictures}
              alt={picturesData[9].alt}
            />
          </GalleryAnimation>
        </div>
        <GalleryAnimation index={8}>
          <ImageCard
            image={picturesData[7].pictures}
            alt={picturesData[7].alt}
          />
        </GalleryAnimation>
        <GalleryAnimation index={9}>
          <ImageCard
            image={picturesData[8].pictures}
            alt={picturesData[8].alt}
          />
        </GalleryAnimation>
      </div>

      <div className="lg:auto-rows-44 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-2 lg:row-span-1">
          <GalleryAnimation index={10}>
            <ImageCard
              image={picturesData[10].pictures}
              alt={picturesData[10].alt}
            />
          </GalleryAnimation>
        </div>
        <GalleryAnimation index={11}>
          <ImageCard
            image={picturesData[11].pictures}
            alt={picturesData[11].alt}
          />
        </GalleryAnimation>
        <GalleryAnimation index={12}>
          <ImageCard
            image={picturesData[12].pictures}
            alt={picturesData[12].alt}
          />
        </GalleryAnimation>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <GalleryAnimation index={13}>
          <ImageCard
            image={picturesData[13].pictures}
            alt={picturesData[13].alt}
          />
        </GalleryAnimation>
        <GalleryAnimation index={14}>
          <ImageCard
            image={picturesData[14].pictures}
            alt={picturesData[14].alt}
          />
        </GalleryAnimation>
        <GalleryAnimation index={15}>
          <ImageCard
            image={picturesData[15].pictures}
            alt={picturesData[15].alt}
          />
        </GalleryAnimation>
        <GalleryAnimation index={16}>
          <ImageCard
            image={picturesData[16].pictures}
            alt={picturesData[16].alt}
          />
        </GalleryAnimation>
      </div>
    </div>
  );
};

export default GalleryGrid;
