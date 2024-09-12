import "./portfolio.scss";
import React from "react";

const items = [
  { id: 1, title: "RIDERRR. - RENTING APP", img: "", desc: "" },
  { id: 2, title: "DROWSINESS DETECTOR APPLICATION", img: "", desc: "" },
  { id: 3, title: "React Commerce", img: "", desc: "" },
  { id: 4, title: "React Commerce", img: "", desc: "" },
];

const Single = ({ item }) => {
  return <section> {item.title} </section>;
};

export const Portfolio = () => {
  return (
    <div className="portfolio">
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};
