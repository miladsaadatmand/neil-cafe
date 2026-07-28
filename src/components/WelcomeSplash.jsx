import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";

export default function WelcomeSplash({ cafeName, duration = 1500, onFinish }) {
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const closeTimer = setTimeout(() => setClosing(true), 1000);
    const finishTimer = setTimeout(() => onFinish?.(), duration);
    return () => {
      clearTimeout(closeTimer);
      clearTimeout(finishTimer);
    };
  }, [duration, onFinish]);

  return (
    <div className={`splash-overlay${closing ? " splash-closing" : ""}`}>
      <div className="splash-glow" />
      <img src={logo} alt={cafeName} className="splash-logo" />
      <div className="splash-text">به {cafeName} خوش آمدید</div>
      <div className="splash-underline" />
    </div>
  );
}
