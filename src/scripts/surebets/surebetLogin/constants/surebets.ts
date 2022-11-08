import * as dotenv from "dotenv";
import qs from "qs";
dotenv.config();

export const globalConfig = {
  url: "https://pt.surebet.com/users/sign_in",
  headers: {
    authority: "pt.surebet.com",
    accept:
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "en-US,en;q=0.9",
    "cache-control": "max-age=0",
    "content-type": "application/x-www-form-urlencoded",
    cookie:
      "cf_chl_2=6d787f5fee94160; cf_chl_prog=x15; cf_clearance=5c8ec9b0a8ae0afd2dfc9330556b98e7afdab451-1667918564-0-150; uu=7457c938-607d-425e-9f86-fd20aec79424; ab=779; sel%3Asurebets=d0eff98db2c933ca1501456724e4b85b; timezoneOffset=0; _ga=GA1.2.477440484.1667918583; _gid=GA1.2.410747091.1667918583; sstoken=undefined-27798645-2054a25520705e005829ba0cdad455271c5ceec6; ref=VkV0Uk1vVGJsWEN0b09ySEhiRk1RUT09LS01RzVuQTlQUW42a0dSUUpMUkx5TytnPT0%3D--ce9b507fa9a43fbd33bc87ab318a62013e33ff85; _sp5=Yk9TTEFSZ0htMW5oc0VkWWRvSzZBZEhUWHlTOEgyTkk1QUZnZ1UwNENHT3JmKy92WmdYNWhkWEVwU1daRTVyRDdWRGJrMXFZT2JSM2pScUhaQkg1d3lMQWpIZkpsU2RiZko2VnB4TThnQlVsM0tiZDQ5cEE4M0haeWVhTTYwYVpyTFI1SGNFRTRYbWRXNkY5UnJ5SU1nVU14SGp6L3lvUWlpTzVOYWlKNkZERTRuNmVtdG1xUEpWN29QNHl3MVZFLS1nTXI4WlBSMUNQam1QVzdnd1JHak1nPT0%3D--580840ba0fc0c53b4923f1b2d5d9fd386245e704; _gat_gtag_UA_1803143_12=1; _sp5=aHpacmxaME1XcFJBQnBKcCsyZ2ZKeDBkdWV6MTA5OUs0Z0JaMzd6ck1STXZ1eWxIUGR1WCtYVEgycUZWbGpOYlJqMlVHUUJOc2NPT1FJRndQT1dTVE55M2F4L05TTmJtMU9mckFhUy9rekhHYnJvMDhZYU43NVpwUUhOZmJiT2FWS0FhWXhSc1ZvY3p2MmlCaDk3YkNJYkl0Mm81V0pVN05GZ3M3S2MwTUcyWklmM2Q0ZTlBcVhnRy83MTJrM05VYWthUXNhTnVkZnpobXA5eEdjd2JlenlhdXFpdHl3dXZ4cW9yQ2xkMUVKayt0eFlmVGtNTmRkY1YrU0NJUDh5ZzZnSEtaOTl5REE0WmVGZnljOFFrUkR6U1RwQ2c4eVl1eXRuZWY3RE5qSVdScndPNS9HaktrUlZkcUYvaHlXTTVxK2VGeGhxalFJMDF5MU9aZTlZaTFRPT0tLWsvUG9YTGJUdkhOc3VHZDl0eFBKSEE9PQ%3D%3D--08c32d5a0ecb15d424d24a0ae6957ae93cc46adb; order_surebets_index=profit; ref=SVNGWUhwK3h1MU4wbTFmS1JhSG0xQT09LS1iSFNHL2lXcUZ1ejVKQW9xM2FZUmxBPT0%3D--76352036afe73702dfa0c2ff2a2b039edc023934; remember_user_token=BAhbCFsGaQPJhgNJIhlaOXlCaHlrUlEycUt3SGR1cDdGNgY6BkVUSSIXMTY2NzkxODcxMi4zMjg3OTA0BjsARg%3D%3D--a7604c4c9f8692150661e6f74fdf0a51a4e1c61e; stoken=27798645-ea680dbb74cc1bb74dbaf7935c4bad2f30edf20c; uu=7457c938-607d-425e-9f86-fd20aec79424; br=T2JVVkNqa2NUb3F6aWx3RGl3YU1KcDJ4UzhBdFA2MFNOU3FnZXJvejdmdzdaVVZQajYvUU9VQ3hrU1M5Q05tZ0JjK3hwaHYrNVlUZVlQQURWUVA5MXNaRjNGT05URmMvZFlmamFKL3drZ1pzQjFWTWVnVEc0NndSckQyWFlaa3FkbzFTS05DUW1ZZVVSc2NiUkw3L0lvbU85TTMzYklMdHlHSXpkcWN1dG1uVW1DbUtEcVdUcHQycE9wd2h5TzAxNVgvd3laZEdwNFNYMXJVc292bkRmSEg1VXRJZGpqbVpiQ3dSRWNXQkpHZz0tLWQwNmMzUFdRMytya2pvUlMvY2czZVE9PQ%3D%3D--4f53817f66546cddf7891b24ff0a9e7f442bdce4",
    origin: "https://pt.surebet.com",
    referer: "https://pt.surebet.com/users/sign_in",
    "sec-ch-ua":
      '"Google Chrome";v="107", "Chromium";v="107", "Not=A?Brand";v="24"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "same-origin",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36",
  },
  body: qs.stringify({
    utf8: "✓",
    "user[email]": process.env.LOGIN_EMAIL,
    "user[password]": process.env.LOGIN_PASSWORD,
    "user[remember_me]": "1",
    commit: "Login",
  }),
};
