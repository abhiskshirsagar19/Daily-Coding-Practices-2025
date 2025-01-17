const settings = {
  userName: "AK",
  level: 25,
  health: 1919,
};
const data = JSON.stringify(settings, ["level", "health"]);
console.log(data);
