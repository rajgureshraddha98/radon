const express = require('express');
const lodash = require('lodash')
const myHelper = require('../util/helper')
const underscore = require('underscore')

const router = express.Router();

router.get('/test-me', function(req, res) {

    const nameMoth = ["jan", "feb", "march", "april", "may", "june", "july", "august", "sept", "oct", "nov", "disember"]
    const chunk = lodash.chunk(nameMoth, 3)
    console.log(chunk)


    const oddNo = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    const tail = lodash.tail(oddNo)
    console.log(tail)

    const arr1 = [1, 2, 3]
    const arr2 = [1, 3, 4]
    const arr3 = [1, 4, 5]
    const arr4 = [1, 5, 6]
    const arr5 = [1, 6, 7]

    const mixarr = lodash.union(arr1, arr2, arr3, arr4, arr5)
    console.log(mixarr)


    const movies = [
        ["horror", "the shining"],
        ["drama", "titanic"],
        ["thrill", "comedy"]
    ]
    const movie = lodash.fromPairs(movies)
    console.log(movie)
    res.send('Hello there!')







    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha', 'Akash', 'Pritesh'])
    console.log('The first element received from underscope function is ' + firstElement)
    res.send('My first ever api!')
});

router.get('/hello', function(req, res) {

    res.send('Hello there!')
});

router.get('/candidates', function(req, res) {
    console.log('Query paramters for this request are ' + JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is ' + state)
    console.log('Gender is ' + gender)
    console.log('District is ' + district)
    let candidates = ['Akash', 'Suman']
    res.send(candidates)
})

router.get('/candidates/:canidatesName', function(req, res) {
    console.log('The request objects is ' + JSON.stringify(req.params))
    console.log('Candidates name is ' + req.params.canidatesName)
    res.send('Done')
})


module.exports = router;
// adding this comment for no reason