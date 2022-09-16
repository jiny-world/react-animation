import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import {
  motion,
  useMotionValue,
  useScroll,
  useTransform,
  Variants,
  AnimatePresence,
} from "framer-motion";
import React, { ReactText, useState } from "react";
import { devNull } from "os";

const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
`;
const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(135deg, rgb(253, 121, 168), rgb(250, 177, 160));
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 70vw;
  gap: 10px;
`;

const Box = styled(motion.div)`
  height: 200px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Circle = styled(motion.div)`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  background-color: #81ecec;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const Overlay = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled(motion.button)`
  background-color: white;
  border: 0px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  margin: 50px;
`;

const boxVariants = {
  hover: (isLeft: boolean) => ({
    transformOrigin: isLeft ? "bottom right" : "top left",
    scale: 1.1,
  }),

  entry: (isBack: boolean) => ({
    x: isBack ? -500 : 500,
    opacity: 0,
    scale: 0,
  }),
};
function App() {
  const [id, setId] = useState<null | string>(null);
  const [isCircleClicked, setIsCircleClicked] = useState(false);

  const boxCilcked = (i: string) => {
    setId(i);
  };
  const closeLayout = () => {
    setId(null);
  };
  const switchCircle = () => {
    setIsCircleClicked((prev) => !prev);
  };
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <AnimatePresence>
          <Grid>
            <Box
              variants={boxVariants}
              layoutId={"1"}
              onClick={() => boxCilcked("1")}
              custom={true}
              whileHover="hover"
            ></Box>
            <Box>{!isCircleClicked ? null : <Circle layoutId="circle" />}</Box>
            <Box>{isCircleClicked ? null : <Circle layoutId="circle" />}</Box>
            <Box
              variants={boxVariants}
              layoutId={"4"}
              onClick={() => boxCilcked("4")}
              custom={false}
              whileHover="hover"
            ></Box>
          </Grid>
          {id !== null ? (
            <Overlay
              onClick={closeLayout}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Box layoutId={id} style={{ width: 300, height: 200 }} />
            </Overlay>
          ) : null}
        </AnimatePresence>

        <Button
          onClick={switchCircle}
          style={
            isCircleClicked ? { color: "blue", scale: 1.2 } : { color: "red" }
          }
        >
          Switch
        </Button>
      </Wrapper>
    </>
  );
}

export default App;
/* <ReactQueryDevtools initialIsOpen={true} /> */
/*  ReactQuery 캐시 저장된데이터를 시각화해줌 */

// transition={{ type: "spring", bounce: 0.8 }}
// initial={{ scale: 0 }}  초기스타일
// animate={{ scale: 1, rotateZ: 360 }}   최종스타일
