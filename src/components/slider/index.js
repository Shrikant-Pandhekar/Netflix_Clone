import React, { useState, useContext, createContext } from "react";
import Card from "../card/index";
import "./slide.css";

export default function Slider({ slide, cat }) {
  const [itemFeature, setItemFeature] = useState({});
  console.log(itemFeature);
  return (
    <div className="row">
      {slide.map((slideItem) => (
        <div key={`${cat}-${slideItem.title.toLowerCase()}`} className="name">
          <p>{slideItem.title}</p>
          <div className="container">
            {slideItem.data.map((item) => (
              <>
                <div
                  className="item"
                  onClick={() => {
                    setItemFeature(item);
                  }}
                >
                  <img
                    key={item.docId}
                    src={`/images/${cat}/${item.genre}/${item.slug}/small.jpg`}
                    alt="poster"
                  />
                </div>
              </>
            ))}
          </div>

          <div
            className="content"
            style={{
              background: `url(
                /images/${cat}/${itemFeature.genre}/${itemFeature.slug}/large.jpg
              )`,
            }}
          >
            <div className="info">
              <h2>{itemFeature.title}</h2>
              <p>{itemFeature.description}</p>
              <p>
                {itemFeature.maturity} {itemFeature.genre}
              </p>

              <button>Play</button>
            </div>
            <ul>
              <li>OVerview</li>
              <li>Deatils</li>
              <li>cast</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
