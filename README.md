# Fetch Practice

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

## Objective
Review and practice fetching data from third-party APIs, including:

- Async / await
- Try / catch
- Rendering (aka displaying) data

A simple app has been created for you. 
You will complete the fetch function(s) and render the data.


## Tasks

### Step 1: Get to know the code
_Concepts: components & structure_

Look through the code that you have already. Find the fetch functions, and read the instructions in comments.

### Step 2: Fetch Dogs

#### 2a) Get to know the API
For the *Dogs* app, we will use the [Dog API](https://dog.ceo/dog-api/). Look through the website, and find the endpoint (aka URL) that you need to get a random dog picture.

#### 2b) Fetch!
Write a function to fetch your random dog picture data, and save it to your `dog` state. *HINT:* pay attention to the structure of the data - you will only need to use the image URL.

#### 2c) Render
Display your `dog` image on the page.

### Bonus: Fetch Recipes

#### 2a) Get to know the API
For the *Food* app, we will use the [Spoonacular API](https://spoonacular.com/). Look through the website, and find the endpoint (aka URL) that you need to get recipes by ingredients.

#### 2b) Fetch!
Write a function to fetch your recipes, and save it to your `recipes` state.

#### 2c) Render
Display your recipes on the page. *HINT:* You have multiple items in your data set this time, so you'll need to use `.map()` to render them.