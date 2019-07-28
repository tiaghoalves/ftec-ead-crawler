import Apify from 'apify';

const { utils: { log } } = Apify;

module.exports.runActor = (CrawlerSetup) => {

	Apify.main(async () => {
		log.debug('Reading INPUT.');
		// Get input of the actor.
		// If you'd like to have your input checked and generate a user interface
		// for it, add INPUT_SCHEMA.json file to your actor.
		// For more information, see https://apify.com/docs/actor/input-schema
        const input = await Apify.getInput();
		console.log('Input:');
		console.dir(input);
		if (!input) throw new Error('INPUT cannot be empty!');

        // Get crawler setup and startup options.
		const setup = new CrawlerSetup(input);

        log.info(`Configuring ${setup.name}.`);
        const crawler = await setup.createCrawler();

        log.info('Configuration completed. Starting the scrape.');

		await crawler.run();

        log.info(`${setup.name} finished.`);
	});

};
