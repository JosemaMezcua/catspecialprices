"use client";

import { useEffect, useRef } from "react";

const targetUrl = "https://www.yelloworiginal.com/colecciones/special-prices";

export default function Home() {
  const posterRef = useRef(null);

  useEffect(() => {
    const poster = posterRef.current;

    if (!poster) return;

    let redirected = false;

    const goToTarget = () => {
      if (redirected) return;
      redirected = true;
      window.location.href = targetUrl;
    };

    poster.addEventListener("animationend", goToTarget);
    const timer = window.setTimeout(goToTarget, 1800);

    return () => {
      poster.removeEventListener("animationend", goToTarget);
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <h1 className="poster" id="poster" ref={posterRef} aria-label="SPECIAL PRICES HASTA -40%">
      <span>SPECIAL</span>
      <span>PRICES</span>
      <span className="small">HASTA -40%</span>
    </h1>
  );
}

