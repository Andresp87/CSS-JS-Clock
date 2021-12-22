const $seconds = document.querySelector('.seconds')
const $minutes = document.querySelector('.minutes')
const $hours = document.querySelector('.hours')

const DEGREE_ROTATION_PER_SECOND = 6
const DEGREE_ROTATION_PER_MINUTE = 6;
const DEGREE_ROTATION_PER_HOUR = 30;


const secondsInterval = setInterval(() => {
    const now = new Date();

    const seconds = now.getSeconds()
    const minutes = now.getMinutes();
    const hours = now.getHours();
    
    $seconds.style.transform = `rotate(${seconds * DEGREE_ROTATION_PER_SECOND}deg)`;
    $minutes.style.transform = `rotate(${minutes * DEGREE_ROTATION_PER_MINUTE}deg)`;
    $hours.style.transform = `rotate(${hours * DEGREE_ROTATION_PER_HOUR}deg)`;
}, 1000)
