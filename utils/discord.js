const {
  Client,
  GatewayIntentBits,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require("discord.js");

const { format } = require("date-fns");

exports.login = (token) => {
  const client = new Client({ intents: [GatewayIntentBits.Guilds] });
  client.login(token);
  return client;
};

exports.sendEmbedMessage = async (client, channelID, embeds, buttons) => {
  const message = await client.channels.cache
    .get(channelID)
    .send({ embeds: [...embeds, ...embeds], components: [...buttons] });
};

exports.generateEmbedMessage = ({ bet }) => {
  const buttons = bet.bookmarkers.map(({ name, event }) => {
    return new ActionRowBuilder().addComponents(
      new ButtonBuilder()
        .setLabel(name)
        .setURL(event.link)
        .setStyle(ButtonStyle.Link)
    );
  });

  const description = bet.bookmarkers
    .map(({ name, odd, market }) => {
      return `**${name}**\nOdd: ${odd}\nMarket: ${market.name} - ${market.description} `;
    })
    .join("\n\n");

  const eventDate = format(
    new Date(bet.bookmarkers[0].datetime),
    "dd/MM/yyyy hh:mm"
  );

  const embed = new EmbedBuilder()
    .setColor("#33AE33")
    .setTitle(
      `**${bet.bookmarkers[0].event.name} - ${bet.profit.toFixed(2)}%**`
    )
    .setDescription(description)
    .setURL(bet.calculatorLink)
    .setAuthor({
      name: "Surebet reports",
      iconURL:
        "https://cdn.discordapp.com/app-icons/1038588927348588556/5d1b93642b5e7ce6c3934da01f8cdcfe.png?size=256",
    })
    .setFields([
      {
        name: `Last Update:`,
        value: bet.lastUpdate,
      },
      {
        name: `Date`,
        value: eventDate,
      },
      {
        name: `Sport`,
        value: bet.bookmarkers[0].sport,
      },
      {
        name: `League`,
        value: bet.bookmarkers[0].event.league,
      },
    ])
    .setThumbnail(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9XkFUpNbFAajmMIMGIFSpELiGl87MYzYaiQ&usqp=CAU"
    )
    .setTimestamp()
    .setFooter({
      text: `Copyright ©${new Date().getFullYear()} | Powered by Surebets reports`,
    });

  return { embeds: [embed], buttons };
};

exports.CHANNEL_ID = "1038193303692263478";
