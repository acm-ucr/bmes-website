const Example = (props: {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
}) => {
  return (
    <div className="bg-bmes-blue-100 flex w-1/2 flex-col items-center justify-center gap-8 rounded-2xl p-8">
      <div
        className="w-1/2 p-5 text-center text-white"
        style={{ backgroundColor: "#003067" }}
      >
        {props.text1}
      </div>
      <div className="flex w-1/2 flex-row gap-1">
        <div className="bg-bmes-blue-300 w-full rounded-full p-5 text-center">
          {props.text2}
        </div>
        <div className="bg-bmes-blue-300 w-full rounded-full p-5 text-center">
          {props.text3}
        </div>
      </div>
      <div
        className="bg-bmes-blue-300 w-1/2 p-5 text-center"
        style={{ backgroundColor: "#8fa2bd" }}
      >
        {props.text4}
      </div>
    </div>
  );
};

export default Example;
