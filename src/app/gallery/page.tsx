import Header from "@/components/Header";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import galleryHeader from "@/public/headers/galleryHeader.webp";
import mobileHeader from "@/public/mobileHeaders/mobileGallery.webp";

const Gallery = () => {
  return (
    <div>
      <Header
        title="Gallery"
        image={galleryHeader}
        mobileImage={mobileHeader}
      />
      <GalleryGrid />
    </div>
  );
};

export default Gallery;
