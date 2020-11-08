import { useState } from "react";
import "./SortDropdown.css";

const SortDropdown = () => {
  const [isChecked, toggle] = useState(true);

  return (
    <li className="App__menu-unit">
      <details>
        <summary className="Sort__dropdown">Sort</summary>
        <div className="Sort__dropdown-content">
          <p className="Sort__headline">Sort by</p>
          <ul className="App__dropdown-content--list">
            <li>
              <div
                onClick={() => toggle(!isChecked)}
                className="Sort__form-group"
              >
                <input checked={isChecked} type="checkbox" />
                <label>Next Available</label>
              </div>
            </li>
            <li>
              <div
                onClick={() => toggle(!isChecked)}
                className="Sort__form-group"
              >
                <input checked={!isChecked} type="checkbox" />
                <label>Most Experienced</label>
              </div>
            </li>
          </ul>
        </div>
      </details>
    </li>
  );
};

export default SortDropdown;
