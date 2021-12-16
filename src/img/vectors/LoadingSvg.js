import React from "react";
import "styles/img/svg.css";

const LoadingSvg = ({ color = "black" }) => {
  return (
    <svg
      version="1.1"
      id="loading"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      style={{ enableBackground: "new 0 0 100 100" }}
      space="preserve"
    >
      <g>
        <path
          className="st0"
          style={{ fill: "transparent" }}
          d="M50.5,90c-16.4,0.2-31.9-9.7-38-25.9c-7.8-20.7,2.7-43.7,23.3-51.5s43.7,2.7,51.5,23.3
         c2.1,5.6,2.9,11.4,2.5,17"
        />
        <path
          style={{ fill: color }}
          d="M50.5,91.6c-8.3,0.4-16.8-1.8-24-6.3C19.3,80.9,13.4,74.1,10,66.2c-3.5-7.9-4.6-16.9-2.9-25.6c0.9-4.3,2.3-8.5,4.3-12.5
         c2.1-3.9,4.8-7.5,7.9-10.7c3.2-3.2,6.9-5.8,10.8-8c4-2.1,8.3-3.5,12.8-4.5C47.4,4.2,52,4,56.6,4.5c4.6,0.5,9.1,1.8,13.3,3.6
         l3.1,1.5c1,0.6,2,1.2,3,1.8c1,0.6,1.9,1.3,2.9,2l1.4,1c0.5,0.3,0.9,0.8,1.3,1.1c3.6,3,6.6,6.7,9.1,10.7c0.6,1,1.3,2,1.8,3.1
         l1.5,3.2c1,2.2,1.7,4.4,2.3,6.7c1.2,4.6,1.7,9.4,1.5,14.2l0,0.1c-0.2,4.4-3.9,7.8-8.4,7.6c-4.4-0.2-7.8-3.9-7.6-8.4
         c0-0.2,0-0.4,0-0.6c0.4-3.2,0.3-6.4-0.3-9.6c-0.3-1.6-0.7-3.2-1.3-4.7l-0.9-2.3c-0.3-0.8-0.7-1.5-1.1-2.2c-1.5-2.9-3.4-5.6-5.8-7.9
         c-0.3-0.3-0.6-0.6-0.9-0.9l-1-0.8c-0.6-0.5-1.2-1.1-2-1.6l-2.1-1.4l-2.2-1.2c-3-1.5-6.2-2.7-9.5-3.3c-3.4-0.6-6.8-0.7-10.2-0.3
         c-3.4,0.5-6.8,1.4-10,2.8c-3.2,1.5-6.2,3.3-8.8,5.6c-2.6,2.4-4.9,5.1-6.8,8.1c-1.9,3-3.2,6.4-4.2,9.9c-1.8,7-1.5,14.6,1.1,21.5
         C18.4,70.7,23,77,29.2,81.3c6.1,4.4,13.6,6.9,21.3,7.1c0.9,0,1.6,0.7,1.5,1.6C52,90.9,51.4,91.5,50.5,91.6z"
        />
      </g>
    </svg>
  );
};

export default LoadingSvg;