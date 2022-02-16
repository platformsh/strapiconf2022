1. Getting started
    - download the CLI
    - sign up for a free trial account
    - create an empty project
    - download this repository

2. Overview of Strapi
    - run locally
    - basics of its structure
    - view the api

3. Overview of Platform.sh
    - environment variables
    - configuration files present for single app sqlite deployment
4. Push the project
    - sqlite db
    - production environment
    - migrate .tmp data
    - create admin credentials
    - view the api/dashboard


5. Branch
    - branch via the console to see the exact copy
    - reusable build
6. Switch services
    - create branch locally
    - update services.yaml
    - update database.js

    - verify migration (platform sql --relationship mysqldatabse -e pr-1 < api/data.sql)
7. Merge
    - re-migrate data
    - verify production environment
    
8. Add frontend
    -



Tests: https://testcafe.io/documentation/402635/getting-started


- Open a single tunnel
- export PLATFORM_RELATIONSHIPS="$(platform tunnel:info -e pr-1 --encode)"
- sqlite3mysql -f data.db -d main -u mysql -P 30000 -S -X -p
    - https://stackoverflow.com/questions/18671/quick-easy-way-to-migrate-sqlite3-to-mysql/32243979#32243979
- platform mount:upload --mount public/uploads --source public/uploads

- https://github.com/techouse/sqlite3-to-mysql