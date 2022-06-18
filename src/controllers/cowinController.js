let axios = require("axios")


let getStates = async function(req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function(req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function(req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function(req, res) {
    try {
        let blahhh = req.body

        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getSession = async function(req, res) {
    try {
        let id = req.query.district_id;
        let date = req.query.date;


        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${id}&date=${date}`,

        }

        let result = await axios(options)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
let getWeather = async function(req, res) {
    try {
        
        let appid = req.query.appid
        let q = req.query.q

        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?appid=${appid}&q=${q}`

        }

        let result = await axios(options)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getSortedCities = async function(req, res) {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"];
        let cityObjArray = []
        for (let i = 0; i < cities.length; i++) {
            let obj = { city: cities[i] }






            let result = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=078885e88d877c95961c5b8623cf8209`)
            obj.temp = result.data.main.temp
            cityObjArray.push(obj)

        }

        let sorted = cityObjArray.sort(function(a, b) { return a.temp - b.temp })
        res.status(200).send({ msg: sorted, status: true })
    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }

}
let getMeme = async function(req, res) {
    try {


        let id = req.query.template_id;
        let username = req.query.username;
        let pwd =  req.query.password;
        let text0 = req.query.text0;
        let text1 = req.query.text1;
    
        let options = {
            method : "post",
            url : `https://api.imgflip.com/caption_image?template_id=${id}&username=${username}&password=${pwd}&text0=${text0}&text1=${text1}`,
            data:  id, username, pwd, text0, text1
            
        }
        let result = await axios(options)
       let obj = {};
       obj.url = result.data.data.url
       obj.page_url = result.data.data.page_url;
      res.status(200).send({data : obj})
    
        
    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getSession = getSession
module.exports.getWeather = getWeather
module.exports.getSortedCities = getSortedCities
module.exports.getMeme = getMeme