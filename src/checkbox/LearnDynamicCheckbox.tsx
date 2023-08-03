import React, { useState } from "react";

const LearnDynamicCheckbox = () => {
  const arr = [
    { id: 1, name: "manish", active: true },
    { id: 2, name: "mohan", active: false },
    { id: 3, name: "rahul", active: true },
    { id: 4, name: "mahesh", active: false },
    { id: 5, name: "raghav", active: true },
  ];

  const [items, setItems] = useState(arr);
  const [selectAll, setSelectAll] = useState(false);

  const handleCheckboxChange = (id: number) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, active: !item.active } : item
    );
    setItems(updatedItems);
  };

  const handleSelectAll = () => {
    const updatedItems = items.map((item) => ({ ...item, active: !selectAll }));
    setItems(updatedItems);
    setSelectAll(!selectAll);
  };

  return (
    <div>
      <h1>Checkbox List</h1>
      <table className="checkbox-table">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
              />
            </th>
            <th>ID</th>
            <th>Name</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>
                <input
                  type="checkbox"
                  checked={item.active}
                  onChange={() => handleCheckboxChange(item.id)}
                />
              </td>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.active.toString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LearnDynamicCheckbox;
