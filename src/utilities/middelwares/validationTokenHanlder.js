/**
 * Modules
 */
const Boom = require("boom");

function tokenHandler(req, res, next) {
  const { authorization } = req.headers;
  const bearer = authorization || false;

  if (!bearer || bearer.split(" ")[0] !== "Bearer") {
    const {
      output: { statusCode, payload }
    } = Boom.unauthorized("Bad authoriation header");
    res.status(statusCode).json(payload);
    return;
  }
  next();
}

module.exports = tokenHandler;