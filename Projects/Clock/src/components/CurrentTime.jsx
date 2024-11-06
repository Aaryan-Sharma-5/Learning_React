import { useState, useEffect } from "react";

let CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <p className="lead">
      This is the current Time: {time.toLocaleDateString()} - {""}
      {time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;
