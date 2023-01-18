import TodosServices from "../services/todos.services.js";

export const getAllTodos = async (req, res) => {
  try {
    const result = await TodosServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const getTodoById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TodosServices.getById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const createTodo = async (req, res) => {
  try {
    const newTodo = req.body;
    const result = await TodosServices.create(newTodo);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const field = req.body;
    const result = await TodosServices.update(id, field);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TodosServices.delete(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const getTodoCategories = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TodosServices.getTodoCategories(id);
    res.json({
      message: "Enviando categorias de las tareas",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      error: error.messages,
      details: error.stack,
    });
  }
};
