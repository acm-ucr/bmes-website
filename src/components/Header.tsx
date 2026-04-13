import Image from "next/image";

type HeaderProps = {
  title: string;
  image: string;
};

export default function Header({ title, image }: HeaderProps) {
  return (
    <div className="relative h-screen w-screen">
      <div className="relative h-2/5 w-full">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="bg-bmes-blue-200/45 absolute inset-0" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="text-6xl font-light text-white">{title}</div>
        </div>
      </div>
    </div>
  );
}
