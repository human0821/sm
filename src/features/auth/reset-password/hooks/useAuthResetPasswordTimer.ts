import { useEffect, useState } from "react";

export const LOCAL_STORAGE_TIMER = "reset_timer";

export function useAuthChangePasswordTimer({ limit }: { limit: number }) {
  const [timer, setTimer] = useState<number>(limit);
  const [timerDate, setTimerDate] = useState(Number(localStorage.getItem(LOCAL_STORAGE_TIMER) || 0));

  useEffect(() => {
    const diff = (new Date().getTime() - Number(timerDate)) / 1000;

    if (!isNaN(diff) && diff < limit) {
      setTimer(limit - Number(diff.toFixed(0)));
      const intervalId = window.setInterval(() => {
        const diff = (new Date().getTime() - Number(timerDate)) / 1000;
        const leftTime = limit - Number(diff.toFixed(0));

        if (leftTime <= 0) {
          setTimer(limit + 1);
          window.clearInterval(intervalId);
          return false;
        }

        setTimer(leftTime);
      }, 1000);

      return () => {
        window.clearInterval(intervalId);
      };
    } else {
      setTimer(limit + 1);
    }
  }, [timerDate]);

  return {
    timer,
    setTimerDate,
  };
}
