const date = new Date();

const renderCalendar = (current) => {
  date.setDate(1);
  const monthDays = document.querySelector(".days");
  const lastDay = new Date(
    date.getYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  const prevLastDay = new Date(
    date.getYear(),
    date.getMonth(),
    0
  ).getDate();
  const firstDayIndex = date.getDay();
  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();
  const nextDays = 7 - lastDayIndex - 1;
  const months = [
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
  
  document.querySelector(".date h1").innerHTML = months[date.getMonth()];
  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
   if(i === Number(current) )
    {
      days += `<div id="current" value=${i}>${i}</div>`; 
    }
    else{
      days += `<div class='current1' value=${i}>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};
renderCalendar();

let setMonths = document.querySelector("#select-month");
setMonths.addEventListener("click", () => {
  if (setMonths.value !== '')
    date.setMonth(setMonths.value);
  renderCalendar("");
});

let setYears = document.querySelector("#select-year");
setYears.addEventListener("change", () => {
  if (setYears.value !== '')
    date.setYear(setYears.value);
    renderCalendar("");
});

let dateValue=document.querySelector("#date_input");
let setDates=document.querySelector("#btn");


setDates.addEventListener("click", () => {
 let x = dateValue.value;
  if(x !=='' && !isNaN(x)){
    date.setDate(x);
  }
  renderCalendar(x);
 dateValue.value="";

}); 
