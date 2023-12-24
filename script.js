
const btn = document.querySelector('#btn');
let real = document.querySelector('#currencyValorReal');
const select = document.querySelector('#select');
let img = document.querySelector('#imgEstr');

const dolar = 4.86
const euro = 5.36

const convertValue = () => {
    const valorInput = document.querySelector('#valor').value;
    const currencyValorReal = document.querySelector('#currencyValorReal')
    const currencyValorDolar = document.querySelector('#currencyValorDolar')
    let converterDolar = valorInput / dolar // divisao para converter
    let converterEuro = valorInput / euro


    // Formatando numero em forma de dinheirio (reais)
    const formatoDinheiro = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });
    const ValorFormatado = formatoDinheiro.format(valorInput)
    currencyValorReal.innerHTML = ValorFormatado

    if (select.value === 'dolar') {
        // Formatando numero em forma de dolar (reais)
        const formatoDolar = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });
        const valorFormatadoDolar = formatoDolar.format(converterDolar)
        currencyValorDolar.innerHTML = valorFormatadoDolar
    }

    if (select.value === 'euro') {
        const formatoEuro = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR',
        });
        const valorFormatadoEuro = formatoEuro.format(converterEuro)
        currencyValorDolar.innerHTML = valorFormatadoEuro
    }
}

changeSelect = () => {
    const name = document.querySelector('#name')
    const imgExt = document.querySelector('#imgExt')

    if (select.value === "euro") {
        name.innerHTML = 'Euro'
        imgExt.src = './img/Euro.png'
    } // mudando a img e o nome
    if (select.value === "dolar") {
        name.innerHTML = 'Dólar'
        imgExt.src = './img/EUA.png'
    }
    convertValue() // chamando a outra função junto com o change

}

//eventos ouvintes

btn.addEventListener('click', convertValue)
select.addEventListener('change', changeSelect)

