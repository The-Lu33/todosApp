import Auth from "../services/auth.services.js";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config();
export const userLogin = async (req, res) => {
  const { body } = req;
  try {
    const { email, password } = body;
    const response = await Auth.login(email, password);

    if (response.result) {
      const data = {
        id: response.result.id,
        email: response.result.email,
        username: response.result.username,
      };
      const token = jwt.sign(
        { data },
        process.env.JWT_SECRET,
        { algorithm: "HS512" },
        {
          expiresIn: "24h",
        }
      );
      data.token = token;
      res.json(data);
    } else {
      res.status(401).json({ message: "invalid credentials" });
    }
  } catch (error) {}
};
