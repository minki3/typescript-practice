import { useRef, useCallback, useEffect } from "react";

export const useScrollFadeIn = (
  direction: string,
  duration: string,
  delay: string
) => {
  const dom = useRef<HTMLDivElement | null>(null);

  const handleDirection = (name: string) => {
    switch (name) {
      case "up":
        return "translate3d(0, 50%, 0)";
      case "down":
        return "translate3d(0, -50%, 0)";
      case "left":
        return "translate3d(50%, 0, 0)";
      case "right":
        return "translate3d(-50%, 0, 0)";
      default:
        return;
    }
  };

  const handleScroll = useCallback(
    ([entry]: any) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionProperty = "all";
        entry.target.style.transitionDuration = `${duration}s`;
        entry.target.style.transitionTimingFunction =
          "cubic-bezier(0, 0, 0.2, 1)";
        entry.target.style.transitionDelay = `${delay}s`;
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translate3d(0, 0, 0)";
      }
    },
    [delay, duration]
  ); //등록된 요소가 교차할 때 호출된다.

  useEffect(() => {
    let observer: IntersectionObserver;
    const { current } = dom;

    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.7 }); // intersection observer 호출

      console.log(observer);
      observer.observe(current); // observer에 요소 등록
    }

    return () => observer.disconnect(); // 관찰중지
  }, [handleScroll]);

  return {
    ref: dom,
    style: {
      opacity: "0",
      transform: handleDirection(direction),
    },
  };
};
