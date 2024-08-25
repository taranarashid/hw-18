let on = document.querySelector('.on');
let img = document.querySelector('.img');
let off = document.querySelector('.off');


on .addEventListener('click', function(){
    img.src ='https://www.w3schools.com/js/pic_bulbon.gif';
});

off .addEventListener('click',()=>{
    img .src ='https://www.w3schools.com/js/pic_bulboff.gif';
});