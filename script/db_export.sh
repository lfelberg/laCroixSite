sqlite3 -header -csv db/development.sqlite3 "SELECT * FROM la_croixes" > db/data/la_croixes.csv
sqlite3 -header -csv db/development.sqlite3 "SELECT * FROM la_croix_flavors" > db/data/la_croix_flavors.csv
