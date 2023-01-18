import Categories from "../models/categories.models.js";
import Todos from "../models/todos.models.js";
import TodosCategories from "../models/todosCategories.models.js";

class TodosServices {
  static async getAll() {
    try {
      const result = await Todos.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getById(id) {
    try {
      const result = await Todos.findByPk(id);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(todo) {
    try {
      const result = await Todos.create(todo);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async update(id, field) {
    try {
      const result = await Todos.update(field, {
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      const result = await Todos.destroy({
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getTodoCategories(id) {
    try {
      const result = await Todos.findOne({
        where: { id },
        include: {
          model: TodosCategories,
          as: "categories",
          attributes: ["id"],
          include: {
            model: Categories,
            as: "category"
          }
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}
export default TodosServices;
