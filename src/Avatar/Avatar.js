import React from "react";

import "./Avatar.css";

const Avatar = (props) => {
  return (
    <div className="avatar">
      <svg role="none" style={{ height: "120px", width: "120px" }}>
        <mask id="circle">
          <circle cx="60" cy="60" fill="white" r="60"></circle>
          <circle cx="102" cy="102" fill="black" r="15"></circle>
        </mask>
        <g mask="url(#circle)">
          <image
            x="0"
            y="0"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            width="100%"
            xlinkHref={props.imgAvatar}
            style={{ height: "120px", width: "120px" }}
          />
          <circle className="border" cx="60" cy="60" r="60"></circle>
        </g>
      </svg>
      <div className="badge" style={{ background: props.badgeColor }}></div>
    </div>
  );
};

export default Avatar;
