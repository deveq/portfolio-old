import React from 'react';
import '../styles/Works.scss';
import WorkItem from './WorkItem';

const arr = new Array(10).fill(1).map((v,i) => i+1);
const Works = () => {

    return (
        <section id="works" className="Works">
            <h3 className='title'>Works</h3>
            <div className='wrapper'>
                {
                    arr.map(val => (
                        <WorkItem key={val} text={`${val}`} />
                    ))
                }
            </div>
        </section>
    )
}

export default Works;