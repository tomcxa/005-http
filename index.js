import "dotenv/config";
import readline from "node:readline/promises";
import getCurrentWeather from "./wether-api/getCurrentWeather.js";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Введите название города на русском чтобы получить погоду");

rl.on("line", (input) => {
  if (input) {
    getCurrentWeather(input);
  } else {
    throw new Error("Вы ничего не ввели");
  }
});
