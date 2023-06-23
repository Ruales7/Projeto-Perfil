alert("Olá Seja Bem-vindo") /* alerta mostrando no início Seja Bem-vindo */

let p1=prompt("Digite seu NOME");

let p2=prompt("Digite um PODER que gostaria de ter"); /* declarando a variável p2 como let e chamando o prompt para que você digite o poder */

let p3=prompt("Digite o nome de um VILÃO"); /* declarando a variável p3 como let e chamando o prompt para que você digite o vilão */

let p4=prompt("Digite um LUGAR que gostaria de estar");

let msg=document.getElementById('msg')

msg.innerHTML = `<p>Olá ${p1} o seu poder é a/o ${p2} você vai enfrentar o/a ${p3} no/em ${p4}</p>`