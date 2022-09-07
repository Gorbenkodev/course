// const callback = (err, data) => {
//   if (!err) {
//   console.log(`Tasks successfully fetched!:
//     ${data.join(', ')}`);
//   } else {
//     console.log(`Ooops, something went wrong:
//       ${err}`);
//   }
// }
// const err = null;
// const data = 'task2';

// const isString = (callback, data, error) => {
//   if (typeof data == 'string') {
//     callback(data)
//   } else {
//     // console.log('Error')
//   }
// }

// isString(callback)
// --------------------------------------------------------- task 2

function clock(){
    let date = new Date(),
        hours = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours(),
        minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes(),
        seconds = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
    document.getElementById('clock').innerHTML = hours + ':' + minutes + ':' + seconds;
    // console.log(hours + ':' + minutes + ':' + seconds)
}
setInterval(clock, 1000);
clock();
// --------------------------------------------------------- task 3
function timer (seconds, tick, result) {
	if (seconds > 0) {
		tick(seconds);
		seconds -= 1;
		setTimeout(function (s) {
			timer(seconds, tick, result);
		}, 1000);
	} else {
  document.getElementById('timer').innerHTML = `The end!`;
		// console.log(`The end`);
	}
}

timer(100, function (s) {
  document.getElementById('timer').innerHTML = `Timer: ${s}`;
	// console.log(`Timer: ${s}`);
});
// // --------------------------------------------------------- task 4
// class Time {
//   constructor(name) {
//      this.name = name
//      this.setNull();
//   }

//   setNull() {
//      this.id = setTimeout(() => {
//         (this.name = null);
//         console.log(this);
//      }, 5000);

//   }

//   destroySetNull() {
//      clearTimeout(this.id);
//   }
// }


// let time = new Time('1');
// console.log(time);
// time.destroySetNull();