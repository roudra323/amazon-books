import fs from "fs";
import data from "./data.js";

for (let index = 0; index < data.length; index++) {
  data[index].id = index;
}

const dataString = JSON.stringify(data);

fs.writeFile("./data.js", dataString, (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});
