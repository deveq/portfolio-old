import React, { FC } from 'react';
import '../styles/WorkItem.scss';
import bg from '../assets/images/header-background.jpg';

interface WorkItemProps {
    text?: string;
}

const WorkItem: FC<WorkItemProps> = ({text}) => {
    return (
        <div className="WorkItem">
            <div className="background"></div>
            <h3>프로젝트 제목</h3>
            <p>안녕안녕</p>
        </div>
    )
}

export default WorkItem;