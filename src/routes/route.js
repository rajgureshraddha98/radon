const express = require('express');
const router = express.Router();
let players = [{
        "name": "manish",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "jalna",
        "sports": ["swimming"]
    },

    {
        "name": "gopal",
        "dob": "11/12/1992",
        "gender": "male",
        "city": "pune",
        "sports": ["soccer"]

    },
    {

        "name": "lokesh",
        "dob": "1/1/1990",
        "gender": "male",
        "city": "mumbai",
        "sports": ["swimming"]
    }
];

router.post("/players", function(req, res) {

    const d = req.body
    players.push(d)
    console.log(players)

    res.send({ data: players })
});

module.exports = router;