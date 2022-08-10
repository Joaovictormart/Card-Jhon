

let nome = document.querySelector("#jName");


let jane = document.querySelector(".jane")

let cardN = document.querySelector("#nCard")

let number = document.querySelector(".number")

let MM = document.querySelector("#MM")

let mes = document.querySelector(".mm")

let YY = document.querySelector("#YY")

let ano = document.querySelector(".yy")

let codG = document.querySelector("#cvc")

let cvc = document.querySelector(".cod")

// addEventListener("click", atualizarNam)

//     function atualizarNam() {

       

//         jane.innerText = nome.value
//         ;

//     }

nome.oninput=() => {
   jane.innerText = nome.value;
   jane.toUpperCase();
}

   
   
cardN.oninput=() => {

    number.innerText = cardN.value;
}


MM.oninput=() => {

    mes.innerText = MM.value;
}

YY.oninput = () => {

    ano.innerText = YY.value;
}

codG.oninput=() => {

    cvc.innerText = codG.value;
}

document.querySelector("#btn-confirm").addEventListener("click" , function conr()
{
    window.location.href="../Continue.html";
}
   
)

