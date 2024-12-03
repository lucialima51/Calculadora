// VARIAVEL GLOBAL
const visor = document.getElementById("resultado");

function insert(num) {
visor.textContent += num;
}

function clean() {
    visor.textContent = "";   
}

function backSpace() {
    let numerovisor = visor.textContent;

    visor.textContent = numerovisor.substring(0, numerovisor.length -1)
    
}

function calcular() {
    let calculo  = visor.textContent;

    if (calculo.length > 2) {

        visor.textContent = eval(calculo); 

    } else {

        visor.textContent = "Error";
        visor.style.color = '#f00';
        visor.style.textAlign = 'center';

        setTimeout(() => {
            clean();
            visor.style.color = '#000';
            visor.style.textAlign = 'end';

        }, 1000);
        
    }

    
}

    


