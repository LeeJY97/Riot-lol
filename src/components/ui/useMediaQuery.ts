import { useEffect, useLayoutEffect, useState } from "react";

const initialScreenMode = {
  isMobile: false,
  isTablet: false,
  isDesktop: false,
};

const useMediaQuery = () => {
  const [screenMode, setScreenSize] = useState(initialScreenMode);

  useLayoutEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setScreenSize({
          ...initialScreenMode,
          isMobile: true,
        });
      } else if (width < 1024) {
        setScreenSize({
          ...initialScreenMode,
          isTablet: true,
        });
      } else {
        setScreenSize({
          ...initialScreenMode,
          isDesktop: true,
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { ...screenMode };
};

export default useMediaQuery;
