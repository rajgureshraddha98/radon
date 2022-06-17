const jwt = require("jsonwebtoken");

const mid = async function (req, res, next) {
try{
let token = req.headers["x-Auth-token"];
if (!token) token = req.headers["x-auth-token"];


if (!token) return res.send({ status: false, msg: "token must be present" });

console.log(token);


let decodedToken = jwt.verify(token, "functionup-radon");
if (!decodedToken)
  return res.status(400).send({ status: false, msg: "token is invalid" });
}
catch(err){res.status(500).send({msg:"token is invalid", error:err.message})}


  next()
}  

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const Authorise = async function (req, res, next) {
try{

  let token = req.headers["x-auth-token"]
  if(!token) return res.send({status: false, msg: "token must be present in the request header"})

  let decodedToken = jwt.verify(token, 'functionup-radon')
  if(!decodedToken)
  return res.status(400).send({ status: false, msg: "token is invalid" });
}catch(err){res.status(500).send({msg:"token is invalid", error:err.message})}

  //userId for which the request is made. In this case message to be posted.
 // let userToBeModified = req.params.userId
  //userId for the logged-in user
 // let userLoggedIn = decodedToken.userId

  //userId comparision to check if the logged-in user is requesting for their own data
 // if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})


next();

}


module.exports.mid = mid;
module.exports.Authorise = Authorise;