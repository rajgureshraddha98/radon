const printDate = function() {

    const shalmali = new Date()
    console.log(shalmali);
}

const printMonth = function() {
    const shalmali = new Date()
    console.log(shalmali.getMonth());
}
const getBatchInfo = function() {
    const shalmali = new Date()
    console.log("Roadon, W3D3, the topic for today is Nodejs module system");
}
module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo