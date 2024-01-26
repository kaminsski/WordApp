const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {

  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err,decoded) => {
      if (err) {
        console.log("Token Doğrulama Hatası:", err, decoded);
      } else {
        req.user = decoded
        next();
      }
    });
  }

  if (!token) {
    return res.status(401).json({
      succeeded: false,
      error: "no token",
    });
  }
};

module.exports = {
  auth,
};
