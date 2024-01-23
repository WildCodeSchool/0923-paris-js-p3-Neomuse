const artworkModel = require("../models/artworks.model");

const create = async (req, res, next) => {
  try {
    const artwork = req.body;
    const [result] = await artworkModel.insert(artwork);
    if (result.insertId) {
      const [[newartwork]] = await artworkModel.findById(result.insertId);
      res.status(201).json(newartwork);
    } else res.sendStatus(422);
  } catch (error) {
    next(error);
  }
};

const getALL = async (req, res, next) => {
  try {
    const [artwork] = await artworkModel.findAll();
    res.status(200).json(artwork);
  } catch (error) {
    next(error);
  }
};
const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const [[artwork]] = await artworkModel.findById(id);
    const [ArtworkTecniqueList] = await artworkModel.findByArtworkTechniqueList(
      artwork.artwork_technique_id
    );
    // console.log(artwork.artworks_id);

    const fiterArtworkTecniqueList = ArtworkTecniqueList.filter(
      (oeuvreUnique) => artwork.artworks_id !== oeuvreUnique.artworks_id
    );
    if (artwork)
      res.status(200).json({
        artworkUnique: artwork,
        artworkList: fiterArtworkTecniqueList,
      });
    else res.sendStatus(422);
  } catch (error) {
    next(error);
  }
};
const getTechAll = async (req, res, next) => {
  try {
    const [technique] = await artworkModel.TechAll();
    res.status(200).json(technique);
  } catch (error) {
    next(error);
  }
};
const getBytech = async (req, res, next) => {
  try {
    const [Bytech] = await artworkModel.findBytech();
    res.status(200).json(Bytech);
  } catch (error) {
    next(error);
  }
};
const getArtistAll = async (req, res, next) => {
  try {
    const [artist] = await artworkModel.AllArtist();
    res.status(200).json(artist);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  getALL,
  getById,
  getTechAll,
  getBytech,
  getArtistAll,
};
