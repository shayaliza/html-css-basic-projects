// gradient color

const animatedCircles = document.querySelectorAll(".animated-circle");

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function animateCircle() {
  animatedCircles.forEach((circle) => {
    if (isInViewport(circle)) {
      circle.style.animation = "anim 2s linear forwards";
    } else {
      circle.style.animation = "none";
    }
  });
}
window.addEventListener("scroll", animateCircle);

//number counting all functions
function AllInOneNumbers() {
  let number1 = document.getElementById("number1");
  let counter = 0;
  setInterval(() => {
    if (counter == 60) {
      clearInterval();
    } else {
      counter += 1;
      number1.innerHTML = counter + "%";
    }
  }, 30);
  let number2 = document.getElementById("number2");
  let counter2 = 0;
  setInterval(() => {
    if (counter2 == 45) {
      clearInterval();
    } else {
      counter2 += 1;
      number2.innerHTML = counter2 + "%";
    }
  }, 30);
  let number3 = document.getElementById("number3");
  let counter3 = 0;
  setInterval(() => {
    if (counter3 == 75) {
      clearInterval();
    } else {
      counter3 += 1;
      number3.innerHTML = counter3 + "%";
    }
  }, 30);

  let number4 = document.getElementById("number4");
  let counter4 = 0;
  setInterval(() => {
    if (counter4 == 85) {
      clearInterval();
    } else {
      counter4 += 1;
      number4.innerHTML = counter4 + "%";
    }
  }, 30);

  let number5 = document.getElementById("number5");
  let counter5 = 0;
  setInterval(() => {
    if (counter5 == 60) {
      clearInterval();
    } else {
      counter5 += 1;
      number5.innerHTML = counter5 + "%";
    }
  }, 30);
  let number6 = document.getElementById("number6");
  let counter6 = 0;
  setInterval(() => {
    if (counter6 == 45) {
      clearInterval();
    } else {
      counter6 += 1;
      number6.innerHTML = counter6 + "%";
    }
  }, 30);

  let number7 = document.getElementById("number7");
  let counter7 = 0;
  setInterval(() => {
    if (counter7 == 75) {
      clearInterval();
    } else {
      counter7 += 1;
      number7.innerHTML = counter7 + "%";
    }
  }, 30);

  let number8 = document.getElementById("number8");
  let counter8 = 0;
  setInterval(() => {
    if (counter8 == 85) {
      clearInterval();
    } else {
      counter8 += 1;
      number8.innerHTML = counter8 + "%";
    }
  }, 30);
}
// calling it
const target = document.querySelector(".num_cont");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      AllInOneNumbers();
    }
  });
});
{
  threshold = 0;
}
observer.observe(target);
