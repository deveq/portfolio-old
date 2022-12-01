import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  PropsWithChildren,
  FC,
} from "react";

interface WorkModalContextProps {
  selectedIndex: number;
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  setSelectedIndex: Dispatch<SetStateAction<number>>;
}

export const WorkModalContextStore = createContext<WorkModalContextProps>({
  selectedIndex: 0,
  isModalOpen: false,
  setIsModalOpen: () => {},
  setSelectedIndex: () => {},
});

const WorkModalContext: FC<PropsWithChildren> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <WorkModalContextStore.Provider
      value={{ selectedIndex, setSelectedIndex, isModalOpen, setIsModalOpen }}
    >
      {children}
    </WorkModalContextStore.Provider>
  );
};

export default WorkModalContext;
