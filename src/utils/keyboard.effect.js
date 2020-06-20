import { useEffect } from "react";

import useKeyPress from "./use-key-press.effect";

const useKeyBoard = (toggleRunning, applyTime) => {
  const enterPress = useKeyPress("Enter");
  const spacePress = useKeyPress(" ");
  const arrowRight = useKeyPress("ArrowRight");
  const arrowLeft = useKeyPress("ArrowLeft");
  const arrowUp = useKeyPress("ArrowUp");
  const arrowDown = useKeyPress("ArrowDown");

  useEffect(() => {
    if (arrowRight) {
      applyTime(60);
    }
  }, [arrowRight]);

  useEffect(() => {
    if (arrowLeft) {
      applyTime(-60);
    }
  }, [arrowLeft]);

  useEffect(() => {
    if (arrowUp) {
      applyTime(1);
    }
  }, [arrowUp]);

  useEffect(() => {
    if (arrowDown) {
      applyTime(-1);
    }
  }, [arrowDown]);

  useEffect(() => {
    if (enterPress || spacePress) {
      toggleRunning();
    }
  }, [enterPress, spacePress]);
};

export default useKeyBoard;
