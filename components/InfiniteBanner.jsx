import React from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";

// interface InfiniteBannerProps {
//   clock: MotionValue<number>;
//   loopDuration?: number;
//   children: React.ReactNode;
// }

export const useClock = ({
  defaultValue = 0,
  reverse = false,
  speed = 1,
} = {}) => {
  const clock = useMotionValue(defaultValue);
  const paused = React.useRef(false);
  useAnimationFrame((t, dt) => {
    if (paused.current) {
      return;
    }
    if (reverse) {
      clock.set(clock.get() - dt * speed);
    } else {
      clock.set(clock.get() + dt * speed);
    }
  });
  return {
    value: clock,
    stop: () => {
      paused.current = true;
    },
    start: () => {
      paused.current = false;
    },
  };
};

const InfiniteBanner = ({
  clock,
  loopDuration = 22000,
  children,
  ...otherProps
}) => {
  const progress = useTransform(
    clock,
    (time) => (time % loopDuration) / loopDuration
  );
  const percentage = useTransform(progress, (t) => t * 100);
  const translateX = useMotionTemplate`-${percentage}%`;
  return (
    <div
      {...otherProps}
      style={{
        position: "relative",
        width: "max-content",
        overflow: "hidden",
        ...otherProps.style,
      }}
    >
      <motion.div style={{ translateX, width: "max-content" }}>
        <div>{children}</div>
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            left: "100%",
            top: 0,
          }}
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default InfiniteBanner;
