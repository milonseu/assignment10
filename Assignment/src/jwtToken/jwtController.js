// Task 3: JSON Web Tokens (JWT)
const jsonwebtoken = require('jsonwebtoken');

const secret ="secretkey123";
const userId ="abc123";

exports.generateToken = (userId, secret) => {
    let Token = jsonwebtoken.sign({ userId }, secret, { expiresIn: '1h' });
  return res.send(Token);
};

generateToken(userId,secret)

// Task 4: Express.js Middleware
const jsonwebtoken = require('jsonwebtoken');
exports.authenticate = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  
    try {
      const decoded = jsonwebtoken.verify(token, "secretkey123");
      req.userId = decoded.userId;
      next();
    } catch (err) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  };

  // 4: authenticate token
app.get('/authinticated',authenticate,(req,res)=>{
  res.status(200).json({
      message:"authentication success"
  })
})



 