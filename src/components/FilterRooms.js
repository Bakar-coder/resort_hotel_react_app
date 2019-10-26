import React, { useState } from "react";
import Title from "./Title";

const FilterRooms = props => {
  const [rooms, setRooms] = useState(props.rooms);
  const handleChange = e => {

  };

  console.log(rooms);

  // get unique values
  const getUnique = (items, value) => [
    ...new Set(items.map(item => item[value]))
  ];

  let types = getUnique(rooms, "type");
  types = ["all", ...types];
  const { type } = rooms;


  return (
    <section className="filter-container">
      <Title title="Search Rooms" />
      <form className="filter-form">
        {/*select type*/}
        <div className="form-group">
          <label htmlFor="type">Room Type</label>
          <select
            name="type"
            id="type"
            value={type}
            onChange={handleChange}
            className="form-control"
          >
            {types.map((item, index) => (
              <option key={index} value={type}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </form>
    </section>
  );
};

export default FilterRooms;
