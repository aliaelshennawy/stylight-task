import axios from './web_modules/axios.js';

class App {

	constructor() {
		this.listenToDocumentChange();
	}
	listenToDocumentChange() {
		document.addEventListener('change', evt => {
			const selectedValue = document.getElementById('currency-select-to').value;
			const inputAmount = document.getElementById('amount').value;
			this.convertCurrency(selectedValue , inputAmount);
		});
	};
	convertCurrency(to, amount) {
		console.log(to,amount);
		let rate;
    axios
      .get('http://data.fixer.io/api/latest?access_key=27ae2d0afbaa492dccefaf0445a5a978')
      .then(function(response) {
				rate = (response.data.rates[to] * amount);
				console.log(rate);
				document.getElementById('result').innerHTML = rate;
				return rate;
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
	}	
}

new App();
