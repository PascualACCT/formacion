import React from "react";

export const CurrentData = ({ text }) => {
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const day = days[d.getDay()];
    const date = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();

    return `${day} the ${date}th of ${month}, ${year} `;
  };

  const textEdited = [
    text.split(""),
    text.toUpperCase(),
    text.toLowerCase(),
    text.split("").join(" "),
    text.split("").reverse().join(""),
    text.split(" ").reverse().join(" "),
    text.split("").reverse().join(" "),
    text.toUpperCase().split("").join(" "),
    text.toUpperCase().split("").reverse().join(""),
    text.replace("Hello World", "Hola Mundo"),
  ];

  return (
    <div>
      <ul>
        {textEdited.map((text, index) => {
          return (
            <li key={index}>
              ¡¡{text}!! {dateBuilder(new Date())}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
