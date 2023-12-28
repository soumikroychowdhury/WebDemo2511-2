const jwt=require('jsonwebtoken');
const SECRET='';

const authenticateJwt=(req,res,next)=>{
    const authHeader=req.headers.authorization;
    if(authHeader){
        const token=authHeader.split(' ')[1];
        jwt.verify(token,SECRET,(err,user)=>{
            if(err){
                return res.status(403).json({message: 'Forbidden'});
            }
            req.user=user;
            next();
        });
    }
    else{
        res.status(401).json({message: 'Unauthorized'});
    }
};
module.exports={authenticateJwt,SECRET}