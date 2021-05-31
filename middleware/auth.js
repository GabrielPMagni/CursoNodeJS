const jwt = require("jsonwebtoken");
require("dotenv/config");

const auth = async (req, res, next) => {
  const token_header = req.headers.auth;
  if (!token_header) return res.status(401).send({ error: "Token não enviado!" });
  try {
    const verified = jwt.verify(token_header, process.env.JWT_PWD);
    if (verified) {
      res.locals.auth_data = verified;
      return next();
    }
  } catch (err) {
    return res.status(401).send({ error: "Token Inválido" });
  }
};

module.exports = auth;
