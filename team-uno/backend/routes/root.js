const express = require ("express");
const router = express.Router();

router.get("/", (request, response) => {
    response.send("Hello world from within a route");
});

module.exports = router;

/*<html>
    <head>
        <title>Hello</title>
    </head>
    <body>
        <p>Hello <%= name %></p>
    </body>
</html>
*/