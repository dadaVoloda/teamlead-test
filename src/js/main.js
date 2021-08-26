$('.reviews__carousel').slick({
  autoplay: true,
  autoplaySpeed: 5000,
  speed: 1500,
  prevArrow: '<button type="button" class="slick-prev"><img src="img/chevron-left.svg"></button >',
  nextArrow: '<button type="button" class="slick-next"><img src="img/chevron-right.svg"></button>',
});

// scroll
$('.anchor').on('click', function (event) {
  event.preventDefault();
  let id = $(this).attr('href'),
    top = $(id).offset().top;
  $('body,html').animate({ scrollTop: top }, 1500);
});

// timer
const deadline = new Date(Date.parse(new Date()) + 30 * 60 * 1000);

function getTimeRemaining(endtime) {
  const t = Date.parse(endtime) - Date.parse(new Date());

  const minutes = Math.floor((t / 1000 / 60) % 60);
  const seconds = Math.floor((t / 1000) % 60);

  return {
    total: t,
    minutes: minutes,
    seconds: seconds,
  };
}

function getZero(num) {
  if (num >= 0 && num < 10) {
    return `0${num}`;
  } else {
    return num;
  }
}

function setClock(selector, endtime) {
  const timer = document.querySelector(selector);
  const minutes = timer.querySelector('#minutes');
  const seconds = timer.querySelector('#seconds');
  const timeInterval = setInterval(updateClock, 1000);

  updateClock();

  function updateClock() {
    const t = getTimeRemaining(endtime);
    minutes.innerHTML = getZero(t.minutes);
    seconds.innerHTML = getZero(t.seconds);

    if (t.total <= 0) {
      clearInterval(timeInterval);
    }
  }
}

setClock('.timer', deadline);
