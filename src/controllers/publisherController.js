const publisherModel= require("../models/publisherModel")

const createPublisher= async function (req, res) {
    let Publisher = req.body
    let publisherCreated = await publisherModel.create(Publisher)
    console.log(publisherCreated)
    res.send({data: publisherCreated})
}

const getpublishersData= async function (req, res) {
    let publishers = await publisherModel.find()
    res.send({data: publishers})
}

module.exports.createPublisher= createPublisher
module.exports.getPublishersData= getpublishersData 