import React from "react";
import GuidesItems from "../Items/GuidesItems";

const ToureGuide = () => {
  const tour = [
    {
      img:'assets/img/team-1.jpg',
      name:'Merrie Lewis'
    },
    {
      img:'assets/img/team-2.jpg',
      name:'Parks Missie'
    },
    {
      img:'assets/img/team-3.jpg',
      name:'Mariana Buenos'
    }

  ]
  return (
    <div className="toure-guide">
      <div className="container">
        <div class="heading">
          <p>Tour Guide</p>
          <h2>Expert Tour Guides</h2>
        </div>
        <div className="row">
          {
            tour.map((i)=> <GuidesItems value={i}/>)
          }
        </div>
      </div>
    </div>
  );
};

export default ToureGuide;
