import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [active, setActive] = useState(0);

  const onTitleClick = (index) => {
    setActive(index);
  };
  const renderedItems = items.map((item, index) => {
    const isActive = index === active ? "active" : "";
    return (
      <React.Fragment key={item.title}>
        <div className={`title ${isActive}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${isActive}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
