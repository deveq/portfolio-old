import React, {
  forwardRef,
  useEffect,
  useRef,
  useState,
  ComponentPropsWithRef,
} from "react";
import "../styles/Header.scss";
import cn from "classnames";

interface HeaderProps extends ComponentPropsWithRef<"header"> {}

const Header = forwardRef<HTMLDivElement, HeaderProps>((_, ref) => {
  const introduceRef = useRef<HTMLDivElement>(null);
  const [isNavbarBgTransparent, setIsNavbarBgTransparent] = useState(true);

  useEffect(() => {
    if (!introduceRef.current) return;

    const callback: IntersectionObserverCallback = ([entry], observer) => {
      const { isIntersecting, intersectionRatio } = entry;
      console.log(isIntersecting, intersectionRatio);
      if (isIntersecting && intersectionRatio === 1) {
        setIsNavbarBgTransparent(true);
      } else {
        setIsNavbarBgTransparent(false);
      }
    };

    const options: IntersectionObserverInit = {
      threshold: [0, 1],
      rootMargin: "-50px 0px 0px 0px",
    };

    const io = new IntersectionObserver(callback, options);

    io.observe(introduceRef.current);

    return () => {
      io.disconnect();
    };
  }, [introduceRef]);

  return (
    <header id="header" className="Header">
      <nav className={cn("nav-wrap", { transparent: isNavbarBgTransparent })}>
        <ul>
          <li>
            <a href="#header">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#works">Works</a>
          </li>
          <li>
            <a href="#footer">Footer</a>
          </li>
        </ul>
      </nav>

      <div className="introduce" ref={introduceRef}>
        <h2>프론트엔드 개발자 장진영</h2>
        <p></p>
        <ul>
          <li>
            <a
              href="https://github.com/deveq"
              target="_blank"
              className="github"
              title="github"
              rel="noreferrer"
            >
              <h3>github</h3>
            </a>
          </li>
          <li>
            <a
              href="https://velog.io/@deveq"
              className="velog"
              target="_blank"
              title="velog"
              rel="noreferrer"
            >
              <h3>velog</h3>
            </a>
          </li>
          <li>
            <a
              href="https://solved.ac/profile/fleflefle1991"
              className="boj"
              target="_blank"
              title="baekjoon"
              rel="noreferrer"
            >
              <h3>백준</h3>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
});

export default Header;
