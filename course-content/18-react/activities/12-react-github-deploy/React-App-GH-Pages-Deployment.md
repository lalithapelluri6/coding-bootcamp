## How to Deploy a React App to Github Pages

<hr>

Below are instructions for deploying a React app to github pages, but you can also read [Facebook's documentation](https://facebook.github.io/create-react-app/docs/deployment#github-pages-https-pagesgithubcom).

<hr>

### Step 1: Add a 'homepage' to your package.json

Open your package.json and add a homepage field for your project. Use the example below, swapping in your own Github username and the exact name of the github repository containing the code for your React app.

```json
{
   "name": "your-app-name",
   "homepage": "https://yourusername.github.io/your-repo-name",
```

<hr>

### Step 2: Install 'gh-pages' npm package

Navigate to the root directory of the React app you are trying to deploy, and run this command:

```
npm install gh-pages
```

<hr>

### Step 3: Add 'predeploy' and 'deploy' scripts to your package.json

In your package.json:

```json
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
```

<hr>

### Step 4: Deploy your app

In the root directory of your React app, run this command:

```
npm run deploy
```

<hr>

### Step 5: Make sure your Github repository is being deployed from the 'gh-pages' branch

The 'gh-pages' npm package automatically creates a new branch with that name when you run the 'npm run deploy' command.

So, you need to go to your repository on Github, click the 'Settings' tab, scroll down to the 'Github Pages' section, and in the dropdown menu under 'Source' click 'gh-pages' branch.

It will look like [this](https://i.imgur.com/HUjEr9l.png)

<hr>

### Step 6: Open your app to test it out!

Your app should be deployed at the URL you specified as the 'homepage' in your package.json file.


