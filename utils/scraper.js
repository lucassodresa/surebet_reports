const cheerio = require("cheerio");

const getData = (htmlString, { baseURL }) => {
  const $ = cheerio.load(htmlString);
  const betsTable = $(".surebet_record");

  const bets = betsTable.toArray().map((bet) => {
    const betSelector = $(bet);

    const id = betSelector.attr("id");
    const profit = Number(betSelector.find(".profit").attr("data-profit"));
    const lastUpdate = betSelector.find(".age").text();
    const calculatorPath = betSelector.find(".btn-site").attr("href");
    const calculatorLink = new URL(calculatorPath, baseURL).href;

    const bookmarkers = betSelector
      .find("tr")
      .slice(0, -1)
      .map((_, bookmarker) => {
        const bookmarkerSelector = $(bookmarker);
        const name = bookmarkerSelector.find(".booker a").text();
        const sport = bookmarkerSelector.find(".booker > span.minor").text();
        const datetime = Number(
          bookmarkerSelector.find(".time").attr("data-utc")
        );

        const eventName = bookmarkerSelector.find(".event a").text();
        const eventPath = bookmarkerSelector.find(".event a").attr("href");

        const eventLink = new URL(eventPath, baseURL).href;
        const eventLeague = bookmarkerSelector.find(".event span").text();

        const event = {
          name: eventName,
          link: eventLink,
          league: eventLeague,
        };

        const marketName = bookmarkerSelector.find(".coeff").text();
        const marketDescription = bookmarkerSelector
          .find(".coeff abbr")
          .attr("title");

        //review market name eg. '21-2 - start'
        const market = { name: marketName, description: marketDescription };
        const odd = Number(bookmarkerSelector.find(".value a").text());

        return { name, sport, datetime, event, market, odd };
      })
      .toArray();

    const data = {
      id,
      profit,
      lastUpdate,
      calculatorLink,
      bookmarkers,
    };

    return data;
  });

  return bets;
};

module.exports = { getData };
