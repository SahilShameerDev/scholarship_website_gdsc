import React from "react";
import style from "./WaveBg.module.css";


const WaveBg = () => {
  return (
    <div className={style.waveBgContainer}>
      <svg 
        
        viewBox="0 0 1142 542"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M555.779 333.453C423.302 106.673 106.957 136.626 -17.9351 163.536L405.465 999.881L1114.03 608.977C981.611 633.826 688.256 560.233 555.779 333.453Z"
          fill="#89B4F8"
        />
        <path
          d="M382.634 329.682C210.337 87.406 103.704 84.7378 -53.6593 118.732C-128.911 293.04 -279.203 643.645 -278.354 651.6C-277.504 659.555 317.805 847.411 615.354 940.346L901.22 588.674C674.998 601.151 554.931 571.959 382.634 329.682Z"
          fill="#4286F5"
        />
      </svg>
    </div>
  );
};

export default WaveBg;
