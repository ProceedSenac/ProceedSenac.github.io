let counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 3){
    counter = 1;
  }
}, 10000);


function openModal(){

  let modal = document.querySelector('.modal-msg')

  modal.style.display = 'block';
}

function closeModal(){

  let modal = document.querySelector('.modal-msg')

  modal.style.display = 'none';

}

document.getElementById("copyText").addEventListener("click", function(){
  document.getElementById("emailText").select();
  document.execCommand('copy');
})

function openModalOn(){
  let modal = document.querySelector('.modal-av')

  modal.style.display = 'block';
}

function closeModalOn(){
  let modal = document.querySelector('.modal-av')

  modal.style.display = 'none';
}

