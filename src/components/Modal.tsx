import React, { FC, useContext, useEffect } from "react";
import { createPortal } from "react-dom";
import "../styles/Modal.scss";
import cn from "classnames";
import { WorkModalContextStore } from "../context/WorkModalContext";
import { datas } from "../assets/data/works";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

interface ModalProps {}

const Modal: FC<ModalProps> = () => {
  const { isModalOpen, setIsModalOpen, selectedIndex } = useContext(
    WorkModalContextStore,
  );
  const data = datas[selectedIndex];

  useEffect(() => {}, [isModalOpen]);
  return createPortal(
    <div className={cn("Modal", { open: isModalOpen })}>
      {isModalOpen && (
        <section>
          <div className="header">
            <h3 className="title">{data.title}</h3>
            <div className="description">{data.description}</div>

            <button
              className="close"
              onClick={() => {
                setIsModalOpen(false);
              }}
            >
              X
            </button>
          </div>
          <div className="body">
            <Swiper
              spaceBetween={10}
              slidesPerView={3}
              initialSlide={1}
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              centeredSlides={true}
            >
              {data.images.map((image) => (
                <SwiperSlide>
                  <img
                    key={image}
                    className="image"
                    src={require(`../assets/images/${image}.png`)}
                    alt={data.title}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <p className="content">{data.content}</p>
            <p className="skill">{data.skill}</p>
          </div>
          <div
            className="background"
            onClick={() => setIsModalOpen(false)}
          ></div>
        </section>
      )}
    </div>,
    document.getElementById("modal") as HTMLElement,
  );
};

export default Modal;
