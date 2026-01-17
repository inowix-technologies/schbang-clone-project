import { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    // useLayoutEffect runs synchronously before paint - fastest possible
    useLayoutEffect(() => {
        // Multiple methods for maximum compatibility and speed
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        if (document.scrollingElement) {
            document.scrollingElement.scrollTop = 0;
        }
    }, [pathname]);

    return null;
};

export default ScrollToTop;
