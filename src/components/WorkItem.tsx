import React, {
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  PropsWithChildren,
} from "react";
import "../styles/WorkItem.scss";
import cn from "classnames";
import { WorkModalContextStore } from "../context/WorkModalContext";

interface WorkItemProps {
  title: string;
  description: string;
  images: string[];
  cover?: boolean;
  content: string;
  index: number;
}

const WorkItem: FC<WorkItemProps> = ({
  title,
  description,
  images,
  cover,
  content,
  index,
}) => {
  const { setIsModalOpen, setSelectedIndex } = useContext(
    WorkModalContextStore,
  );
  return (
    <div
      className="WorkItem"
      onClick={() => {
        setSelectedIndex(index);
        setIsModalOpen(true);
      }}
    >
      <img
        src={require(`../assets/images/${images[0]}.png`)}
        alt=""
        className={cn("background", { cover })}
      />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default WorkItem;
