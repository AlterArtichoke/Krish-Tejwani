import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

function PixelTransition({
  firstContent,
  secondContent,
  gridSize = 2,
  pixelColor = "currentColor",
  animationStepDuration = 0.3,
  className = "",
  style = {},
  aspectRatio = "100%",
}) {
  const containerRef = useRef(null);
  const pixelGridRef = useRef(null);
  const activeRef = useRef(null);
  const delayedCallRef = useRef(null);

  const [isActive, setIsActive] = useState(false);

  const isTouchDevice =
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    window.matchMedia("(pointer: coarse)").matches;

    useEffect(() => {
      const pixelGridEl = pixelGridRef.current;
      const containerEl = containerRef.current;
      if (!pixelGridEl || !containerEl) return;
    
      pixelGridEl.innerHTML = "";
    
      const containerWidth = containerEl.offsetWidth;
      const containerHeight = containerEl.offsetHeight;
    
      const pixelSize = containerWidth / gridSize; // each pixel is square
      const cols = gridSize;
      const rows = Math.ceil(containerHeight / pixelSize); // as many rows as needed to fill vertically
    
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const pixel = document.createElement("div");
          pixel.classList.add("pixelated-image-card__pixel", "absolute", "hidden");
          pixel.style.backgroundColor = pixelColor;
    
          pixel.style.width = `${pixelSize}px`;
          pixel.style.height = `${pixelSize}px`;
          pixel.style.left = `${col * pixelSize}px`;
          pixel.style.top = `${row * pixelSize}px`;
    
          pixelGridEl.appendChild(pixel);
        }
      }
    }, [gridSize, pixelColor]);
    

  const animatePixels = (activate) => {
    setIsActive(activate);

    const pixelGridEl = pixelGridRef.current;
    const activeEl = activeRef.current;
    if (!pixelGridEl || !activeEl) return;

    const pixels = pixelGridEl.querySelectorAll(".pixelated-image-card__pixel");
    if (!pixels.length) return;

    gsap.killTweensOf(pixels);
    if (delayedCallRef.current) {
      delayedCallRef.current.kill();
    }

    gsap.set(pixels, { display: "none" });

    const totalPixels = pixels.length;
    const staggerDuration = animationStepDuration / totalPixels;

    gsap.to(pixels, {
      display: "block",
      duration: 0,
      stagger: {
        each: staggerDuration,
        from: "random",
      },
    });

    delayedCallRef.current = gsap.delayedCall(animationStepDuration, () => {
      activeEl.style.display = activate ? "block" : "none";
      activeEl.style.pointerEvents = activate ? "none" : "";
    });

    gsap.to(pixels, {
      display: "none",
      duration: 0,
      delay: animationStepDuration,
      stagger: {
        each: staggerDuration,
        from: "random",
      },
    });
  };

  const handleMouseEnter = () => {
    if (!isActive) animatePixels(true);
  };
  const handleMouseLeave = () => {
    if (isActive) animatePixels(false);
  };
  const handleClick = () => {
    animatePixels(!isActive);
  };

  return (
    <div
      ref={containerRef}
      className={`
        ${className}
        bg-[#0B06BD]
        shadow-xl
        text-white
        rounded-[15px]
        w-[300px]
        h-[100px]
        max-w-full
        relative
        overflow-hidden
      `}
      style={style}
      onMouseEnter={!isTouchDevice ? handleMouseEnter : undefined}
      onMouseLeave={!isTouchDevice ? handleMouseLeave : undefined}
      onClick={isTouchDevice ? handleClick : undefined}
    >
      <div style={{ paddingTop: aspectRatio }} />

      <div className="absolute inset-0 w-full h-full">{firstContent}</div>

      <div
        ref={activeRef}
        className="absolute inset-0 w-full h-full z-[2]"
        style={{ display: "none" }}
      >
        {secondContent}
      </div>

      <div
        ref={pixelGridRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-[3]"
      />
    </div>
  );
}

export default PixelTransition;
