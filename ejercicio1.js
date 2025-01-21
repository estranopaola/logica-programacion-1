let num1 = parseFloat(prompt("Ingresa un numero"));
let num2 = parseFloat(prompt("Ingresa un numero"));
let num3 = parseFloat(prompt("Ingresa un numero"));

if (num1 === num2 && num2 === num3) {
    console.log("Los  números son iguales.");
}else{
    let numeros = [num1,num2,num3];

    let mayorAMenor = numeros.sort((a, b) => b - a);
    console.log("Mayor a menor:", mayorAMenor);
    
    let menorAMayor = numeros.sort((a, b) => a - b);
    console.log("Menor a mayor:", menorAMayor);

    let mayor = mayorAMenor[0];
    let centro = mayorAMenor[1];
    let menor = mayorAMenor[2];

    console.log(`Número mayor: ${mayor}`);
    console.log(`Número central: ${centro}`);
    console.log(`Número menor: ${menor}`);
}
