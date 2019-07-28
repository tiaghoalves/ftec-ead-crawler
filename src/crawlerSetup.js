// This is the main Node.js source code file of your actor.
// It is referenced from the "scripts" section of the package.json file,
// so that it can be started by running "npm start".
import Apify from 'apify';
import { auth } from '../config';

const MAX_EVENT_LOOP_OVERLOADED_RATIO = 0.9;

class CrawlerSetup {

	constructor(input) {
		this.name = "FTEC ecampus portal scrapper crawler";

        this.rawInput = JSON.stringify(input);

		/**
         * @type {Input}
         */
        this.input = input;
		this.env = Apify.getEnv();

		this.pseudoUrls = [new Apify.PseudoUrl('http://ecampus.ftec.com.br/[.*]')];

		// Initialize async operations.
		this.crawler = null;
		this.requestList = null;
		this.requestQueue = null;
		this.dataset = null;
		this.keyValueStore = null;
		this.initPromise = this._initializeAsync();
	}

	async _initializeAsync() {
        // RequestList
        const startUrls = this.input.startUrls.map((req) => {
            req.useExtendedUniqueKey = true;
            req.keepUrlFragment = this.input.keepUrlFragments;
            return req;
        });
		this.requestList = await Apify.openRequestList('CHEERIO_SCRAPER', startUrls);

        // RequestQueue
		this.requestQueue = await Apify.openRequestQueue();

		await this.requestQueue.addRequest(new Apify.Request({
			url: 'https://ecampus.ftec.com.br/login'
		}));

        // Dataset
        this.dataset = await Apify.openDataset();
        const { itemsCount } = await this.dataset.getInfo();
        this.pagesOutputted = itemsCount || 0;

        // KeyValueStore
        this.keyValueStore = await Apify.openKeyValueStore();
    }

    /**
     * Resolves to a `CheerioCrawler` instance.
     * @returns { Promise <CheerioCrawler> }
     */
    async createCrawler() {
        await this.initPromise;

        const options = {
            ...this.input.proxyConfiguration,
            handlePageFunction: this._handlePageFunction.bind(this),
            // requestList: this.requestList,
            requestQueue: this.requestQueue,
            handlePageTimeoutSecs: this.input.pageFunctionTimeoutSecs,
            prepareRequestFunction: this._prepareRequestFunction.bind(this),
            requestTimeoutSecs: this.input.pageLoadTimeoutSecs,
            ignoreSslErrors: this.input.ignoreSslErrors,
            handleFailedRequestFunction: this._handleFailedRequestFunction.bind(this),
            maxRequestRetries: this.input.maxRequestRetries,
            maxRequestsPerCrawl: this.input.maxPagesPerCrawl,
            autoscaledPoolOptions: {
                maxConcurrency: this.input.maxConcurrency,
                systemStatusOptions: {
                    // Cheerio does a lot of sync operations, so we need to
                    // give it some time to do its job.
                    maxEventLoopOverloadedRatio: MAX_EVENT_LOOP_OVERLOADED_RATIO,
                },
            }
        };

        this.crawler = new Apify.CheerioCrawler(options);

        return this.crawler;
	}

	async _handlePageFunction({
		request,
		page,
		$
	}) {
		const title = await page.title();
		console.log(`Title of ${request.url}: ${title}`);
		let selector = 'a';
		$('#username').val(auth.username);
		let requestQueue = this.requestQueue;
		let pseudoUrls = this.pseudoUrls;

		await Apify.utils.enqueueLinks({
			page,
			selector,
			pseudoUrls,
			requestQueue
		});
	}

	async _handleFailedRequestFunction({
		request
	}) {
		console.log(`Request ${request.url} failed too many times`);

		await Apify.pushData({
			'#debug': Apify.utils.createRequestDebugInfo(request),
		})

	}


}

module.exports = CrawlerSetup;