const jwt = require('jsonwebtoken');
const authMiddleware = (req,res,next) =>{
    try{
        const token = req.header('Authorization').replace('Bearer ','');
        const decryptedToken = jwt.verify(token,process.env.JWT_SECRET);
        console.log("decryptedToken:",decryptedToken);
        if(decryptedToken && decryptedToken.userId){
            req.userId = decryptedToken.userId;
                    next();
            }else{
                res.status(403).json({
                    success : false,
                    statusCode: 403,
                    message : "Invalid Token"
    
                });
            }
        
    }catch(err){
        console.log("error in authmiddleware");
        res.status(401).json({
            success :false,
            statusCode:401,
            message : "not Authorized"
        });
    }
}
    
module.exports = authMiddleware;