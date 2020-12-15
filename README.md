# Easy-mei-contadores

This is the project make with `gridsome`.

## Configuration
in the folder `src` there is a file with the name` firebase.json` it contains all the settings of the authentication and collection.

```
{
  "auth": {
        "apiKey": "AIzaSyD0hU-MKuo4fu0CVaIOshZ_5QDf49W8lOM",
        "authDomain": "easymei-backend-dev.firebaseapp.com",
        "databaseURL": "https://easymei-backend-dev.firebaseio.com",
        "projectId": "easymei-backend-dev",
        "storageBucket": "easymei-backend-dev.appspot.com",
        "messagingSenderId": "393715247766",
        "appId": "1:393715247766:web:ce7bcf4692d8640b86f0b7",
        "measurementId": "G-MRK1R2NDDQ"
  },
  "collection": "portal_contador"
}
```

### 1. Install Gridsome CLI tool if you don't have

`npm install --global @gridsome/cli`

### 2. Create a build
1.  `gridsome build` this command make a build project on `dist` folder.

### 3. How to deploy on 
1. https://gridsome.org/docs/deploy-to-netlify/
2. https://gridsome.org/docs/deploy-to-amplify/
3. https://gridsome.org/docs/deploy-to-vercel/
4. https://gridsome.org/docs/deploy-to-amazon-s3/
5. https://gridsome.org/docs/deploy-to-google/
6. https://gridsome.org/docs/deploy-to-surge-sh/