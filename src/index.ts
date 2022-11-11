// import puppeteer from "puppeteer-core";
import * as dotenv from "dotenv";

import cron from "node-cron";
import { Events } from "discord.js";
import { scrapeAndSendBetsToDiscordChannel } from "./scripts/surebets/scrapeAndSendBetsToDiscordChannel";
import {
  loginDiscordBot,
  CHANNEL_ID,
} from "./scripts/surebets/scrapeAndSendBetsToDiscordChannel/utils/discord";
import { surebetLogin } from "./scripts/surebets/surebetLogin";

dotenv.config();

const discordClient = loginDiscordBot(process.env.BOT_TOKEN);

discordClient.on(Events.ClientReady, async () => {
  let globalCookies: string;

  const loginSurebetsTask = cron.schedule(
    "*/2 * * * *", // At every 2nd minute.
    async () => {
      const { cookies } = await surebetLogin();
      if (cookies) {
        globalCookies = cookies;
        loginSurebetsTask.stop();
        scrapeBetsTasks.start();
      }
    },
    { scheduled: false }
  );

  const scrapeBetsTasks = cron.schedule(
    "*/10 * * * * *", // At every 10th second.
    async () => {
      console.log("Scrapping data...");
      const { success } = await scrapeAndSendBetsToDiscordChannel(
        discordClient,
        CHANNEL_ID,
        globalCookies
      );

      if (!success) {
        scrapeBetsTasks.stop();
        loginSurebetsTask.start();
      }

      console.log("Data scrapped!!\n\n");
    },
    { scheduled: false }
  );

  loginSurebetsTask.start();
});
