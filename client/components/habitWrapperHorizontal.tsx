import { HabitElement } from './habitElement';
import type { HabitWrapperProps } from './habitElement';
import { useState, useRef, useCallback } from 'react';

export const HabitWrapperHorizontal: React.FC<HabitWrapperProps> = ({
  habitWrapperTitle,
  habitWrapperData,
}) => {
  const [slide, setSlide] = useState(true);

  // const containerRef = useRef<HTMLUListElement>(null);
  // const onWheel = (e: any) => {
  //   lockScroll();
  //   const { deltaY } = e;
  //   const el = containerRef.current;
  //   if (!el) return;
  //   if (deltaY > 0 && slide === true) {
  //     setSlide(false);
  //     el.scrollTo({
  //       left: el.scrollLeft + deltaY * 2,
  //       behavior: 'smooth',
  //     });
  //     setSlide(true);
  //   }
  //   if (deltaY < 0 && slide === true) {
  //     setSlide(false);
  //     el.scrollTo({
  //       left: el.scrollLeft + deltaY * 2,
  //       behavior: 'smooth',
  //     });
  //     setSlide(true);
  //   }
  // };
  // const lockScroll = useCallback(() => {
  //   document.body.style.overflow = 'hidden';
  // }, []);
  const containerRef = useRef(null);
  const [mouse, setMouse] = useState(false);
  const [startX, setStartX] = useState(0);
  const [verify, setVerify] = useState(false);
  const [throttle, setThrottle] = useState(false);
  const onMouseDown = useCallback(
    (e) => {
      e.preventDefault();
      setMouse(true);
      setVerify(true);
      setStartX(e.pageX + containerRef.current.scrollLeft);
    },
    [mouse],
  );
  const onMouseMove = useCallback(
    (e) => {
      if (throttle) return;
      setThrottle(true);
      setTimeout(() => {
        setThrottle(false);
        if (mouse) {
          e.preventDefault();
          containerRef.current.scrollLeft = startX - e.pageX;
        }
      }, 100);
    },
    [mouse, throttle],
  );
  const onMouseUp = useCallback(
    (e) => {
      if (startX === e.pageX + containerRef.current.scrollLeft) {
        setVerify(false);
      }
      setMouse(false);
    },
    [mouse],
  );
  return (
    <div className="habit-wrapper-horizontal p-4 pr-0">
      <h3 className="habit-wrapper-title mb-5 text-xl font-semibold">
        {habitWrapperTitle}
      </h3>
      <div className="habit-wrapper-content">
        <ul
          className="habit-wrapper-list flex overflow-x-scroll flex-nowrap gap-x-4 scrollbar-hide last:pr-4"
          // ref={containerRef}
          // onWheel={(e) => {
          //   e.stopPropagation();
          //   onWheel(e);
          // }}
          ref={containerRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
        >
          {habitWrapperData.map((el) => {
            return (
              <li
                className="habit-element flex-[0_0_auto] w-[140px] "
                key={el.habitId}
              >
                <HabitElement {...el} verify={verify} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
