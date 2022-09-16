import styled from "styled-components";
import {
  motion,
  useMotionValue,
  useScroll,
  useTransform,
  Variants,
  AnimatePresence,
} from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
  display: flex;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(253, 121, 168), rgb(250, 177, 160));
  flex-direction: column;
`;
const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  position: absolute;
`;

const boxVariants = {
  entry: (isBack: boolean) => ({
    x: isBack ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
  exit: (isBack: boolean) => ({
    x: isBack ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 1,
    },
  }),
};

function App() {
  const [visible, setVisible] = useState(1);
  const [isBack, setIsBack] = useState(false);
  const prevBtn = () => {
    setVisible((prev) => (prev === 1 ? 1 : prev - 1));
    setIsBack(true);
  };
  const nextBtn = () => {
    setVisible((prev) => (prev === 10 ? 10 : prev + 1));
    setIsBack(false);
  };

  return (
    <Wrapper>
      <AnimatePresence
        custom={isBack}
        exitBeforeEnter // exit 가 완전히 실행 된 후 enter 를 실행함
      >
        <Box
          custom={isBack}
          key={visible}
          variants={boxVariants}
          initial="entry"
          animate="center"
          exit="exit"
        >
          {visible}
        </Box>
      </AnimatePresence>
      <div>
        <button onClick={prevBtn}>Prev</button>
        <button onClick={nextBtn}>Next</button>
      </div>
    </Wrapper>
  );
}

export default App;
/* <ReactQueryDevtools initialIsOpen={true} /> */
/*  ReactQuery 캐시 저장된데이터를 시각화해줌 */

// transition={{ type: "spring", bounce: 0.8 }}
// initial={{ scale: 0 }}  초기스타일
// animate={{ scale: 1, rotateZ: 360 }}   최종스타일
