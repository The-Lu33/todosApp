import Users from "../models/users.models.js";

class Auth {
  static async login(email, password) {
    try {
      const result = await Users.findOne({
        where: { email },
        attributes: {
          exclude: [password],
        },
      });
      if (result) {
        return password === result.password
          ? { isValid: true, result }
          : { isValid: false };
      }
      return { isValid: false };
    } catch (error) {
      throw error;
    }
  }
}
export default Auth;
