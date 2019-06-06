import Apify from 'apify';

Apify.main(async () => {

	console.log('message => HELLO APIFY!');

	function pageFunction(context) {
		let JQuery = context.JQuery;

		JQuery.ajax({
			url: 'https://eadgraduacao.ftec.com.br/login/index.php'
		});

	}
});
