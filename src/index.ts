import * as dotenv from "dotenv";
import cron from "node-cron";
import { Events } from "discord.js";
import { scrapeAndSendBetsToDiscordChannel } from "./scripts/surebets/scrapeAndSendBetsToDiscordChannel";
import {
  loginDiscordBot,
  CHANNEL_ID,
} from "./scripts/surebets/scrapeAndSendBetsToDiscordChannel/utils/discord";

dotenv.config();

const discordClient = loginDiscordBot(process.env.BOT_TOKEN);

discordClient.on(Events.ClientReady, async () => {
  cron.schedule("*/10 * * * * *", () => {
    scrapeAndSendBetsToDiscordChannel(discordClient, CHANNEL_ID);
  });
});
