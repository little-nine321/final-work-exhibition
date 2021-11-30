var obox = document.getElementById("courseBox");
var odown = document.getElementById("downListCourse");
var oli = document.querySelectorAll("ul.course > li");
var timer;
obox.onclick = function(){
    clearInterval(timer);
    timer = setInterval(function(){
        odown.style.display = "block";
    },300)
    for(var i=0;i<oli.length;i++){
        oli[i].n = i;
        oli[i].onclick = function(){
            obox.innerHTML = this.innerHTML;
            odown.style.display = "none";
            clearInterval(timer);
        }
    }
}
var obox2 = document.getElementById("semesterBox");
var odown2 = document.getElementById("downSemesterList");
var oli2 = document.querySelectorAll("ul.semesterList > li");
var timer1;
obox2.onclick = function(){
    clearInterval(timer1);
    timer1 = setInterval(function(){
        odown2.style.display = "block";
    },300)
    for(var i=0;i<oli2.length;i++){
        oli2[i].n = i;
        oli2[i].onclick = function(){
            obox2.innerHTML = this.innerHTML;
            odown2.style.display = "none";
            clearInterval(timer1);
        }
    }
}