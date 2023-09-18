const form = document.getElementById("form").addEventListener('submit',function(event){
    event.preventDefault();
    const radioButtons = document.getElementsByName("rating");
    let value = '';
    for(i = 0;i<radioButtons.length;i++){
      if(radioButtons[i].checked){
        value = radioButtons[i].value;
      }
    }
    showThankYouCard(value);
    return value;
  })
 function showThankYouCard(value){
  if(value===''){
    return;
  }
   document.querySelector('.container').classList.add('thank-you-container');
   document.querySelector('.img-star').src = "images/illustration-thank-you.svg";
   document.querySelector('.img-star').classList.add("img-thank-you");
   document.getElementById('form').innerHTML= '';
   document.querySelector('.number-of-stars-js').innerHTML = `You selected ${value} out of 5`;
   document.querySelector('.number-of-stars-js').classList.add("background-and-color");
   document.querySelector('.thank-you-text').innerHTML = `  We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!`;
  document.querySelector('.thanks-h2').innerHTML = "Thank you"
  
 }

