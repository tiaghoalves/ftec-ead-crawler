
// This is the main Node.js source code file of your actor.
// It is referenced from the "scripts" section of the package.json file,
// so that it can be started by running "npm start".

import Apify from 'apify';

Apify.main(async () => {
    // Get input of the actor.
    // If you'd like to have your input checked and generate a user interface
    // for it, add INPUT_SCHEMA.json file to your actor.
    // For more information, see https://apify.com/docs/actor/input-schema
    const input = await Apify.getInput();
    console.log('Input:');
    console.dir(input);

	const requestQueue = await Apify.openRequestQueue();
    const pseudoUrls = [new Apify.PseudoUrl('https://eadgraduacao.ftec.com.br/[.*]')];

    await requestQueue.addRequest(new Apify.Request({
        url: 'https://eadgraduacao.ftec.com.br/login/index.php'
    }));

    const crawler = new Apify.PuppeteerCrawler({
        requestQueue,

        handlePageFunction: async ({
            request,
            page
        }) => {
            const title = await page.title();
            let selector = 'a';
            console.log(`Title of ${request.url}: ${title}`);

            await Apify.utils.enqueueLinks({
                page,
                selector,
                pseudoUrls,
                requestQueue
            });
        },

        handleFailedRequestFunction: async ({
            request
        }) => {
            console.log(`Request ${request.url} failed too many times`);

            await Apify.pushData({
                '#debug': Apify.utils.createRequestDebugInfo(request),
            })

        },
        maxRequestsPerCrawl: 50,
        maxConcurrency: 10,
    });


    // Save output
    const output = {
        receivedInput: input,
        message: 'Hello sir!',
    };
    console.log('Output:');
    console.dir(output);
	await Apify.setValue('OUTPUT', output);

    await crawler.run();
});