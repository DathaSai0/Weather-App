let btnGet = document.querySelector("#inputDiv button");
let input = document.querySelector("#inputDiv input");
let des = document.querySelector("#weather-desc");
let Temp = document.querySelector("#temp-value");
let Name = document.querySelector("#Name");
let res = document.querySelector('#resultImg');
const APIKey = "3dda862b68989ef1dd87c929cb493640";
btnGet.addEventListener("click", () => {
  let loc = document.querySelector("#inputDiv input").value;
  if (loc !== "") {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${APIKey}`;
    fetch(url, {
      method: "GET",
    }).then((result) => {
      result
        .json()
        .then((data) => {
          renderUI(data);
        })
        .catch((err) => {
          alert("enter the valid city");
        });
    });
  } else {
    alert("enter the valid city");
  }
  loc = "";
});

function renderUI(data) {
  console.log(data)
  const { name } = data;
  Name.innerHTML = name;
  const { temp } = data.main;
  Temp.innerHTML = Math.floor(temp - 273);
  const { description } = data.weather[0];
  des.innerHTML = description;
  const icon = data.weather[0].icon;
  const imgURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
  res.src = imgURL;
}
