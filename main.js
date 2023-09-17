function selected(selector){
    
    if(  document.querySelector(selector).classList.contains('selected')){
      document.querySelector(selector).classList.remove('selected')
    }else{
      turnOffPreviousSelection();
      document.querySelector(selector).classList.add('selected');
    }
  }

  function turnOffPreviousSelection(){
    const previousButton = document.querySelector('.selected');
    if(previousButton){
      previousButton.classList.remove('selected')
    }
  }