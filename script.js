function verificar() {
    console.log("testando funcao")

    let base = document.getElementById("inputBase").value;
    let altura = document.getElementById("inputAltura").value;

    let area = base * altura;
    let perimetro = (base * 2) + (altura * 2);
    let diagonal = Math.hypot(base, altura);

    valorBase.innerHTML = base;
    valorAltura.innerHTML = altura;
    valorArea.innerHTML = area.toFixed(4);
    valorPerimetro.innerHTML = perimetro.toFixed(4);
    valorDiagonal.innerHTML = diagonal.toFixed(4);    
}