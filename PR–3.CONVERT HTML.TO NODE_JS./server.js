const express = require('express');
const path = require('path');

const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));


let initialRecipe = [
    {
        name: 'Spaghetti Carbonara',
        description: 'A classic Italian pasta dish.',
        preparationTime: '15 minutes',
        cookingTime: '15 minutes',
        imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/carbonara-index-6476367f40c39.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*',
        country: "India",
        veg: true,
        id: 1
    }
];

app.get('/', (req, res) => {
    res.send('Welcome to the recipe API.');
});


app.get('/recipe/all', (req, res) => {
    res.json(initialRecipe);
});


app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/add', (req, res) => {
    res.sendFile(path.join(__dirname, 'recipe.html'));
});

app.post('/recipe/add', (req, res) => {
    const { name, description, preparationTime, cookingTime, imageUrl, country, veg } = req.body;

    if (!name || !description || !preparationTime || !cookingTime || !imageUrl || !country || veg === undefined) {
        return res.status(400).send('All fields are required');
    }

    const newRecipe = {
        name,
        description,
        preparationTime,
        cookingTime,
        imageUrl,
        country,
        veg,
        id: initialRecipe.length + 1
    };

    initialRecipe.push(newRecipe);
    res.json(initialRecipe);
});


app.patch('/recipe/update/:id', (req, res) => {
    const { id } = req.params;
    const index = initialRecipe.findIndex(recipe => recipe.id == id);

    if (index !== -1) {
        Object.assign(initialRecipe[index], req.body);
        res.json(initialRecipe);
    } else {
        res.status(404).send('Recipe not found');
    }
});

app.delete('/recipe/delete/:id', (req, res) => {
    const { id } = req.params;
    initialRecipe = initialRecipe.filter(recipe => recipe.id != id);
    res.json(initialRecipe);
});


app.get('/recipe/filter', (req, res) => {
    let filteredRecipes = [...initialRecipe];

    if (req.query.veg) {
        filteredRecipes = filteredRecipes.filter(recipe => recipe.veg === (req.query.veg === 'true'));
    }

    if (req.query.country) {
        filteredRecipes = filteredRecipes.filter(recipe => recipe.country.toLowerCase() === req.query.country.toLowerCase());
    }

    if (req.query.sort) {
        filteredRecipes.sort((a, b) => {
            if (req.query.sort === 'lth') {
                return a.name.localeCompare(b.name);
            } else if (req.query.sort === 'htl') {
                return b.name.localeCompare(a.name);
            }
            return 0;
        });
    }

    res.json(filteredRecipes);
});

app.listen(8090, () => {
    console.log('Server is running on http://localhost:8090');
});