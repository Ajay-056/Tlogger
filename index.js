const time = document.getElementById('time-1');
const log = document.getElementById('log');

window.setInterval(() => {
  var date = new Date();
  var n = date.toLocaleDateString();
  var currenttime = date.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  });
  time.value = n + ' ' + currenttime;
}, 1000);
