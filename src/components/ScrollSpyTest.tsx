import React, {
  useState,
  useEffect,
  useRef,
  forwardRef,
  FC,
  ComponentPropsWithRef,
} from "react";

const pages = Array.from({ length: 8 }).map((_, i) => i + 1);

const ScrollSpyTest = () => {
  // 현재 보고 있는 페이지를 알 수 있게 해주는 viewIndex
  const [viewIndex, setViewIndex] = useState(0);

  // 관찰 대상은 Div Elements이기에 배열로 타입 지정
  // ref를 사용한 이유는 observing에 사용하기 위함
  const pageRef = useRef<HTMLDivElement[]>([]);

  // scrollIntoView는 js에 내장된 element 인터페이스의 method
  // 해당 element로 이동하게 만들어준다.
  // navigation에서 사용할 함수로,
  // index를 받아 원하는 페이지로 이동하게 한다.
  const moveToTargetPage = (index: number) => {
    pageRef.current[index].scrollIntoView({
      block: "start",
      behavior: "smooth",
      inline: "center",
    });
  };

  const options: IntersectionObserverInit = {
    root: null,
    threshold: 0.5,
  };

  const callback: IntersectionObserverCallback = (entries, observer) => {
    entries.forEach((entry) => {
      const { isIntersecting, boundingClientRect } = entry;

      // pageYOffset 문서가 수직으로 얼마나 스크롤 됐는지 픽셀 단위로 반환한다.
      // const scrollTop = window.pageYOffset;
      const scrollTop = window.scrollY;
      // 이벤트가 발생된 target의 height
      const { height } = boundingClientRect;

      // 관찰 요소와 교차될때마다 index를 계산하며 viewIndex의 값을 바꿔준다.

      if (isIntersecting) {
        const index = Math.round(scrollTop / height);
        setViewIndex(index);
      }
    });
  };

  const io = new IntersectionObserver(callback, options);

  useEffect(() => {
    // 첫 렌더링때에만 io를 부착한다
    pageRef.current.forEach((item) => io.observe(item));

    return () => {
      pageRef.current.forEach((item) => io.unobserve(item));
    };
  }, []);

  return (
    <div>
      <Navigate
        pages={pages}
        viewIndex={viewIndex}
        moveToTargetPage={moveToTargetPage}
      />

      {pages.map((page, index) => (
        <Content
          key={index}
          page={page}
          ref={(r) => {
            if (r && pageRef.current) {
              return (pageRef.current[index] = r);
            }
          }}
        />
      ))}
    </div>
  );
};

export default ScrollSpyTest;

interface NavigateProps {
  moveToTargetPage: (index: number) => void;
  viewIndex: number;
  pages: number[];
}

const Navigate: FC<NavigateProps> = ({
  moveToTargetPage,
  viewIndex,
  pages,
}) => {
  console.log(viewIndex);
  return (
    <nav>
      <ul style={{ display: "flex", position: "fixed", top: 0, right: 0 }}>
        {pages.map((page, index) => (
          <li key={index + ""}>
            <button
              style={{
                backgroundColor: viewIndex === index ? "coral" : "",
              }}
              onClick={() => {
                moveToTargetPage(index);
              }}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

interface ContentProps extends ComponentPropsWithRef<"div"> {
  page: number;
}

const Content = forwardRef<HTMLDivElement, ContentProps>(({ page }, ref) => {
  return (
    <div
      ref={ref}
      style={{
        border: "1px solid red",
        height: "100vh",
      }}
    >
      {page}
    </div>
  );
});
