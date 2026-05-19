import Header from "@/components/Header";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import galleryHeader from "@/public/headers/galleryHeader.webp";

const Gallery = () => {
  return (
    <div>
      <Header title="Gallery" image={galleryHeader} />
      <GalleryGrid />
    </div>
  );
};

export default Gallery;
