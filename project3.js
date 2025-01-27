FormData.addEventListener('submit',function(e) {
  e.preventDefult();

  const height= parseInt(document.querySelector('#height').value);
  const weigth= parseInt(document.querySelector('#weidth').value);
  const results = document.querySelector('#results');

  if(height ==='' || height < 0 || isNaN(height)) {
    results.innerHTML = 'please give a valid height ${height}';

  } else if(weigth === '' || weigth < 0 || isNaN(weigth)) {
    results.innerHTML = 'please give a valid weight ${weidth}';
  
  }else {
    const bmi= (weigth/ ((height= height)/10000)).toFixed(2);
    results.innerHTML ='<span>${bmi}</span>';}
  });

  

