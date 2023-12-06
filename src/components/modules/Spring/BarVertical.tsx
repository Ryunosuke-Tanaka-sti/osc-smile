import { animated, useSpring } from '@react-spring/web';

import Kinoko from '@assets/kinoko.png';
import Takenoko from '@assets/takenoko.png';

interface TripleGraphProps {
  mushrooms: number;
  bamboo: number;
}

function calculatePercentages(
  a: number,
  b: number
): { ratioMushrooms: number; ratioBamboo: number } {
  const total = a + b;
  const ratioMushrooms = (a / total) * 100;
  const ratioBamboo = (b / total) * 100;
  return { ratioMushrooms, ratioBamboo };
}

export const BarVertical = (props: TripleGraphProps) => {
  const { mushrooms, bamboo } = props;

  const { ratioMushrooms, ratioBamboo } = calculatePercentages(mushrooms, bamboo);

  const mushroomsAnimationProps = useSpring({
    from: { height: '0%' },
    to: async (next) => {
      await next({ tension: 200, friction: 20 });
      for (let i = 0; i < 5; i++) {
        await next({
          height: `${Math.random() * 5 + 25}%`,
          config: { tension: 200, friction: 20 },
        });
      }
      await next({
        height: `${ratioMushrooms}%`,
      });
    },
  });
  const bambooAnimationProps = useSpring({
    from: { height: '0%' },
    to: async (next) => {
      await next({ tension: 200, friction: 20 });
      for (let i = 0; i < 5; i++) {
        await next({
          height: `${Math.random() * 5 + 25}%`,
          config: { tension: 200, friction: 20 },
        });
      }
      await next({
        height: `${ratioBamboo}%`,
      });
    },
  });

  return (
    <>
      <div className="relative flex h-[600px] w-full flex-row items-end justify-around rounded-md p-5 shadow md:hidden">
        <div className="flex h-full w-1/2 flex-col items-center justify-end">
          <animated.div className={'w-1/2 bg-kinoko'} style={mushroomsAnimationProps} />
          <img src={Kinoko} className="h-12 w-auto object-contain" alt="" />
        </div>
        <div className="flex h-full w-1/2 flex-col items-center justify-end">
          <animated.div className={' w-1/2 bg-takenoko'} style={bambooAnimationProps} />
          <img src={Takenoko} className="h-12 w-auto object-contain" alt="" />
        </div>
      </div>
    </>
  );
};
