# SWEATER WEATHER README

# [Netlify Live Link](https://644178935796761a0de36ef3--sage-sunburst-54c5c1.netlify.app/)

# [Github Pages Live Link](https://nd1391.github.io/Mod2-Sweater-Weather/)

# [Github](https://github.com/nd1391/Mod2-Sweater-Weather)

# BIO

How often do we check the weather to sort our outfit for the day? Is it too cold? Is it too hot?
So many variables go into deciding what would be the appropriate attire for our maximum level of comfort.
And while some of us may know what works best for our body, the weather is ever-changing, and difficult
to infer from without much study. So we try to under-complicate things with a simple pass or fail result.  
It takes less than 5 seconds to enter our home location on the web, so why spend more than that trying
to decide if your favorite attire is suitable today? The plan is to flex this ideology onto other judgement-call type
articles of clothing. COMING SOON: Shorts, Beanies and Umbrellas.

# TECHNOLOGIES USED

This application was made using REACT and fetching data from the openweathermap.org open API. First it's used to convert city names into
geographical coordinates, then it's used to take those coordinates and provide weather on that area.
NPM Package Temperature was used to convert Kelvin temperatures to more manageable datatypes of celcius and fahrenheit

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
