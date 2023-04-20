# SWEATER WEATHER README

[Netlify Live Link](https://644178935796761a0de36ef3--sage-sunburst-54c5c1.netlify.app/)
[Github Pages Live Link](https://nd1391.github.io/Mod2-Sweater-Weather/)
[Github](https://github.com/nd1391/Mod2-Sweater-Weather)

# BIO

How often do we check the weather to sort our outfit for the day? Is it too cold? Is it too hot?
So many variables go into deciding what would be the appropriate attire for our maximum level of comfort.
And while some of us may know what works best for our body, the weather is ever-changing, and difficult
to infer from without much study. So we try to under-complicate things with a simple pass or fail result.  
It takes less than 5 seconds to enter our home location on the web, so why spend more than that trying
to decide if your favorite attire is suitable today? The plan is to flex this ideology onto other judgement-call type
articles of clothing. COMING SOON: Shorts, Beanies and Umbrellas.

# TECHNOLOGIES USED

This application was made using REACT and fetching data from the openweathermap.org open API.

# APPROACH

The application first converts city locations into geographical coordinates to get an exact location. With that location,
the weather for that area is retreived and calculated to decide a suitable outfit quickly. Data used regards, but is not limited to:
high temperature, low temperature, feels like temperature, humidity, cloudiness and wind speed.

# UNSOLVED PROBLEMS

Installing a useEffect hook created difficulty to present the user with a friendly, inviting landing page.

# STRETCH GOALS (unreached)

1. Expand the idea for other judgement-call articles such as shorts, beanies, and umbrellas.
2. Give more context to the yes or no, with an added brief response of why - too cold? too hot? not windy enough? insert funny response here
3. Enhance styling.
4. Enhance the algorithm to make use of more data for increased accuracy of yes/no. Since elements like wind and humidity are measured by different metrics, incorporating all of these data points will be tricky.

# COLOR PALATTES

Green/Grey
STROMBOLI #2E5E4E
BON JOUR #DBD3D8
CASCADE #93A7AA
HIT GRAY #A7B5B9

Autumn/red/gray
QUICKSAND #BA9B8D
BUCCANEER #6F323C
FUSCOUS GRAY #585651
IRONSTONE #814A38

Soft Greens
FINLANDIA #51624F
HAMPTON #E6D5A9
NORWAY #AFBEA2
EDWARD #9CB4AC

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
