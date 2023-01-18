import UserServices from "../services/user.services.js";

export const getAllUsers = async (req, res) => {
  try {
    const result = await UserServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
export const createUser = async (req, res) => {
  try {
    const user = req.body;
    const result = await UserServices.CreateUser(user);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
  export const getUserWhithThask = async (req, res) => {
    try {
      const {id} = req.params
      const result = await UserServices.getwhithThaks(id)
      res.json(result)
    } catch (error) {
      res.status(400).json(error.message)
    }
  };
