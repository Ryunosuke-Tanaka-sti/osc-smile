import { GiBamboo, GiGrassMushroom } from 'react-icons/gi';

export const ChartPage = () => {
  // const { isLoadingTotalVote, totalVote } = useVoteData();

  // if (isLoadingTotalVote && !totalVote) return <LoadingComponent />;
  return (
    <>
      <main className="my-10 flex h-full w-full max-w-5xl grow flex-col items-center justify-start gap-10 font-dela">
        <ul className="flex w-full flex-row justify-around text-xl md:text-3xl">
          <li className="flex flex-row items-center gap-2  text-[#F59E0B]">
            <GiGrassMushroom className="h-12 w-12" />
            き〇この山
          </li>
          <li className="flex flex-row items-center gap-2  text-[#22C55E]">
            <GiBamboo className="h-12 w-12" />
            タ〇ノコの里
          </li>
        </ul>
      </main>
    </>
  );
};
