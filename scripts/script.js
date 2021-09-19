const labels = document.querySelectorAll('.form-control label'); //Seleciona todos os labels do form

labels.forEach(label => {
    console.log('Texto de Entrada: ', label.innerText);
    label.innerHTML = label.innerText
        .split('') //Separa as letras do label
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`) //Gera o HTML para cada span, permitindo que a animação possa ser feita por letra.
        .join(''); //Junta os itens gerados no .map em uma única string 

    console.log('Label <span>: ', label.innerHTML);
});

console.log(labels);