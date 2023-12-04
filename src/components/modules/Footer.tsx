import LogoImg from '../../assets/logo.png';

export const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center justify-around gap-6 border-t-4 border-main p-6 font-kiwi md:flex-row md:p-14">
      <div className="flex w-full flex-col gap-16">
        <span className="hidden text-4xl md:flex">
          ふざけた展示ですけど企業ブースだったんです...
        </span>
        <ul className="flex grow flex-col gap-10 text-2xl hover:cursor-pointer md:w-full md:flex-row">
          <li className="flex w-full items-center justify-center rounded border border-main py-4 transition-transform md:w-auto md:border-none md:p-0 md:hover:-translate-y-1">
            会社の紹介
          </li>
          <li className="flex w-full items-center justify-center rounded border border-main py-4 transition-transform md:w-auto md:border-none md:p-0 md:hover:-translate-y-1">
            Tech Blog
          </li>
          <li className="hidden transition-transform  md:block md:hover:-translate-y-1">
            カジュアル面談とかどうっすか？
          </li>
          <li className="flex w-full items-center justify-center rounded border border-main py-4  md:hidden">
            カジュアル面談
          </li>
        </ul>
      </div>
      <div>
        <img
          src={LogoImg}
          className="h-auto w-full cursor-pointer object-contain transition-all md:h-auto md:w-80 md:hover:-translate-y-1"
          alt="サイオス！サイオステクノロジーエンジニアチャンネル"
        />
      </div>
    </footer>
  );
};
