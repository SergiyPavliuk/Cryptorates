class CryptoAPI{
    ///query rest api
    async queryAPI(currency, cryptocurrency) {
        // query the URL
        const url = await fetch(`https://api.coinmarketcap.com/v1/ticker/${cryptocurrency}/?convert=${currency}`);

        // return as json
        const result = await url.json();

        // return the object
        return {
             result
        }

   }

    async getCryptoCurrenciesList() {
        const url = await fetch('https://api.coinmarketcap.com/v1/ticker/');

        // Return this as a json
        const cryptoCurrencies = await url.json();
        return {
             cryptoCurrencies
        }
   }
}