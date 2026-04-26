const express = require('express');
const db = require('../db');
const router = express.Router();


router.get('/', async (req,res) => {

    const recipes = await db.query('SELECT a.recipeName, a.instructions, b.ingredientName FROM recipe a INNER JOIN IngredientInRecipe c ON a.id = c.recipeId INNER JOIN ingredient b ON b.id = c.ingredientId');
  
    //res.json(recipes.rows); 
});

module.exports = router;
