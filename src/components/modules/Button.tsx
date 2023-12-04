type ButtonProps = {
  text: string;
  onClick: () => void;
};

export const Button = (props: ButtonProps) => {
  const { text, onClick } = props;
  return (
    <button
      className="w-full rounded-full bg-main py-5 text-2xl text-white md:w-auto md:px-12 md:text-4xl"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
