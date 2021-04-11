import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = ({ usersList, interests }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const renderedUsers = usersList.users
    //sort users by follower count
    .sort((a, b) => b.following.length - a.following.length)
    .map((user, index) => {
      const showDescription = index === activeIndex ? "show-description" : "";
      const fontWeightBold = index === activeIndex ? "font-weight-bold" : "";
      const ariaExpanded = index === activeIndex ? "true" : "false";
      return (
        <AccordionItem
          showDescription={showDescription}
          fontWeightBold={fontWeightBold}
          ariaExpanded={ariaExpanded}
          user={user}
          index={index}
          interests={interests}
          onClick={() => {
            setActiveIndex(index);
          }}
          key={user.id}
        />
      );
    });

  return (
    <div className="users">
      <h1 className="users__title">USERS</h1>
      <dl className="users__list">{renderedUsers}</dl>
    </div>
  );
};

export default Accordion;
