# Generic Express GraphQL server with a MongoDB connection

Built with Express and GraphQL.

## For macOS/ Linux installation:

Install dependencies:

    npm i

Start mongo:

    sudo mongod

And in another termainal window:

    mongo

Ensure you have configured the database config to the mongodb server address.

Start by: 

    npm start

Access GraphiQL at:

http://localhost:1337/graphiql




## For Windows installation:

Install dependencies:

    npm i

Start mongo:

    net start MongoDB

Ensure you have configured the database config to the mongodb server address.

Start by: 

    npm start

Access GraphiQL at:

http://localhost:1337/graphiql


Customise your own schemas in the `models/` folder and create your own resolvers.