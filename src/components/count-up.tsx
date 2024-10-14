import { useEffect, useState } from "react";

type CountUpProps = {
  value: number;
  duration?: number;
};

const CountUp = ({ value, duration = 3 }: CountUpProps) => {
  const [count, setCount] = useState<number>(0);

  const intervalTime = 10;

  const step = (value * intervalTime) / (duration * 1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev + step < value) return prev + step;
        clearInterval(interval);
        return value;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [value, step]);

  return (
    <div>
      <h1>CountUp</h1>
      <p>{Math.round(step)}</p>
      <h2 className="text-3xl text-emerald-600">{Math.round(count)}</h2>
    </div>
  );
};

export default CountUp;
