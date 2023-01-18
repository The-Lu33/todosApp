import Todos from "../models/todos.models.js";
import Users from "../models/users.models.js";

class UserServices {
  static async getAll() {
    try {
      const result = await Users.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getById(id) {
    try {
      const result = await Users.findByPk(id);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async CreateUser(user) {
    try {
      const result = await Users.create(user);
      return result
    } catch (error) {
        throw(error)
    }
  }
  static async getwhithThaks(id){
    try {
      const result = await Users.findOne({
        where:{id},
        attributes:['username'],
        include:{
          model: Todos,
          as:'task'
        }
      })
      return result
    } catch (error) {
      throw(error)
    }
  }
}

export default UserServices;
