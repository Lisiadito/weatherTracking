# Weather Tracking

Build with:
- Typescript
- Typeorm
- Express
- DayJS
- Parcel

A little express API which allows authorized users to add weather data into a sqlite database.
**This is not supposed to run on the internet. Please only run in a local network since the Database is not password protected.**

This is a boilerplate project which can easily be extended.

To get started run:

- `yarn`
- `yarn global add parcel-bundler`
- `yarn typeorm:run`
- `yarn watch`
- `yarn srv` 
- add a User via the endpoint `POST` to `/user/add`
- enable the user manually in the DB
- add weather data via `POST` to `/weather/add`

If you change the typeorm entities or add new once make sure to generate a migration for it by running `yarn typeorm:generate`

I will use it to track the weather over the year and use that data for future gardening projects.

**Future Plans:**

- add cli to allow more comfortable adding of weather data
- add VueJS Frontend with ChartJS to display the data  