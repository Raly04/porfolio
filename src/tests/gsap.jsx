import { useRef, useEffect } from "react";
import { gsap, Power3 } from "gsap";
import go from "./go.svg"; // Adjust the path to your actual image file

export default function GsapTest() {
  const ref = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.to(textRef.current, 0.8, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
    });
    gsap.to(ref.current, 0.8, {
      delay: 0.2,
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
    });
  }, []);

  return (
    <div>
      <p className="opacity-0" ref={textRef}>
        This is GSAP test
      </p>
      <img src={go} ref={ref} alt="" className="w-16 opacity-0" />
    </div>
  );
}
