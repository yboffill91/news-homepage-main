const abrir=document.getElementById("menHamb");
const navMenu=document.getElementById("navMenu");
const cerrar=document.getElementById("cerrar");
abrir.addEventListener("click", ()=>{
    navMenu.style.display="flex";
})
cerrar.addEventListener("click", ()=>{
    navMenu.style.display="none";
});
