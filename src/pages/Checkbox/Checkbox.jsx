import { logDOM } from "@testing-library/react";
import React, { useState } from "react";

const Checkbox = () => {
  const [cat, setCat] = useState([
    "Men",
    "Women",
    "Baby",
    "Electronic",
    "Game",
  ]);

  const [selected, setSelected] = useState(["Women"]);

  const handleCatChange = (e) => {
    const value = e.target.value;

    const oldSelectedCatList = [...selected];

    if (selected.includes(value)) {
      oldSelectedCatList.splice(selected.indexOf(value), 1);
    } else {
      oldSelectedCatList.push(value);
    }

    setSelected(oldSelectedCatList);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Checkbox Issue</h1>
          <hr />

          <ul>
            {cat.map((item, index) => (
              <li key={index}>
                <label>
                  <input
                    value={item}
                    type="checkbox"
                    checked={selected.includes(item)}
                    onChange={handleCatChange}
                  />
                  &nbsp; {item}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Checkbox;
