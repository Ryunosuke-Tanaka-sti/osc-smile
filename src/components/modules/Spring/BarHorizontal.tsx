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
  if (total <= 0) return { ratioMushrooms: 0, ratioBamboo: 0 };
  const ratioMushrooms = (a / total) * 100;
  const ratioBamboo = (b / total) * 100;
  return { ratioMushrooms, ratioBamboo };
}

export const BarHorizontal = (props: TripleGraphProps) => {
  const { mushrooms, bamboo } = props;

  const { ratioMushrooms, ratioBamboo } = calculatePercentages(mushrooms, bamboo);

  const mushroomsAnimationProps = useSpring({
    from: { width: '0%' },
    to: async (next) => {
      await next({ tension: 200, friction: 20, config: { duration: 200 } });
      for (let i = 0; i < 5; i++) {
        await next({
          width: `${Math.random() * 5 + 10}%`,
          config: { tension: 200, friction: 20, duration: 500 },
        });
      }
      await next({
        width: `${ratioMushrooms}%`,
        config: { duration: 100 },
      });
    },
  });
  const bambooAnimationProps = useSpring({
    from: { width: '0%' },
    to: async (next) => {
      await next({ tension: 200, friction: 20, config: { duration: 200 } });
      for (let i = 0; i < 5; i++) {
        await next({
          width: `${Math.random() * 5 + 10}%`,
          config: { tension: 200, friction: 20, duration: 500 },
        });
      }
      await next({
        width: `${ratioBamboo}%`,
        config: { duration: 100 },
      });
    },
  });

  return (
    <div className="hidden w-full flex-row items-center gap-2 py-4 shadow md:flex">
      <div className="block rounded p-2">
        <img className="h-auto w-56 object-contain" src={Kinoko} alt="" />
      </div>
      <div className="relative flex h-44 w-full flex-row justify-between rounded-md shadow">
        <animated.div className={'bg-kinoko'} style={mushroomsAnimationProps} />
        <animated.div className={' bg-takenoko'} style={bambooAnimationProps} />
        <span className="absolute left-1/2 top-0 h-full w-2 -translate-x-1/2 bg-main" />
      </div>
      <div className="block rounded p-2">
        <img className="h-auto w-56 object-contain" src={Takenoko} alt="" />
      </div>
    </div>
  );
};
