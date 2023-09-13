import React, { useEffect } from "react";

export default function Modal() {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return (
    <div className="fixed inset-60 flex items-center justify-center bg-slate-400 z-10">
      <div className="">fdsafssdfsadsafsaaf</div>
    </div>
  );
}
