const Example = (props: {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
}) => {
  return (
    <div className="bg-bmes-blue-100 flex w-2/3 flex-col items-center gap-4 justify-self-center rounded-xl p-8">
      <div className="bg-bmes-blue-200 w-1/2 p-5 text-center text-white">
        {props.text1}
      </div>
      <div className="flex w-1/2 flex-row gap-1">
        <div className="bg-bmes-blue-300 w-full rounded-full p-5 text-center text-black">
          {props.text2}
        </div>
        <div className="bg-bmes-blue-300 w-full rounded-full p-5 text-center text-black">
          {props.text3}
        </div>
      </div>
      <div className="bg-bmes-gray-100 w-1/2 p-5 text-center text-black">
        {props.text4}
      </div>
    </div>
  );
};

export default Example;
