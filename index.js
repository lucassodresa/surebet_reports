const { getConfig, BRENNO_CONFIG_URL } = require("./config/surebet");
const fs = require("fs");
const axios = require("axios");
const { Events } = require("discord.js");
const cron = require("node-cron");

const { getData } = require("./utils/scraper");
const {
  login,
  sendEmbedMessage,
  CHANNEL_ID,
  generateEmbedMessage,
} = require("./utils/discord");
require("dotenv").config();

const client = login(process.env.BOT_TOKEN);

const execute = async () => {
  try {
    // get surebet raw data
    const { headers, params, pathname, baseURL } = getConfig({
      fullUrl: BRENNO_CONFIG_URL,
    });
    const { data, status } = await axios.get(pathname, {
      headers,
      baseURL,
      params,
    });

    if (status !== 200) throw new Error("Something went wrong in request");

    const db = JSON.parse(fs.readFileSync("./db.json"));

    // extract and treat data
    const bets = getData(data, { baseURL });
    console.log("Status: ", status);
    console.table(bets);

    const betsIdSent = [];

    await Promise.all(
      bets
        .filter(({ id }) => !db.betsIdAlreadySent.includes(id))
        .map((bet) => {
          const { embeds, buttons } = generateEmbedMessage({
            bet,
          });

          betsIdSent.push(bet.id);

          return sendEmbedMessage(client, CHANNEL_ID, embeds, buttons);
        })
    );

    const newDbData = {
      ...db,
      betsIdAlreadySent: [...db.betsIdAlreadySent, ...betsIdSent],
    };

    fs.writeFileSync("./db.json", JSON.stringify(newDbData));
  } catch (error) {
    console.log("Something went wrong");

    console.log(error);
  }
};

client.on(Events.ClientReady, async () => {
  cron.schedule("*/10 * * * * *", () => {
    execute();
  });
});
