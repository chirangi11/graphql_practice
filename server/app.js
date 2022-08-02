const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const mongoose = require("mongoose");
const cors = require('cors')
const schema = require('./schema/schema')

const app = express()

//allow cross-origin requests
app.use(cors())

mongoose.connect('mongodb://localhost:27017/bookdb',
    {
        useNewUrlParser: true,
        // useFindAndModify: false,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(5001, () => {
    console.log("listening on 5001 port");
})