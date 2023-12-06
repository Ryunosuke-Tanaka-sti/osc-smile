import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="flex w-full items-center justify-center border-b-4 border-main py-6 font-reggae text-2xl text-main md:text-5xl">
      <div onClick={() => navigate('/')}>
        <span className="text-kinoko">キノコ</span>
        <span className="text-takenoko">タケノコ</span>
        <span>論争会場</span>
      </div>
    </header>
  );
};
