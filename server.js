const express = require('express');

const recipeRouter = require('./routes/recipes.routs');
const ingredientRouter = require('./routes/ingredients.routes');
const app = express();



app.use('/ingredients', ingredientRouter);
app.use('/recipes', recipeRouter);

app.listen(3000, () => {
    console.log('Server is running on Port 3000.');
});

