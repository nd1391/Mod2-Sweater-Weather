import { kelvinToFahrenheit } from 'temperature'

export default function Sweater({ location, temperature }) {

    const feelsLike = Math.floor(kelvinToFahrenheit(temperature?.main?.feels_like))
    console.log(feelsLike)

    let sweaterWeather = ""
    if (feelsLike > 52 && feelsLike < 65) {sweaterWeather="Yes"} else {sweaterWeather="No"}

    // const sweaterResult = "" 

    const loaded = () => {
        return (
          <>
            <div className="sweater">
                <h2 className="user-loc">{temperature?.name}</h2>
                <h1 className="yes-no">{sweaterWeather}</h1>
            </div>
          </>
        );
      };
          //function to return loading JSX
      const loading = () => {
        return (
            <>
                <div className="sweater">
                    <h1 className="loading-header">Is it Sweater Weather Where You Are?</h1>
                    <h4 className="loading-body">
                        Let's be honest - you didn't come here for today's forecast.  
                        You came here to answer a very simple question: "Can I wear a sweater out today?"
                        We source the weather for you and compile the elements to reduce a simple yes or no answer.
                        Humid? Windy? Cloudy? Rainy?  Stop asking questions and take our one word for it.</h4>
                </div>
            </>
      )
    };
    
      //Ternary operator will determine which functions JSX we will return
      return location ? loaded() : loading();
    }


//     return(
//         <>
//         <div className="sweater">
//             <h1>Is it Sweater Weather in Your Area?</h1>
//             <h2>{props.temperature?.name || "Null"}</h2>
//             <h2>{feelsLike}</h2>
//             <h1>{sweaterWeather}</h1>
//             {/* <h2>{props.temperature?.main?.feels_like}</h2> */}

//         </div>
//         </>
//     )
// }