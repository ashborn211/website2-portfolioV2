const bars =  document.querySelectorAll('.progress');
bars.forEach(item =>{
    let value = item.id;
    let contador = 0;
    let interval = setInterval(function(){
        item.style.width = contador + "%";
        if (contador == value){
            clearInterval(interval);
        }
        contador++;
    },8);
})