import { ResultCard } from '../modules/ResultCard';
import { BarHorizontal } from '../modules/Spring/BarHorizontal';
import { BarVertical } from '../modules/Spring/BarVertical';

export const ChartPage = () => {
  // const { isLoadingTotalVote, totalVote } = useVoteData();

  // if (isLoadingTotalVote && !totalVote) return <LoadingComponent />;
  return (
    <>
      <main className="flex h-full w-full max-w-6xl grow flex-col items-center justify-start gap-16 p-4 font-dela md:my-32 md:p-0">
        <BarHorizontal mushrooms={50} bamboo={50} />
        <BarVertical mushrooms={50} bamboo={50} />
        <div className="flex w-full flex-col items-center justify-between gap-6 md:flex-row">
          <ResultCard type="kinoko" count={50} />
          <span className="text-8xl">VS</span>
          <ResultCard type="takenoko" count={50} />
        </div>
      </main>
    </>
  );
};
