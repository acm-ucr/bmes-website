interface ExampleProps {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
}
const Example = ({text1, text2, text3, text4}: ExampleProps) => {
  return (
    <div className="bg-bmes-blue-100 flex w-2/3 flex-col items-center gap-4 justify-self-center rounded p-8">
      <div className="bg-bmes-blue-200 w-full p-5 text-center text-xl text-white">
        {text1}
      </div>
      <div className="flex w-full flex-row gap-4">
        <div className="bg-bmes-blue-300 w-full rounded-full p-5 text-center text-xl">
          {text2}
        </div>
        <div className="bg-bmes-blue-300 w-full rounded-full p-5 text-center text-xl">
          {text3}
        </div>
      </div>
      <div className="bg-bmes-gray-100 w-full p-5 text-center text-xl">
        {text4}
      </div>
    </div>
  );
};
export default Example;

