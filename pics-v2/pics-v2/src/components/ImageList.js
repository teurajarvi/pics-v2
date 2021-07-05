import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  const pictures = props.pictures.map((picture) => {
    return <ImageCard key={picture.id} picture={picture} />;
  });
  return <div className='image-list'>{pictures}</div>;
};

export default ImageList;
