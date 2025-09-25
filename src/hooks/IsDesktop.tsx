"use client";

import { useState, useEffect } from 'react';

// This hook returns true if the window width is above a specified breakpoint (default 1024px)
export const useIsDesktop = (breakpoint = 1024) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check on initial mount
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= breakpoint);
    };

    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, [breakpoint]);

  return isDesktop;
};