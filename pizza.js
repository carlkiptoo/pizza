//let menu = document.querySelector('#menu-bar');
//let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut();

const pizza= ['hawaian', 'cheese', 'meat']
const topping= ['mushroom', 'onions', 'sausage', 'bacon', 'extra cheese', 'black olives', 'green peppers']
const size= ['small', 'medium', 'large']

var order = {
    fName: 'name',
    address: 'address',
    pizza: 'pizza',
    size: 'size',
    topping: 'topping'
}
order.size; {
    small= 500
    medium= 800
    large= 1200
}
order.topping; {
    mushroom= 200
    onions= 200
    sausage= 200
    bacon= 200
    extraCheese= 200
   blackOlives= 200
   greenPeppers= 200
}