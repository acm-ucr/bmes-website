const Vision = () => {
  return (
    <div
      className="flex w-full flex-col items-center justify-center px-10 py-20"
      style={{
        background: "linear-gradient(180deg, #5699e6 0%, #003067 100%)",
      }}
    >
      <h2 className="mb-6 text-4xl text-white">Our Vision</h2>
      <p className="mb-5 max-w-3xl text-center text-lg leading-8 text-white">
        The vision of the Biomedical Engineering Society (BMES) is to serve as the world's leading society of professionals devoted to developing and using engineering and technology to advance human and well being.
      </p>

      <p className="max-w-3xl text-center text-lg leading-8 text-white">
        We at the UC Riverside chapter of this organization are dedicated in helping our members achieve their academic goals, whether they be pursuing graduate school, medical school, or a career in industry. The objective of our events is to help our members to develop professional skills required in their chosen career path as well as social skills to network with other students with the same goals.
      </p>
    </div>
  );
};

export default Vision;