# Web application built upon omdbapi.com movie database api
### project kick off environment
- npm 6.10.1
- node v10.16.0
- Angular CLI version 8.3.2
## Running development server
1. run `npm install`
2. run `ng serve --open`
## Building production version
1. run `npm install`
2. build production version
   2.1 run `ng build --prod` in case of placing project straight into domain
   2.2 run `ng build --prod --base-href="./"` in case project will be parked not straight into domain (eg. http://domain.com/movie_db_app/)
