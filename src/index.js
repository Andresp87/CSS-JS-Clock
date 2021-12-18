const $seconds = document.querySelector('.seconds')
const $minutes = document.querySelector('.minutes')
const $hours = document.querySelector('.hours')

const secondsInterval = setInterval(() => {
    const now = new Date()
    const seconds = now.getSeconds()
    const DEGREE_ROTATION_PER_SECOND = 6
    $seconds.style.transform = `rotate(${seconds * DEGREE_ROTATION_PER_SECOND}deg)`;
}, 1000)

const minutesInterval = setInterval(() => {
    const now = new Date();
    const minutes = now.getMinutes();
    const DEGREE_ROTATION_PER_MINUTE = 6;
    $minutes.style.transform = `rotate(${minutes * DEGREE_ROTATION_PER_MINUTE}deg)`;
}, 60000);

const hoursInterval = setInterval(() => {
    const now = new Date();
    const hours = now.getHours();
    const DEGREE_ROTATION_PER_HOUR = 30;
    $hours.style.transform = `rotate(${hours * DEGREE_ROTATION_PER_HOUR}deg)`;
}, 36000);