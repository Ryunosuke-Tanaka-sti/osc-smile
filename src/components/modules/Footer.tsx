import LogoImg from '../../assets/logo.png';

export const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center justify-around gap-6 border-t-4 border-main p-6 font-kiwi md:flex-row md:p-14">
      <div className="flex w-full flex-col gap-16">
        <span className="hidden text-4xl md:flex">
          ふざけた展示ですけど企業ブースだったんです...
        </span>
        <ul className="flex grow flex-col gap-10 text-2xl hover:cursor-pointer md:w-full md:flex-row">
          <a
            className="flex w-full items-center justify-center rounded border border-main py-4 transition-transform md:w-auto md:border-none md:p-0 md:hover:-translate-y-1"
            href="https://tech-lab-engineer.sios.jp/?_gl=1%2Amw9erd%2A_ga%2AODgzNjAzMzIxLjE2ODQ0NTk2Nzg.%2A_ga_L7TL4612SQ%2AMTcwMTgyNjU4Ni4yNzIuMC4xNzAxODI2NTg2LjAuMC4w"
            target="_blank"
          >
            会社の紹介
          </a>
          <a
            className="flex w-full items-center justify-center rounded border border-main py-4 transition-transform md:w-auto md:border-none md:p-0 md:hover:-translate-y-1"
            href="https://tech-lab.sios.jp/"
            target="_blank"
          >
            Tech Blog
          </a>
          <a
            className="flex w-full items-center justify-center rounded border border-main py-4 transition-transform md:w-auto md:border-none md:p-0 md:hover:-translate-y-1"
            href="https://mk.sios.jp/casualvisit_entry.html?_gl=1*fdpfc2*_ga*ODgzNjAzMzIxLjE2ODQ0NTk2Nzg.*_ga_L7TL4612SQ*MTcwMTgyNjU4Ni4yNzIuMS4xNzAxODI2NjAyLjAuMC4w"
            target="_blank"
          >
            カジュアル面談
          </a>
        </ul>
      </div>
      <div>
        <img
          src={LogoImg}
          className="h-auto w-full cursor-pointer object-contain transition-all hover:cursor-pointer md:h-auto md:w-80 md:hover:-translate-y-1"
          alt="サイオス！サイオステクノロジーエンジニアチャンネル"
          onClick={() =>
            window.open('https://www.youtube.com/channel/UCjIVEOLmZlBrgq7nrxVFuRw', '_blank')
          }
        />
      </div>
    </footer>
  );
};
