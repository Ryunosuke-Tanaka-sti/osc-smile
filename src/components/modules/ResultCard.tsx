import { GiBamboo, GiGrassMushroom } from 'react-icons/gi';

type ResultCardProps = {
  type: 'kinoko' | 'takenoko';
  count: number;
};

export const ResultCard = (props: ResultCardProps) => {
  const { type, count } = props;

  return (
    <div className="flex w-full flex-col items-center rounded py-9 font-dela text-4xl shadow md:w-[400px]">
      {type === 'kinoko' ? (
        <>
          <div className="flex flex-row gap-8 text-kinoko">
            <GiGrassMushroom className="h-11 w-11 object-contain" />
            <span className="">き〇この山</span>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-row gap-8 text-takenoko">
            <GiBamboo className="h-11 w-11 object-contain" />
            <span>たけ〇この里</span>
          </div>
        </>
      )}
      <span className="flex items-center justify-center font-dela text-main md:text-6xl">
        {count}
      </span>
    </div>
  );
};
