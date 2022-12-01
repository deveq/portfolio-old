import React, { FC } from "react";
import "../styles/Percent.scss";

interface PercentProps {
  percent: number;
  title: string;
}

const Percent: FC<PercentProps> = ({ title, percent }) => {
  return (
    <div className="Percent">
      <div className="title">{title}</div>
      <div className="bar-container">
        <span>{percent}</span>
        <div
          className="bar"
          style={{
            width: `${percent}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Percent;
