const LastYear = "1 Jan 2023";

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

function countdown() {
  const LastYearDate = new Date(LastYear);
  const newDate = new Date();
  const millisec = newDate - LastYearDate;
  if (millisec > 0) {
    const seconds = millisec / 1000;
    const remainingSeconds = Math.floor(seconds) % 60;

    const minutes = Math.floor(seconds / 60) % 60;
    const hours = Math.floor(seconds / 3600) % 24;
    const days = Math.floor(seconds / (3600 * 24));

    daysElement.innerHTML = days;
    hoursElement.innerHTML = hours;
    minutesElement.innerHTML = minutes;
    secondsElement.innerHTML = remainingSeconds;
  } else {
    document.getElementById("timerComplete").innerHTML = "Timer has completed";
    clearInterval(timer);
  }
}

// initial call
countdown();

const timer = setInterval(countdown, 1000);
