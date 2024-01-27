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

  // 本番環境
  const { isLoadingTotalVote, totalVote } = useVoteData();
  if (isLoadingTotalVote && !totalVote) return <LoadingComponent />;

  // const totalVote = {
  //   kinoko: {
  //     count: 9,
  //     happiness: 286,
  //     anger: 66,
  //     diff: 220,
  //   },
  //   takenoko: {
  //     count: 27,
  //     happiness: 921,
  //     anger: 62,
  //     diff: 859,
  //   },
  // };

  return (
    <>
      <main className="my-12 flex h-full w-full max-w-6xl grow flex-col items-center justify-start gap-16 p-4 font-dela md:my-32 md:p-0">
        {totalVote && (
          <>
            <animated.div
              className="flex w-full flex-col items-center rounded py-6 text-main shadow md:p-6"
              style={props}
            >
              <div className="flex items-center justify-center py-4 text-4xl md:px-12">
                現在の参加人数
              </div>
              <div className="text-2xl">
                <span className="text-6xl">
                  {totalVote.kinoko.count + totalVote.takenoko.count}
                </span>
                名
              </div>
            </animated.div>
            <BarHorizontal mushrooms={totalVote.kinoko.diff} bamboo={totalVote.takenoko.diff} />
            <BarVertical mushrooms={totalVote.kinoko.diff} bamboo={totalVote.takenoko.diff} />
            <animated.div
              className="flex w-full flex-col items-center justify-between gap-6 md:flex-row"
              style={props}
            >
              <ResultCard type="kinoko" count={totalVote.kinoko.diff} />
              <span className="text-8xl text-main">VS</span>
              <ResultCard type="takenoko" count={totalVote.takenoko.diff} />
            </animated.div>
          </>
        )}
      </main>
    </>
  );
};
