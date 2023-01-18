import { verify } from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();
export const authMiddleware = (req, res, next) => {
  let { authorization: token } = req.headers;
  token = token.replace("Bearer ", "");
  console.log(token);
  verify(
    token,
    process.env.JWT_SECRET,
    { algorithm: "HS512" },
    (err, decoded) => {
      if (err) {
        res.status(400).json({
          error: "invalid token",
          message: "token no valido ",
        });
      } else {
        console.log(decoded);
        next();
      }
    }
  );
};
