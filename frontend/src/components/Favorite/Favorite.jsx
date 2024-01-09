/* import React, { useState, useEffect } from "react";
import axios from "axios";
import "./artworklist";
import Card from "../Card"

function artworklist() {
  const [artworks, setArtworks] = useState([])
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    axios
      .get("https://5fccb170603c0c0016487102.mockapi.io/api/recipes")
      .then((res) => {
        setRecipes(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const addToFavorites = (recipes) => {
    setFavorites([...favorites, recipes])
    console.log("its work?")
  }

  return (
    <div className="recipe">
      <Card recipes={recipes} addToFavorites={addToFavorites} />
    </div>
  )
}

export default Favorite */
