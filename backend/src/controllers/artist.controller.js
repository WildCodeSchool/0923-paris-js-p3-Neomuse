const artistModel = require("../models/artist.model");

const insert = async (req, res, next) => {
  try {
    const artist = req.body;
    artist.thumbnail = `${req.protocol}://${req.get("host")}/upload/${
      req.files[0].filename
    }`;
    await artistModel.insert(artist);
    res.status(201).json(artist);
  } catch (error) {
    console.error(error);
    res.status(500).json();
    next(error);
  }
};

const findAll = async (req, res, next) => {
  try {
    const artists = await artistModel.findAll();
    res.json(artists);
  } catch (error) {
    console.error(error);
    res.status(500).json();
    next(error);
  }
};

const findById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const artist = await artistModel.findById(id);
    res.json(artist);
  } catch (error) {
    console.error(error);
    res.status(500).json();
    next(error);
  }
};

const findByName = async (req, res, next) => {
  try {
    const { name } = req.query;
    const artists = await artistModel.findByName(name);
    res.json(artists);
  } catch (error) {
    console.error(error);
    res.status(500).json();
    next(error);
  }
};

module.exports = {
  insert,
  findAll,
  findById,
  findByName,
};
