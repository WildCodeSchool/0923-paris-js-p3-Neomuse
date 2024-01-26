const artistModel = require("../models/artist.model");

const insert = async (req, res, next) => {
  try {
    const artist = req.body;
    const [result] = await artistModel.insert(artist);
    if (result.insertId) {
      const [[newartist]] = await artistModel.findById(result.insertId);
      res.status(201).json(newartist);
    } else res.sendStatus(422);
  } catch (error) {
    next(error);
  }
};

const findAll = async (req, res, next) => {
  try {
    const [artists] = await artistModel.findAll();
    res.status(200).json(artists);
  } catch (error) {
    next(error);
  }
};

const findById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const [[artist]] = await artistModel.findById(id);
    if (artist) res.status(200).json(artist);
    else res.sendStatus(422);
  } catch (error) {
    next(error);
  }
};

const findByName = async (req, res, next) => {
  try {
    const { name } = req.query;
    const [[artist]] = await artistModel.findByName(name);
    res.status(200).json(artist);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  insert,
  findAll,
  findById,
  findByName,
};
