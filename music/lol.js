const Discord = require('discord.js');
const { Kayn, REGIONS } = require('kayn');
const kayn = Kayn('RGAPI-a6910a2e-3b93-410a-8b2f-9030d5c96b03')({
    region: REGIONS.BRAZIL,
    apiURLPrefix: 'https://%s.api.riotgames.com',
    locale: 'en_US',
    debugOptions: {
        isEnabled: true,
        showKey: false,
    },
    requestOptions: {
        shouldRetry: true,
        numberOfRetriesBeforeAbort: 3,
        delayBeforeRetry: 1000,
        burst: false,
        shouldExitOn403: false,
    },
    cacheOptions: {
        cache: null,
        timeToLives: {
            useDefault: false,
            byGroup: {},
            byMethod: {},
        },
    },
});

module.exports.run = async (client, message, args) => {

    kayn.Summoner.by.name('MastêrYi')
    .then(summoner => doSomething(summoner.summonerLevel))
    .then(console.log)
    .catch(error => console.error(error))
}