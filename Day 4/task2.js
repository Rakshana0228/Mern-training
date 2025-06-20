let count = 1;

const timer = setInterval(() => {
  console.log(count);
  count++;
  if (count > 5) {
    clearInterval(timer);
  }
}, 1000);