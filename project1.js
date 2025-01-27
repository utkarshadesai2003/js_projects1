const btnHolds = document.querySelectorAll('.button');
const body = document.querySelector('body');

for (let i = 0; i < btnHolds.length; i++) {
  //console.log(btnHolds[i]);
}
btnHolds.forEach(function (button) {
  //console.log(button);
  button.addEventListener('click', function (anys) {
    // console.log(anys);
    //console.log(anys.target);
    if (anys.target.id === 'grey') {
      body.style.backgroundColor = anys.target.id;
    }
    if (anys.target.id === 'red') {
      console.log(anys.target);
      body.style.backgroundColor = '#dc143c';
    }
    if (anys.target.id === 'blue') {
      body.style.backgroundColor = anys.target.id;
    }
    if (anys.target.id === 'yellow') {
      body.style.backgroundColor = anys.target.id;
    }
    if (anys.target.id === 'Green') {
      body.style.backgroundColor = anys.target.id;
    }
    if (anys.target.id === 'purple') {
      body.style.backgroundColor = anys.target.id;
    }
  });
});
