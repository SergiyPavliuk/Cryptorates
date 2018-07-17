const cryptoAPI = new CryptoAPI();
const ui = new UI();

//variables
const form = document.getElementById('form');


//add event listeners
form.addEventListener('submit', e => {
    e.preventDefault();

    //read currency
    const currencySelect = document.getElementById('currency').value;
    //read cryptocurrency
    const cryptoCurrencySelect = document.getElementById('cryptocurrency').value;
    
    if (currencySelect === '' || cryptoCurrencySelect === ''){
        ui.printMessage('All the fields are mandatory', 'deep-orange darken-4 card-phone');
    } else {
        cryptoAPI.queryAPI(currencySelect, cryptoCurrencySelect)
        .then(data => {
            ui.displayResult(data.result[0], currencySelect);
        })
    }
})