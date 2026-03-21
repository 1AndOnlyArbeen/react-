import React from "react";

const Fruits = () => {
  const fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    
  ];

  return (
    <div>
      <h1> Fruits List </h1>

      <ul>
        {fruits.map((fruit, index) => (
          <li>
            {index} - {fruit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Fruits;
