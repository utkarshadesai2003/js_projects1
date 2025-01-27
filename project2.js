const forms = document.querySelector('form');

forms.addEventListener('submit', function (e) {
  e.preventDefault();
  const hig = parseInt(document.querySelector('#height').value);
  const wig = parseInt(document.querySelector('#weight').value);
  const res = document.querySelector('#results');
  if (wig == '' || wig <= 0 || isNaN(wig)) {
    res.innerHTML = 'Please enter valid weight value';
  } else if (hig == '' || hig <= 0 || isNaN(hig)) {
    res.innerHTML = 'Please enter valid height value';
  } else {
    const bmi = (wig / ((hig * hig) / 10000)).toFixed(2);
    //console.log(bmi);
    res.innerHTML = `${bmi}`;
    if (bmi < 18.6) {
      res.innerHTML = `Your are underWeight ${bmi}`;
      console.log(`Your are underWeight ${bmi}`);
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      res.innerHTML = `Your are Normal ${bmi}`;
      console.log(`Your are Normal ${bmi}`);
    } else {
      res.innerHTML = `Your are overWeight ${bmi}`;
      console.log(`Your are overWeight ${bmi}`);
    }
  }
});
