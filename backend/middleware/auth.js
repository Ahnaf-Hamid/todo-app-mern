import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  try {
    const {token} = req.headers

    if(!token){
        return res.json({success:false,msg:'Not authorized'})
    }
    
    const tokenDecode = jwt.verify(token,process.env.JWT_SECRET)
    req.userId = tokenDecode._id
    next()
 
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: error.message });
  }
};

export default authMiddleware
