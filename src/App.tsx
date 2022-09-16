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
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(253, 121, 168), rgb(250, 177, 160));
`;
const Box = styled(motion.div)`
  width: 400px;
  height: 400px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  margin: 50px;
`;

const Circle = styled(motion.div)`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  background-color: #0984e3;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
function App() {
  const [clicked, setClicked] = useState(false);
  const toggleCilcked = () => {
    setClicked((prev) => !prev);
  };
  return (
    <Wrapper onClick={toggleCilcked}>
      <Box>
        {!clicked ? (
          <Circle layoutId="circle" style={{ borderRadius: "50px" }} />
        ) : null}
      </Box>
      <Box>
        {clicked ? (
          <Circle layoutId="circle" style={{ borderRadius: "0px" }} />
        ) : null}
      </Box>
    </Wrapper>
  );
}

export default App;
/* <ReactQueryDevtools initialIsOpen={true} /> */
/*  ReactQuery 캐시 저장된데이터를 시각화해줌 */

// transition={{ type: "spring", bounce: 0.8 }}
// initial={{ scale: 0 }}  초기스타일
// animate={{ scale: 1, rotateZ: 360 }}   최종스타일
