console.log('Loaded!');
//to move the image
var img = document.getElementById('madi');
var marginLeft =0;
function moveRight(){
    marginLeft=marginLeft + 1;
    img.styl.marginLeft =marginLeft + 'px';
}
img.onclick = function(){
    var intervel = setInterval(moveRight , 15);
};