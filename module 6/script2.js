const date = new Date("2027-04-08");
const date2 = date.getTime();

const time = Date.now();

const nextYearStart = new Date("2027, 01, 01");

const currentTime = Date.now();

const timeNextYearStart = nextYearStart.getTime()

const difference= timeNextYearStart - currentTime

const millisecondsInOneDay = 1000 * 60 * 60 *24

const result = Math.ceil(difference / millisecondsInOneDay)

console.log(result + " days until next year");



// console.log(date.toDateString())
// console.log(date.toLocaleDateString())
// console.log(date.toLocaleTimeString())
// console.log(date.toISOString())

const myDate = new Date('2024-08-22T19:45:00');
const locale = 'en-GB';

console.log(
    // 22/08/2024
    new Intl.DateTimeFormat(locale, { dateStyle: 'short' }).format(myDate),

    // 22 Aug 2024 
    new Intl.DateTimeFormat(locale, { dateStyle: 'medium' }).format(myDate),

    // Thursday, 22 August 2024
    new Intl.DateTimeFormat(locale, { dateStyle: 'full' }).format(myDate),

    // 22 August 2024
    new Intl.DateTimeFormat(locale, { dateStyle: 'long' }).format(myDate),

    // 19:45
    new Intl.DateTimeFormat(locale, { timeStyle: 'short' }).format(myDate),
    
    // 19:45:00
    new Intl.DateTimeFormat(locale, { timeStyle: 'medium' }).format(myDate),

    // 19:45:00 Central European Summer Time
    new Intl.DateTimeFormat(locale, { timeStyle: 'full' }).format(myDate),
);

// Using both dateStyle and timeStyle
const fullFormatter = new Intl.DateTimeFormat(locale, {
    dateStyle: 'full',
    timeStyle: 'medium',
});
// Full date with medium time: Thursday, 22 August 2024 at 19:45:00
console.log('Full date with medium time:', fullFormatter.format(myDate));


const newDate = new Date("2025-10-27T19:30:00Z")
//“Mon, 27 Oct 2025, 08:30 PM”
console.log("newdate is: " +newDate)
const options = {
  weekday: "short",
  day: "numeric",
  month: "short",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
  hour12: true
}
const formattedDate = new Intl.DateTimeFormat(locale, options)
console.log("the formatted date is " + formattedDate.format(newDate))


console.log("  ")


const clockElement = document.getElementById('clock');

// A function to get the current time and update the element
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-GB'); // Format for local time
    clockElement.textContent = timeString;
}

// Call updateClock once immediately so we don't see an empty div for the first second
updateClock();

// Then, set an interval to call updateClock every 1000 milliseconds (1 second)
const clockIntervalId = setInterval(updateClock, 1000);