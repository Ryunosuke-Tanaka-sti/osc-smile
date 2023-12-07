import { useNavigate } from 'react-router-dom';

import { Button } from '../modules/Button';
import { Card } from '../modules/Card';
import { List } from '../modules/List';

export const TopPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <main className="my-10 flex h-full w-full max-w-5xl grow flex-col items-center justify-start gap-16 px-6 font-dela md:gap-16 md:px-0 md:py-28">
        <h1 className="hidden font-reggae text-7xl text-main md:flex md:items-center md:justify-center">
          負けられない戦いがここにある
        </h1>
        <div className="flex w-full flex-col items-center gap-5">
          <h2 className="flex w-full items-center justify-center  py-4 text-4xl text-main md:px-12">
            あなたはどっち派？
          </h2>
          <div className="flex w-full flex-col justify-between gap-3 md:flex-row">
            <Card type="kinoko" />
            <Card type="takenoko" />
          </div>
        </div>
        <Button text="会場の投票結果はこちら" onClick={() => navigate('chart')} />

        <ul className="flex w-full flex-col items-start gap-5 font-kiwi">
          <h2 className="flex w-full items-center justify-center  py-4 text-4xl text-main md:px-12">
            Q＆A
          </h2>
          <List
            title="かる～い自己紹介"
            content="どもども！サイオステクノロジーという会社になります。いろんなことをやっているのですが、会社の情報をはフッターにまとめていますので興味があったら覗いてみてください。"
          />
          <List
            title="これはどんなアプリ?"
            content="笑顔と怒り顔が採点されます。100点満点で採点されており、笑顔の数値から怒りの数値がひかれた数が投票数になります。満点の笑顔を作れる方は、100点になります。敵対勢力に怒り顔Maxで行くと、-100点になります。"
          />
          <List
            title="ステマじゃないよ!"
            content="全然ステマじゃないです。勝手に作ったアプリです。"
          />
          <List
            title="業務とは関係ありません。"
            content="普段のお仕事は、大学向けに認証基盤の提供をしていたり、企業向けにOSSのサポートだったり、SIerみたいなこともやっています。新卒から中堅の方まで広く募集しているので、もし興味を持ってもらえればカジュアル面談などどうでしょうか？"
          />
        </ul>
      </main>
    </>
  );
};
