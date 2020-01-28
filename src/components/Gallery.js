import React, { Component } from "react";
import HeadingUnderline from "./HeadingUnderline";

export default class Gallery extends Component {
  render() {
    return (
      <div className="section">
        <h1 className="is-size-1 has-text-centered">Gallery</h1>
        <HeadingUnderline />
        <div className="container">
          <div className="gallery-images">
            {imagesList.map(images => (
              <>
                <img src={images.imageLink} alt="gallery-placeholder" className="gallery-picture" />
              </>
            ))}
          </div>
          <div className="container button-contain">
              <button
                className="appointment-button"
                style={{marginTop: "3%"}}
              >
                SEE MORE
              </button>
            </div>
        </div>
      </div>
    );
  }
}

const imagesList = [
  {
    imageLink: "https://via.placeholder.com/300"
  },
  {
    imageLink: "https://via.placeholder.com/300"
  },
  {
    imageLink: "https://via.placeholder.com/300"
  },
  {
    imageLink: "https://via.placeholder.com/300"
  }
];