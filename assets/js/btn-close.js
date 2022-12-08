const btnsClose = document.querySelectorAll(".btn-close");

btnsClose.forEach(btnClose =>{
    btnClose.addEventListener("click", ev => {
        ev.target.parentNode.remove();
    })
})