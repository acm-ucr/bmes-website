"use client";

import { picturesData } from "@/data/GalleryImages";
import ImageCard from "@/components/gallery/GalleryCard";

const GalleryGrid = () => {
  return (
    <div className="my-10 flex w-full flex-col gap-4 px-4 sm:px-6 lg:px-8">
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {picturesData.slice(0, 4).map((item, i) => (
          <ImageCard key={i} image={item.pictures} alt={item.alt} />
        ))}
      </div>

      <div className="lg:auto-rows-56 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:row-span-3">
          <ImageCard
            image={picturesData[4].pictures}
            alt={picturesData[4].alt}
          />
        </div>
        {picturesData.slice(5, 7).map((item, i) => (
          <ImageCard key={i} image={item.pictures} alt={item.alt} />
        ))}
        <div className="lg:row-span-3">
          <ImageCard
            image={picturesData[9].pictures}
            alt={picturesData[9].alt}
          />
        </div>
        {picturesData.slice(7, 9).map((item, i) => (
          <ImageCard key={i} image={item.pictures} alt={item.alt} />
        ))}
      </div>

      <div className="lg:auto-rows-44 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-2 lg:row-span-1">
          <ImageCard
            image={picturesData[10].pictures}
            alt={picturesData[10].alt}
          />
        </div>
        {picturesData.slice(11, 13).map((item, i) => (
          <ImageCard key={i} image={item.pictures} alt={item.alt} />
        ))}
      </div>

      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {picturesData.slice(13, 17).map((item, i) => (
          <ImageCard key={i} image={item.pictures} alt={item.alt} />
        ))}
      </div>
    </div>
  );
};

export default GalleryGrid;
