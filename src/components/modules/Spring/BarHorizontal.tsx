import { animated, useSpring } from '@react-spring/web';

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

export const BarHorizontal = (props: TripleGraphProps) => {
  const { mushrooms, bamboo } = props;

  const { ratioMushrooms, ratioBamboo } = calculatePercentages(mushrooms, bamboo);

  const mushroomsAnimationProps = useSpring({
    from: { width: '0%' },
    to: async (next) => {
      await next({ tension: 200, friction: 20 });
      for (let i = 0; i < 5; i++) {
        await next({
          width: `${Math.random() * 5 + 25}%`,
          config: { tension: 200, friction: 20 },
        });
      }
      await next({
        width: `${ratioMushrooms}%`,
      });
    },
  });
  const bambooAnimationProps = useSpring({
    from: { width: '0%' },
    to: async (next) => {
      await next({ tension: 200, friction: 20 });
      for (let i = 0; i < 5; i++) {
        await next({
          width: `${Math.random() * 5 + 25}%`,
          config: { tension: 200, friction: 20 },
        });
      }
      await next({
        width: `${ratioBamboo}%`,
      });
    },
  });

  return (
    <>
      <div className="relative flex h-44 w-full flex-row justify-between rounded-md p-5 shadow">
        <animated.div className={'bg-kinoko'} style={mushroomsAnimationProps} />
        <animated.div className={' bg-takenoko'} style={bambooAnimationProps} />
        <span className="absolute left-1/2 top-0 h-full w-2 -translate-x-1/2 bg-main" />
      </div>
    </>
  );
};
