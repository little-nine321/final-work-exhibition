const stars = document.getElementsByClassName('star');
for(let i = 0;i < stars.length;i++){
    stars[i].onmouseover = function(){
        for(let j = 0;j <= i;j++){
            stars[j].style.color = "rgb(251, 203, 0)";
        }
    }
    stars[i].onmouseout = function(){
        for(let j = 0;j <= i;j++){
            stars[j].style.color = "rgb(43, 43, 43)";
        }
    }
}
