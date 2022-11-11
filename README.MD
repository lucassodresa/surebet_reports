# SUREBETS REPORTS
This project is an implementation to get discords notifications about surebets filtred defined.

- [x] Receive URL from website and treate it to search based on URL
- [x] Configure discord bot
- [x] Create data adapter to scrape information from website
- [x] Configure database to avoid repetitive messages
- [x] Configure cron job to scrape periodically



## Instalation

#### If you are using WSL run:
`sudo apt install libnss3 libatk-adaptor libcups2 libxkbcommon0 libgtk-3-0 libgbm1`


## TODO


- [x] Config: switch to typescript
- [x] Config: linter and format
- [x] Config: docker 
- [x] Refactor: clean and organize code 
- [x] Bug fix: sent bet with same id and new odd
- [x] Feature: remove messages of invalid bets or finished bets
- [x] Feature: login 1 minutes after request failed with 503 status
- [ ] Feature: scrape bets with multiple pages
- [ ] Feature: scrape group of bets (multiple bets in same event)
  
- [ ] Feature: manage data with database 
- [ ] Feature: create portal to manage bots and bets 