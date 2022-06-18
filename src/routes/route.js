const express = require('express');
const router = express.Router();
const CowinController = require("../controllers/cowinController")



router.get("/test-me", function(req, res) {
    res.send("My first ever api!")
})


router.get("/getStates", CowinController.getStates)
router.get("/getDistrictsByStateId/:stateId", CowinController.getDistricts)
router.get("/getByPin", CowinController.getByPin)

router.post("/getOtp", CowinController.getOtp)
router.get("/getSessionByDistrictId", CowinController.getSession)
router.get("/Weather", CowinController.getWeather)
router.get("/SortedCities", CowinController.getSortedCities)
router.post("/getMeme", CowinController.getMeme)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;