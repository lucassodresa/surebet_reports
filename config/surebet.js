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
    cookie:
      "uu=f18b393a-2579-4576-a432-9a2f6df369a1; _ga=GA1.2.1817113757.1664734308; order_surebets_index=profit_desc; _gid=GA1.2.674842668.1665451171; order_valuebets_index=overvalue_desc; ab=272; timezoneOffset=180; cf_chl_2=7a1769778cbe09c; cf_chl_prog=x13; cf_clearance=7a6e8c6139852a7e97b29f6812651bbcb30c937a-1667741811-0-150; sel%3Asurebets=d0eff98db2c933ca1501456724e4b85b; remember_user_token=BAhbCFsGaQOjeQNJIhkzQ1BEOWRReUUzZldrWlpkbnVHYwY6BkVUSSIXMTY2Nzc0MjI1MS42NzIwNzQ4BjsARg%3D%3D--50204667316f5cf5dc9dc0932181f4e73e95ca1d; sstoken=27795736-1a0c25963fc8f00c178645d465d740de784d41ef-27795737-020643a2e68e75f6a17a9949562475f612d7baf1; au-surebet=off; stoken=27795737-f59d5d9f77a8442364ec4d8dc591c92bcad057ee; ref=ZFFFaXdsYThtQW5sdGJEbVRZVUwxdz09LS1sZGtFbjBlb3VYM3JNcC9pUjJPbmRnPT0%3D--64fdb5398d052621787bafc4497e58e06623ff6a; br=S1pEdkFqeGhHRmJwNnI1bkx6c1RtRDZ1UHFEQXVaRGdiNHVLVmZicVdYRlpCSFdoajRHcDhNTDk2VEMyT1ZHVm5SMVVZMjhUdEFXU3B5dDUzcUhVa0JnLzIzeGlMcDRSVm1yMllucVh5SEErZlE5NjBGT2V4NUtCVVgwY0xRQnUrZ2NraXF5TWh0QU5RK2RqZmFrNUFVRnBKNDBSeStYb1BjY0l6Tld1T1dtVVJ2dWh3TU9mY2I0eU1YRjN2dVVLcm5Fd3l5WFVOZWw4ZjFQQ3Rad2VGQlVNaVhSWEJQVStSZXkxbFl3aEJONEJuLzJtc0R4OERxa3kreDBDWWVDU3Rlb3hyTEdtcVlraHlwa3pUVjAwdkVXU0ZVZDhsb2U0S09XU0RWdlZTcEE9LS1DcnNCczdqY1ljRVF6ZENvUVZJQzdnPT0%3D--4be3fd8bc43db369433cf710059b82e3d7bd0f27; _sp5=ZlNjcCtHS3dXWWRkcGpYZE1pN2Y2N3dTcGZFb3ErWGtZM2Q3VHdudDVCTWg1dUE1Z1Vxbml5Sml2L0ZYclZVTFc5ODNvdUF1UkozZTlXbGhSVW9JRGFrWHdkdWN4NEpURTlDcGd0bGFvVVJ3ZTA4Rk51a21iQ1BzYmlxNnBpMlRrcUNRK043R3hMOFNGVVcvSmltdUo0OTdqZWVDNFdaQ1k2dXZmOU9mOU5OSGZ3YThyN29HY3Q2THJOSHFCSXVQZ3MrUVNOc3YvNnJXeXJ2UXY5RkNxV3VTSEtHaTRRTG41TmtkNUlIbDFobzRtUXo0KzZwSDlSbGJaL0VlWW1PVy9QSnNvS1d1Qysva0NLWElwM2NaY3J4cWNpYnBieXdkekhwTGhEdzc2M2pMTE9LVmdlR0RKTWhJTk5jNGtoMGdzOUVGbXJUT3hRczNDdGhHOGpHSmRRPT0tLXdGVUVod241THBYbVZ2ZFFDNkJtSkE9PQ%3D%3D--dce70d63a7fdf63c884eb7edf80f5ec75f63949a",
  },
};

const BRENNO_CONFIG_URL =
  "https://pt.surebet.com/surebets?utf8=%E2%9C%93&filter%5Bselected%5D%5B%5D=&filter%5Bselected%5D%5B%5D=33860480&filter%5Bsave%5D=&filter%5Bcurrent_id%5D=33860480&selector%5Border%5D=profit_desc&selector%5Boutcomes%5D%5B%5D=&selector%5Boutcomes%5D%5B%5D=2&selector%5Bmin_profit%5D=2.0&selector%5Bmax_profit%5D=&selector%5Bmin_roi%5D=&selector%5Bmax_roi%5D=&selector%5Bsettled_in%5D=57600&selector%5Bbookies_settings%5D=0%3A67%3A%3A%3B0%3A71%3A%3A%3B0%3A66%3A%3A%3B0%3A74%3A%3A%3B0%3A179%3A%3A%3B0%3A73%3A%3A%3B0%3A145%3A%3A%3B0%3A208%3A%3A%3B0%3A70%3A%3A%3B0%3A111%3A%3A%3B0%3A129%3A%3A%3B0%3A123%3A%3A%3B0%3A21%3A%3A%3B4%3A26%3A%3A%3B0%3A136%3A%3A%3B0%3A147%3A%3A%3B0%3A199%3A%3A%3B0%3A148%3A%3A%3B0%3A23%3A%3A%3B0%3A201%3A%3A%3B0%3A197%3A%3A%3B0%3A200%3A%3A%3B0%3A0%3A%3A%3B0%3A32%3A%3A%3B0%3A65%3A%3A%3B0%3A158%3A%3A%3B0%3A29%3A%3A%3B0%3A10%3A%3A%3B0%3A45%3A%3A%3B0%3A58%3A%3A%3B0%3A162%3A%3A%3B0%3A177%3A%3A%3B0%3A205%3A%3A%3B0%3A14%3A%3A%3B0%3A194%3A%3A%3B0%3A11%3A%3A%3B0%3A185%3A%3A%3B0%3A38%3A%3A%3B0%3A144%3A%3A%3B0%3A195%3A%3A%3B0%3A55%3A%3A%3B0%3A184%3A%3A%3B0%3A33%3A%3A%3B0%3A173%3A%3A%3B0%3A122%3A%3A%3B0%3A49%3A%3A%3B0%3A212%3A%3A%3B0%3A62%3A%3A%3B0%3A12%3A%3A%3B0%3A190%3A%3A%3B0%3A46%3A%3A%3B0%3A207%3A%3A%3B0%3A143%3A%3A%3B0%3A114%3A%3A%3B0%3A132%3A%3A%3B0%3A24%3A%3A%3B4%3A85%3A%3A%3B0%3A72%3A%3A%3B0%3A151%3A%3A%3B0%3A126%3A%3A%3B0%3A211%3A%3A%3B0%3A142%3A%3A%3B0%3A133%3A%3A%3B0%3A106%3A%3A%3B0%3A5%3A%3A%3B0%3A6%3A%3A%3B0%3A172%3A%3A%3B0%3A187%3A%3A%3B0%3A4%3A%3A%3B0%3A180%3A%3A%3B0%3A210%3A%3A%3B0%3A30%3A%3A%3B0%3A15%3A%3A%3B0%3A209%3A%3A%3B0%3A125%3A%3A%3B0%3A50%3A%3A%3B0%3A9%3A%3A%3B0%3A176%3A%3A%3B0%3A175%3A%3A%3B0%3A41%3A%3A%3B0%3A127%3A%3A%3B0%3A130%3A%3A%3B0%3A3%3A%3A%3B0%3A8%3A%3A%3B0%3A115%3A%3A%3B0%3A86%3A%3A%3B0%3A163%3A%3A%3B0%3A121%3A%3A%3B0%3A206%3A%3A%3B0%3A164%3A%3A%3B0%3A159%3A%3A%3B4%3A161%3A%3A%3B0%3A39%3A%3A%3B0%3A171%3A%3A%3B0%3A31%3A%3A%3B0%3A51%3A%3A%3B0%3A178%3A%3A%3B0%3A2%3A%3A%3B0%3A156%3A%3A%3B0%3A140%3A%3A%3B0%3A7%3A%3A%3B0%3A186%3A%3A%3B0%3A47%3A%3A%3B0%3A141%3A%3A%3B0%3A120%3A%3A%3B0%3A198%3A%3A%3B0%3A25%3A%3A%3B0%3A69%3A%3A%3B0%3A137%3A%3A%3B0%3A116%3A%3A%3B0%3A16%3A%3A%3B0%3A204%3A%3A%3B0%3A160%3A%3A%3B0%3A170%3A%3A%3B0%3A188%3A%3A%3B0%3A183%3A%3A%3B0%3A189%3A%3A%3B0%3A43%3A%3A%3B0%3A196%3A%3A%3B0%3A181%3A%3A%3B0%3A18%3A%3A%3B0%3A59%3A%3A%3B0%3A213%3A%3A%3B0%3A83%3A%3A%3B0%3A117%3A%3A%3B0%3A202%3A%3A%3B0%3A146%3A%3A%3B0%3A124%3A%3A%3B0%3A17%3A%3A%3B0%3A107%3A%3A%3B0%3A53%3A%3A%3B0%3A152%3A%3A%3B0%3A28%3A%3A%3B0%3A44%3A%3A%3B0%3A193%3A%3A%3B0%3A203%3A%3A%3B0%3A27%3A%3A&selector%5Bexclude_sports_ids_str%5D=-&selector%5Bextra_filters%5D=&commit=Filtrar&narrow=";

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
  BRENNO_CONFIG_URL,
};