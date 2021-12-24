const clock = (() => {
    const $seconds = document.querySelector('.seconds');
    const $minutes = document.querySelector('.minutes');
    const $hours = document.querySelector('.hours');


    if (!$seconds || !$minutes || !$hours) {
        throw new Error ('No css elemnts found');
    };
    

    const DEGREE_ROTATION = {
        seconds: 6,
        minutes: 6,
        hours: 30
    };
    
    
    const clockInterval = setInterval(() => {
        const now = new Date();
    
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours();
        
        $seconds.style.transform = `rotate(${seconds * DEGREE_ROTATION.seconds}deg)`;
        $minutes.style.transform = `rotate(${minutes * DEGREE_ROTATION.minutes}deg)`;
        $hours.style.transform = `rotate(${hours * DEGREE_ROTATION.hours}deg)`;
    }, 1000);

    return {
        stop: () => clearInterval(clockInterval),
    }
});

clock();