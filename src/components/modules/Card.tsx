import { GiBamboo, GiGrassMushroom } from 'react-icons/gi';

import Kinoko from '../../assets/kinoko.png';
import Takenoko from '../../assets/takenoko.png';

type CardProps = {
  type: 'kinoko' | 'takenoko';
};

export const Card = (props: CardProps) => {
  const { type } = props;

  return (
    <div className="flex w-full flex-col items-center rounded py-8 font-dela text-4xl  shadow md:w-[460px] md:px-16">
      {type === 'kinoko' ? (
        <>
          <div className="flex flex-row gap-8 text-kinoko">
            <GiGrassMushroom className="h-11 w-11 object-contain" />
            <span className="">き〇この山</span>
          </div>
          <img src={Kinoko} alt="" className="h-auto w-28 object-contain" />
        </>
      ) : (
        <>
          <div className="flex flex-row gap-8 text-takenoko">
            <GiBamboo className="h-11 w-11 object-contain" />
            <span>たけ〇この里</span>
          </div>
          <img src={Takenoko} alt="" className="h-auto w-28 object-contain" />
        </>
      )}
    </div>
  );
};
