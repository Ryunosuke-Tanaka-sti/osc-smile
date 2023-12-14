import { useState } from 'react';

import { animated, useChain, useSpring, useSpringRef } from '@react-spring/web';
import { FaCaretDown, FaCaretUp } from 'react-icons/fa6';

type ListProps = {
  title: string;
  content: string;
};

export const List = (props: ListProps) => {
  const { title, content } = props;
  const [isShow, setIsShow] = useState(false);

  const ref1 = useSpringRef();
  const ref2 = useSpringRef();

  const heightStyle = useSpring({
    ref: ref1,
    config: { duration: 100 },
  });

  const fadeStyles = useSpring({
    ref: ref2,
    gridTemplateRows: isShow ? '1fr' : '0fr',
  });

  useChain([ref1, ref2], [0, 0.1]);

  return (
    <animated.div
      className="flex w-full flex-col gap-2 border-y-2 border-main/30 py-2 text-main hover:cursor-pointer md:py-4"
      style={heightStyle}
      onClick={() => setIsShow((value) => !value)}
    >
      <h2 className="flex items-center justify-between text-2xl md:text-4xl">
        {title}
        {isShow ? <FaCaretDown /> : <FaCaretUp />}
      </h2>
      <animated.div className="grid w-full text-xl md:text-2xl" style={fadeStyles}>
        <div className="overflow-hidden">{content}</div>
      </animated.div>
    </animated.div>
  );
};
