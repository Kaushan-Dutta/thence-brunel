import React, { useEffect } from "react";

interface TimeInterval {
  nsets: number;
  setCurFeature: (curFeature: number) => void;
  curFeature: number;
}
//setting interface for the props object type to be accepted
const CarouselTimeout: React.FC<TimeInterval> = ({
  nsets,
  setCurFeature,
  curFeature,
}) => {
  useEffect(() => {
    const setTime = setInterval(() => {
      setCurFeature((curFeature + 1) % 3);
    }, 3000);
    return () => clearInterval(setTime);
  }, [curFeature]);

  return (
    <>
      {[...Array(nsets)].map((_, index) => (
        <button
          key={index}
          className={`text-lg text-shade2 rounded-full w-3 h-3  hover:text-shade1 ${
            index === curFeature ? "bg-green" : " bg-shade2"
          }`}
          onClick={() => setCurFeature(index)}
        />
      ))}
    </>
  );
};

export default React.memo(CarouselTimeout);
