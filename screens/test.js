import { useEffect, useState } from "react";

const Test = () => {
  const [hour1, setHour] = useState("00");
  const [min1, setMin] = useState("00");
  const [sec1, setSec] = useState("00");
  const [time, setTime] = useState(10);
  const [value, setValue] = useState(10);
  const [isActive, setIsActive] = useState(false);

  const changeHandler = (e) => {
    let v = +e.target.value;
    if (!v) {
      v = 0;
    }
    setValue(v);
  };

  const clickHandler = (e) => {
    if (isActive) setTime(0);
    else {
      setIsActive(true);
      setTime(value);
    }
  };

  const pause = (e) => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    let intervalId1;
    if (isActive) {
      intervalId1 = setInterval(() => {
        let time1 = time;
        let hour = Math.floor(time1 / 3600);
        let min = Math.floor(time1 / 60);
        let sec = Math.floor(time1 % 60);

        if (time1 === 0) {
          clearInterval(intervalId1);
          setIsActive(false);
          // FIXME: your function call goes here
          console.log("time up");
        }

        if (hour < 1) setHour("00");
        else if (hour < 10) setHour(`0${hour}`);
        else setHour(`${hour}`);

        if (min < 1) setMin("00");
        else if (min < 10) setMin(`0${min}`);
        else setMin(`${min}`);

        if (sec < 10) setSec(`0${sec}`);
        else setSec(`${sec}`);

        setTime(time1 - 1);
        console.log(time1);
      }, 1000);
    }
    return () => {
      clearInterval(intervalId1);
    };
  }, [time, isActive]);

  return (
    <div style={{ margin: "3rem" }}>
      <input
        type="text"
        value={value}
        onChange={changeHandler}
        style={{ margin: "1rem", padding: "6px" }}
      />
      <button onClick={clickHandler} style={{ padding: "6px", margin: "1rem" }}>
        {isActive ? "stop" : "start"}
      </button>

      <button onClick={pause} style={{ padding: "6px", margin: "1rem" }}>
        {isActive ? "pause" : "play"}
      </button>

      {`${hour1}: ${min1}: ${sec1}`}
    </div>
  );
};
export default Test;
