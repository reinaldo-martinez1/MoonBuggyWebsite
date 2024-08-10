/* exported byvCountdown */

class byvCountdown {
    constructor( selector ) {
      const $countdown = document.querySelector(selector), countdown = $countdown.querySelector('.countdown__countdown');
      
      let countDownDate = new Date(countdown.dataset.date + ' GMT' + countdown.dataset.offset + '00').getTime(),
          interval = null;
          
      interval = setInterval(function() {
        var now      = new Date().getTime(),
            distance = countDownDate - now,
            past     = distance < 0 || isNaN(distance),
            days     = past ? 0 : Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours    = past ? 0 : Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes  = past ? 0 : Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds  = past ? 0 : Math.floor((distance % (1000 * 60)) / 1000);
            
        // When finished
          if ( past ) {
            clearInterval(interval);
            var $onFinish = document.querySelectorAll('.onCountdownFinish');
            
            $onFinish.forEach(function(el) {
              el.classList.remove('visible');
              el.classList.remove('onCountdownFinish');
              setTimeout(function() {
                el.classList.add('visible');
              }, 500)
            });
          }
          
          // Update Display
            countdown.querySelector(".number--days").innerHTML    = days;
            countdown.querySelector(".number--hours").innerHTML   = hours;
            countdown.querySelector(".number--minutes").innerHTML = minutes;
            countdown.querySelector(".number--seconds").innerHTML = seconds;
            
            var circumference = 42 * 2 * Math.PI,
                secs = circumference * seconds / 60,
                mins = circumference * minutes / 60,
                hrs = circumference * hours / 24,
                dys = circumference * days / 365;
            
            countdown.querySelector(".gauge--seconds .gauge__fill").style.strokeDasharray = `${secs} ${circumference}`;
            countdown.querySelector(".gauge--minutes .gauge__fill").style.strokeDasharray = `${mins} ${circumference}`;
            countdown.querySelector(".gauge--hours .gauge__fill").style.strokeDasharray = `${hrs} ${circumference}`;
            countdown.querySelector(".gauge--days .gauge__fill").style.strokeDasharray = `${dys} ${circumference}`;
        }, 1000);
    }
  }

export default byvCountdown