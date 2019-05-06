# Testing

## Installation
In this section, we'll be conducting tests with Mocha and Chai. 

We'll discuss these testing libraries in more detail, but for now we can get started with the installation.

#### Mocha

For Mocha, you have two choices. You can install

1. Globally: `npm install --global mocha`
2. Locally (for each project): `npm install mocha` (from the same place in your file structure where package.json can be found).

for the purpose of these activities we will be installing locally based on project


#### Chai

We will install Chai as a dependency for each project we use it in. From the same place in your file structure where package.json can be found, run `npm install chai`.

## Running the tests

Once you've installed Mocha, it will look through your project for a folder called `test`. It will run all the tests found within that folder. 

To do this, look at the package.json in your project and make sure you see the following in `scripts`: 

```json

  "scripts": {
    "test": "mocha"
  },

```

If you have the above in your package.json, go ahead and run `npm run test` from the command line.