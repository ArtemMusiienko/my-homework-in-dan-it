if(!localStorage.theme)localStorage.theme="light";
document.body.className = localStorage.theme;
toggleThemeBtn.innerText = document.body.classList.contains(`dark`)? `Chenge theme to WHITE `:`Chenge theme to DARK`;



toggleThemeBtn.onclick = ()=>{
    document.body.classList.toggle("dark");
    toggleThemeBtn.innerText = document.body.classList.contains(`dark`)? ` Chenge theme to WHITE  `:`Chenge theme to DARK `;
 localStorage.theme=document.body.className || "light";
}



