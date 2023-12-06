import { animated, useSpring } from '@react-spring/web';

import { useVoteData } from '@/hooks/useVoteData';
import { LoadingComponent } from '@/utilities/LoadingComponent';

import { ResultCard } from '../modules/ResultCard';
import { BarHorizontal } from '../modules/Spring/BarHorizontal';
import { BarVertical } from '../modules/Spring/BarVertical';

export const ChartPage = () => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 2800,
    config: { duration: 1000 }, // フェードインの持続時間をミリ秒で指定
  });
  const { isLoadingTotalVote, totalVote } = useVoteData();

  if (isLoadingTotalVote && !totalVote) return <LoadingComponent />;

  return (
    <>
      <main className="flex h-full w-full max-w-6xl grow flex-col items-center justify-start gap-16 p-4 font-dela md:my-32 md:p-0">
        {totalVote && (
          <>
            <BarHorizontal mushrooms={totalVote.kinoko.diff} bamboo={totalVote.takenoko.diff} />
            <BarVertical mushrooms={totalVote.kinoko.diff} bamboo={totalVote.takenoko.diff} />
            <animated.div
              className="flex w-full flex-col items-center justify-between gap-6 md:flex-row"
              style={props}
            >
              <ResultCard type="kinoko" count={totalVote.kinoko.diff} />
              <span className="text-8xl">VS</span>
              <ResultCard type="takenoko" count={totalVote.takenoko.diff} />
            </animated.div>
          </>
        )}
      </main>
    </>
  );
};
