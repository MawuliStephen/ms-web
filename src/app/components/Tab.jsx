import React, { useState } from "react";

// A custom component that renders a tab with a title and content
const Tab = ({ title, content }) => {
  // A state variable that tracks whether the tab is active or not
  const [active, setActive] = useState(false);

  // A function that toggles the active state
  function handleClick() {
    setActive((prev) => !prev);
  }

  return (
    <div className="custom-tab">
      {/* A button that displays the title and triggers the handleClick function */}
      <button className={`tab-button ${active ? 'active' : ''}`} onClick={handleClick}>
        {title}
      </button>

      {/* A div that displays the content only if the tab is active */}
      {active && (
        <div className="tab-content">
          <ul>
            {content.map((item) => (
              <li className="row row-cols-sm-2" style={{ margin: '2px' }} key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>

  );
};

export default Tab;
