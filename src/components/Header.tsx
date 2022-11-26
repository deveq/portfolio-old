import React, { useEffect, useRef, useState } from 'react';
import '../styles/Header.scss';
import cn from 'classnames';

const Header = () => {

    const ref = useRef<HTMLDivElement>(null);
    const [isNavbarBgTransparent, setIsNavbarBgTransparent] = useState(true);

    useEffect(() => {

        if (!ref.current) return;

        const callback: IntersectionObserverCallback = ([entry], observer) => {

            const {isIntersecting, intersectionRatio} = entry;
            console.log(isIntersecting, intersectionRatio)
            if (isIntersecting && intersectionRatio === 1) { 
                setIsNavbarBgTransparent(true);
            } else {
                setIsNavbarBgTransparent(false);
            }

        }

        const options: IntersectionObserverInit = {
            threshold: [0,1],
            rootMargin: '-50px 0px 0px 0px'
        };

        const io = new IntersectionObserver(callback, options);

        io.observe(ref.current);

        return () => {
            console.log('반환');
            io.disconnect();
        }
    },[ref]);

    return (
        <header id="header" className='Header'>
            <nav className={cn('nav-wrap', {transparent: isNavbarBgTransparent})}>
                <ul>
                    <li className='selected'><a href="#header">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#works">Works</a></li>
                    <li><a href="#footer">Footer</a></li>
                </ul>
            </nav>

            <div className="introduce" ref={ref}>
                <h2>프론트엔드 개발자 장진영</h2>
                <p>프론트프론트</p>
                <ul>
                    <li><a href="https://solved.ac/profile/fleflefle1991" target='_blank' className='github' title="github" rel="noreferrer"><h3>github</h3></a></li>
                    <li><a href="https://velog.io/@deveq" className='velog' target='_blank' title="velog" rel="noreferrer"><h3>velog</h3></a></li>
                    <li><a href="https://github.com/deveq" className='boj' target='_blank' title="baekjoon" rel="noreferrer"><h3>백준</h3></a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;