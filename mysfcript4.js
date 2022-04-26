function myFunction(){
    document.getElementById("cngcnt").innerText = "Here is changed text"; 
    document.getElementById('btn').style.display = "none";
    const butt = document.createElement("button");
    butt.setAttribute("id", "btn2");
    butt.innerText = "click again";
    document.body.appendChild(butt);
    document.getElementById("btn2").onclick = function() {myFun2()};
    const butt3 = document.createElement("button");
    butt3.innerText = "Refresh";
    butt3.setAttribute ("id" , "btn3");
    document.body.appendChild(butt3);
    document.getElementById("btn3").onclick = function() {myfun3()};
    // document.getElementById("btn2").style.innerHTML = <button onclick="myFunction2"></button>' ;
}


function myFun2(){
        document.getElementById("hh1").innerText = "Bye..!";
        document.getElementById("cngcnt").style.display = "none";
        document.getElementById("btn2").style.display = "none";
        
}

function myfun3(){
    location.reload()
}
