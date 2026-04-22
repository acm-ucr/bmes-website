interface VisionProps {
  title: string;
  text: string;
  text2: string;
}

const Vision = ({ title, text, text2 }: VisionProps) => {
  return (
    <div
      className="flex w-full flex-col items-center justify-center px-10 py-20"
      style={{
        background: "linear-gradient(180deg, #5699e6 0%, #02336a 100%)",
      }}
    >
      <h2 className="mb-6 text-4xl text-white">{title}</h2>
      <p className="mb-5 max-w-3xl text-center text-lg leading-8 text-white">
        {text}
      </p>

      <p className="max-w-3xl text-center text-lg leading-8 text-white">
        {text2}
      </p>
    </div>
  );
};

export default Vision;
