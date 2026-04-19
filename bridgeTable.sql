INSERT INTO ingredientinrecipe  (recipeid, ingredientid)
VALUES (1, 1);


INSERT INTO ingredientinrecipe  (recipeid, ingredientid)
VALUES (1, 4);

INSERT INTO ingredientinrecipe (recipeid, ingredientid)
SELECT a.id, b.id
FROM recipe a
JOIN ingredient b 
ON a.recipeName = 'Pumpkin Pasties' AND b.ingredientName = 'cloves';

INSERT INTO ingredientinrecipe (recipeid, ingredientid)
SELECT a.id, b.id
FROM recipe a
JOIN ingredient b 
ON a.recipeName = 'Pumpkin Pasties' AND b.ingredientName = 'Pastry dough';