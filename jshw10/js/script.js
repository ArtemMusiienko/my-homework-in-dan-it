document.getElementById("eye1").addEventListener("click", function(e){
    const pwd1 = document.getElementById("pwd1");
    if(pwd1.getAttribute("type")=="password"){
        pwd1.setAttribute("type","text");
    } else {
        pwd1.setAttribute("type","password");
    }
});
document.getElementById("eye2").addEventListener("click", function(e){
    const pwd2 = document.getElementById("pwd2");
    if(pwd2.getAttribute("type")=="password"){
        pwd2.setAttribute("type","text");
        
    } else {
        pwd2.setAttribute("type","password");
    }
});
document.getElementById(`btn1`).addEventListener(`click`, compare);
function compare () {
    if (pwd1.value==pwd2.value) {
        alert(`You are welcome`)
        
    } else {
        const p =document.getElementById(`info`);
        p.innerHTML = `Нужно ввести одинаковые значения`
        p.style.color=`red`
        p.append()
    }
    
}
document.getElementById(`eye1`).addEventListener(`click`, a )
function a (e) { 
    e.currentTarget.value = document.getElementById(`box`).style.display = `block`; 
}
document.getElementById(`box`).addEventListener(`click`, b )
function b (e) { 
    e.currentTarget.value = document.getElementById(`box`).style.display = `none`; 
}
document.getElementById(`eye2`).addEventListener(`click`,c )
function c (e) { 
    e.currentTarget.value = document.getElementById(`box2`).style.display = `block`; 
}
document.getElementById(`box2`).addEventListener(`click`, d)
function d (e) { 
    e.currentTarget.value = document.getElementById(`box2`).style.display = `none`; 
}

