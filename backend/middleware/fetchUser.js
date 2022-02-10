var jwt = require('jsonwebtoken');
const JWT_KEY="ohknoprob"

const fetchUser=async(req,res,next)=>{
    const token=req.header('auth-token')
    if(!token)
    {
        res.status(401).send({error:"Authtoken fail 1"})
    }
    try{
        
        const data= await jwt.verify(token,JWT_KEY);
        req.user=data.user;
        next();  
    }catch(error)
    {
        res.status(401).send({error:"Authtoken fail 2"})
    }
  
}
module.exports=fetchUser;