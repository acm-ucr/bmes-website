const Example = (props: {
  text1: string;
  text2: string;
  text3: string;
  text4;
}) => {
  return (
    <div className="bg-bmes-blue-300 flex w-2/3 flex-col items-center gap-4 justify-self-center rounded p-8">
      <div className="bg-bmes-blue-100 w-1/2 p-5 text-center">
        rounded-full text-xl text-white {props.text1}
      </div>
      <div className="flex w-1/2 flex-row gap-1">
        <div className="bg-bmes-blue-100 w-full p-5 text-center">
          text-xl
          {props.text2}
        </div>
        <div className="bg-bmes-blue-100 w-full p-5 text-center">
          text-xl
          {props.text3}
        </div>
      </div>
      <div className="bg-bmes-blue-300 w-full p-5 text-center">
        rounded-full text-xl{props.text4}
      </div>
    </div>
  );
};

export default Example;
