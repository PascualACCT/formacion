let addScreen = (value) => {
  document.getElementById("screen").value += value;
};

let clearScreen = () => {
  document.getElementById("screen").value = "";
};

let calculate = () => {
  let operation = document.getElementById("screen").value;

  console.log(operation);

  let result = "E";

  try {
    result = eval(operation);
  } catch (e) {
    //console.log(e);
    result = "E";
  }

  document.getElementById("screen").value = result;
};
