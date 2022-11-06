require("dotenv").config();

const globalConfig = {
  headers: {
    accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,/;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
    "cache-control": "max-age=0",
    "if-none-match": 'W/"b6beb328802be35e5eb8aa65065b2616"',
    "plugin-version": "0.1.0-0.1.28",
    "sec-ch-ua":
      '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    cookie: process.env.AUTHENTICATED_COOKIE,
  },
};

const getConfig = ({ fullUrl }) => {
  const { origin, pathname, searchParams } = new URL(fullUrl);
  const params = Object.fromEntries(searchParams);

  return {
    headers: globalConfig.headers,
    params,
    baseURL: origin,
    pathname,
    fullUrl,
  };
};

module.exports = {
  getConfig,
};
