import { useNavigate } from 'react-router-dom';

import { Button } from '../modules/Button';
import { Card } from '../modules/Card';

export const TopPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <main className="my-10 flex h-full w-full max-w-5xl grow flex-col items-center justify-start gap-16 px-6 font-dela md:gap-16 md:px-0 md:py-28">
        <div className="hidden font-reggae text-7xl md:flex md:items-center md:justify-center ">
          負けられない戦いがここにある
        </div>
        <div className="flex w-full flex-col items-center gap-5">
          <div className="flex items-center justify-center border-b-8 border-main py-4 text-4xl text-main md:px-12">
            あなたはどっち派？
          </div>
          <div className="flex w-full flex-col justify-between gap-3 md:flex-row">
            <Card type="kinoko" />
            <Card type="takenoko" />
          </div>
        </div>
        <Button text="会場の投票結果はこちら" onClick={() => navigate('chart')} />
      </main>
    </>
  );
};
