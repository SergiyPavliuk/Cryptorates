class UI {
    constructor() {
        this.init();
    }
    init() {
        this.printCryptoCurrencies();
    }
    printCryptoCurrencies() {
        cryptoAPI.getCryptoCurrenciesList()
            .then(data => {
                const cryptoCurrencies = data.cryptoCurrencies;
                const select = document.getElementById('cryptocurrency');

                cryptoCurrencies.forEach(currency => {
                    // add the <option>
                    const option = document.createElement('option');
                    option.value = currency.id;
                    option.appendChild(document.createTextNode(currency.name));
                    select.appendChild(option);
                })
            })
    }
    //print message
    printMessage(message, className) {
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));

        const messagesDiv = document.querySelector('.messages');
        messagesDiv.appendChild(div);

        //remove the message
        setTimeout(() => {
            document.querySelector('.messages div').remove();
        }, 2000);
    }
    //preint the result
    displayResult(result, currency) {
        //read the currency
        let currencyName;
        currencyName = 'price_' + currency.toLowerCase();
        //read the result from the object
        const value = result[currencyName];
        //remove the prev result
        const prevResult = document.querySelector('#result > div');
        if(prevResult){
            prevResult.remove();
        }

        let HTMLTemplate = '';
        HTMLTemplate += `
        <div class="card cyan darken-2">
            <div class="card-content white-text">
                <span class="card-title">Result</span>
                <p>The Price of ${result.name} from ${currency} is $ ${value}</p>
                <p>Last Hour: ${result.percent_change_1h} %</p>
                <p>Last Day: ${result.percent_change_24h} %</p>
                <p>Last 7 Days: ${result.percent_change_7d} %</p>
            </div>
        </div>
        `;
        //print the spinner
        this.showSpinner();
        setTimeout(() => {
            const divResult = document.querySelector('#result');
            divResult.innerHTML = HTMLTemplate;
            //hide spinner
            document.querySelector('.spinner img').remove();
        }, 2000);
    }
    showSpinner() {
        const spinnerGIF = document.createElement('img');
        spinnerGIF.src = 'img/spinner.gif';
        document.querySelector('.spinner').appendChild(spinnerGIF);
    }
}