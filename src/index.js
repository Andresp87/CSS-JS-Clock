const $seconds = document.querySelector('.seconds')

const secondsInterval = setInterval(() => {
    const now = new Date()
    const seconds = now.getSeconds()
    const DEGREE_ROTATION_PER_SECOND = 6
    $seconds.style.transform = `rotate(${seconds * DEGREE_ROTATION_PER_SECOND}deg)`;
}, 1000)


