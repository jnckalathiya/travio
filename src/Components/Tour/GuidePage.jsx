import React from "react";
import GuidesItems from "../Items/GuidesItems";

const GuidePage = () => {
  const tour = [
    {
      img: "assets/img/team-1.jpg",
      name: "Merrie Lewis",
    },
    {
      img: "assets/img/team-2.jpg",
      name: "Parks Missie",
    },
    {
      img: "assets/img/team-3.jpg",
      name: "Mariana Buenos",
    },
    {
      img: "assets/img/team-4.jpg",
      name: "Stephen Fowler",
    },
    {
      img: "assets/img/team-5.jpg",
      name: "Daisy Phillips",
    },
    {
      img: "assets/img/team-6.jpg",
      name: "Gregory Bowman",
    },
  ];
  return (
    <div className="guide-outer">
      <div className="container">
        <div className="guide-inner row">
          {tour.map((i) => (
            <GuidesItems value={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuidePage;
