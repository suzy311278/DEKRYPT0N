import { useEffect, useRef, useState } from "react";

interface UseCounterAnimationProps {
  end: number;
  duration?: number;
  start?: number;
  decimals?: number;
}

export const useCounterAnimation = ({
  end,
  duration = 2000,
  start = 0,
  decimals = 0,
}: UseCounterAnimationProps) => {
  const [count, setCount] = useState(start);
  const [isInView, setIsInView] = useState(false);
  const countRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsInView(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const startTime = Date.now();
    const endTime = startTime + duration;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = start + (end - start) * easeOutQuart;

      setCount(current);

      if (now < endTime) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, start, duration]);

  return {
    count: decimals > 0 ? count.toFixed(decimals) : Math.floor(count),
    ref: countRef,
  };
};
