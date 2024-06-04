import http from "node:http";
import { config } from "../config.js";

/**
 * Получает погоду по заданому параметру (например городу)
 * @param {string} param
 */
const getCurrentWeather = (param) =>
  http
    .get(config.getUrl("current.json", param), (res) => {
      const { statusCode } = res;
      if (statusCode !== 200) {
        console.error(`Error with satatus code: ${statusCode}`);
        return;
      }

      res.setEncoding("utf8");
      let rawData = "";
      res.on("data", (chunk) => {
        rawData += chunk;
      });
      res.on("end", () => {
        try {
          const parsedData = JSON.parse(rawData);
          console.log(
            `Погода в г.${parsedData.location.name} сейчас ${parsedData.current.temp_c} °C (${parsedData.current.condition.text})`
          );
        } catch (e) {
          console.error(e.message);
        }
      });
    })
    .on("error", (err) => {
      console.error(err);
    });

export default getCurrentWeather;
