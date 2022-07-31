// data Array
const statArray = [
  { id: 0, day: "sun", amount: 25.48 },
  { id: 1, day: "mon", amount: 17.45 },
  { id: 2, day: "tue", amount: 34.91 },
  { id: 3, day: "wed", amount: 52.36 },
  { id: 4, day: "thu", amount: 31.07 },
  { id: 5, day: "fri", amount: 23.39 },
  { id: 6, day: "sat", amount: 43.28 },
];

// creating chart bar
const chart_parent = document.getElementsByClassName("chart-parent")[0];

const element = statArray.map(
  (data) =>
    `<div id="${data.id}" class="chart-items"> <h5 class="data-amount">${data.amount}$</h5><h5  class="data-day">${data.day}</h5></div>`
);

chart_parent.innerHTML = element.join(" ");

//setting each bar height

const chart_items = document.querySelectorAll(".chart-items");
chart_items[new Date().getDay()].style.backgroundColor = "#9e341e";
chart_items[new Date().getDay()].style.color = "#fefefe";

for (let i = 0; i < chart_items.length; i++) {
 chart_items[i].style.height = "20px";
  setTimeout(() => {
    chart_items[i].style.height = `${statArray[i].amount * 2.5}px`;
  }, 500);
}

// light mode / dark mode switching
const ligh_dark_button = document.getElementsByClassName("circle_over")[0];
const light_button = document.getElementsByClassName("light_circle")[0];
const dark_button = document.getElementsByClassName("dark_circle")[0];
const body = document.getElementsByTagName("body")[0];
const top_part = document.getElementsByClassName("top-part")[0];
const bottom_part = document.getElementsByClassName("bottom-part")[0];

ligh_dark_button.addEventListener("click", () => {
  const dark = ligh_dark_button.classList.contains("dark");
  if (dark) {
    ligh_dark_button.classList.remove("dark");
    light_button.style.backgroundColor = "white";
    dark_button.style.backgroundColor = "transparent";
    body.style.backgroundColor = "#f7e9dc";
    top_part.style.backgroundColor = "#ec755d";
    bottom_part.style.backgroundColor = "#fffcf7";
    chart_items.forEach((each) => {
      each.style.backgroundColor = "#ec755d";
    });
    chart_items[new Date().getDay()].style.backgroundColor = "#9e341e";
    light_button.style.zIndex = "5";
    dark_button.style.zIndex = "4";
  } else {
    ligh_dark_button.classList.add("dark");
    dark_button.style.backgroundColor = "black";
    light_button.style.backgroundColor = "transparent";
    body.style.backgroundColor = "#3f3a77";
    top_part.style.backgroundColor = "#0b188c";
    bottom_part.style.backgroundColor = "#62648c";
    chart_items.forEach((each) => {
      each.style.backgroundColor = "rgb(48, 127, 173)";
    });
    chart_items[new Date().getDay()].style.backgroundColor = "blue";
    light_button.style.zIndex = "4";
    dark_button.style.zIndex = "5";
  }
});

// showing and hiding usage amount
const data_amount = document.querySelectorAll(".data-amount");
chart_items.forEach((each) => {
  each.addEventListener("mouseenter", (event) => {
    const id = event.target.id;
    data_amount[id].style.visibility = "visible";
  });
  each.addEventListener("mouseleave", (event) => {
    const id = event.target.id;
    data_amount[id].style.visibility = "hidden";
  });
});
