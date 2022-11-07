import { Client, TextChannel } from "discord.js";
import { getBetsPage } from "./steps/getBetsPage";
import { generateEmbedMessage, sendEmbedMessage } from "./utils/discord";
import { getBetsFromPage } from "./utils/scraper";

export const scrapeAndSendBetsToDiscordChannel = async (
  client: Client,
  channelID: string
) => {
  try {
    // TODO: treat pagination cases

    // get surebet raw data
    const { htmlPageWithBets, baseURL } = await getBetsPage();

    // extract and treat data
    const bets = getBetsFromPage({
      baseURL,
      htmlString: htmlPageWithBets,
    });
    const channel = client.channels.cache.get(channelID) as TextChannel;
    const messages = await channel.messages.fetch({ limit: 100 });
    const betsIdsToSend = new Set(bets.map(({ id }) => id));
    const betMessagesToDelete = [];

    messages.forEach((message) => {
      const { value: betMessageID } = message.embeds[0].fields.find(
        ({ name }) => name === "id"
      );

      const { value: betMessageProfit } = message.embeds[0].fields.find(
        ({ name }) => name === "profit"
      );

      if (betsIdsToSend.has(betMessageID)) {
        const bet = bets.find(({ id }) => {
          return id === betMessageID;
        });

        if (bet.profit.toFixed(2) === betMessageProfit) {
          betsIdsToSend.delete(betMessageID);
        } else {
          console.log("Profit changed");
          betMessagesToDelete.push(message);
        }
      } else {
        betMessagesToDelete.push(message);
      }
    });

    const betsToSend = bets.filter(({ id }) => betsIdsToSend.has(id));

    await Promise.all([
      ...betsToSend.map((bet) => {
        const { embeds, buttons } = generateEmbedMessage({
          bet,
        });

        return sendEmbedMessage(client, channelID, embeds, buttons);
      }),
      channel.bulkDelete(betMessagesToDelete),
    ]);

    console.log("\n\n## BETS SENT ##");
    betsToSend.length
      ? console.table(betsToSend)
      : console.log("No bets to send");
  } catch (error) {
    console.log("Something went wrong");

    console.log(error);
  }
};
