import React from "react";

export default function Slide({ data: { src, alt, title } }) {
  return (
    <div className="slide">
      <img src={src} alt={alt} className="slide-image" />;
      <div className="slide-title">{title}</div>;
    </div>
  );
}