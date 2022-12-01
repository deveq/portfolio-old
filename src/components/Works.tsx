import React from "react";
import "../styles/Works.scss";
import Modal from "./Modal";
import WorkItem from "./WorkItem";
import { datas } from "../assets/data/works";

const Works = () => {
  return (
    <section id="works" className="Works">
      <h3 className="title">Works</h3>
      <div className="wrapper">
        {datas.map((item, index) => (
          <WorkItem
            index={index}
            key={item.title}
            title={`${item.title}`}
            description={item.description}
            images={item.images}
            cover={item.cover}
            content={item.content}
          />
        ))}
        <Modal />
      </div>
    </section>
  );
};

export default Works;
