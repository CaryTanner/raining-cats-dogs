import { useEffect } from "react";
import { useLocation } from "react-router-dom";


//component taken from react-router to scrollpages to top on routing

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
