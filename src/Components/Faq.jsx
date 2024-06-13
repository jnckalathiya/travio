import React from "react";
import FaqItems from "./Items/FaqItems";

const Faq = () => {
  const faq = [
    {
      key: "0",
      title: "Which payment methods are acceptable?",
    },
    {
      key: "1",
      title: "How to book the new tour for 2 persons?",
    },
    {
      key: "2",
      title: "Is it possible to manage details through dashboard?",
    },
    {
      key: "3",
      title: "Multiple tour bookings are allowed?",
    },
    {
      key: "4",
      title: "I want to cancel my booking?",
    },
    {
      key: "5",
      title: "All taxes are included in the booking prices?",
    },
    {
      key: "6",
      title: "Why are your tours so expensive?",
    },
    {
      key: "7",
      title: "What is the best way to contact with the guide?",
    },
  ];

  return (
    <div className="faq-outer">
      <div className="container">
        <div className="faq-inner">
          <div className="heading">
            <p>Choose Your place</p>
            <h2>Frequently Asked Question</h2>
          </div>
          <div className="acordian">
            {faq.map((i) => (
              <FaqItems value={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
