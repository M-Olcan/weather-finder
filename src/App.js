import React from "react";
import Titles from "./components/Titles";
import From from "./components/From"
import Weather from "./components/Weather"


const API_KEY = "3585775f387b0d0cba6c5b3dc41b8167";

 class App extends React.Component {
   
  state = {
    temperature:undefined,
    city:undefined,
    country:undefined,
    humidity:undefined,
    description:undefined,
    error:undefined

   }

  getWeather = async (e) =>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call=await fetch
    (`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}uk&appid=${API_KEY}&units=metric`)
  
    const data =await api_call.json();
    if ( city && country ){
     

    this.setState({
      temperature:undefined,
      city:undefined,
      country:undefined,
      humidity:undefined,
      description:undefined,
      error:"Please enter the value"
    })
    }  else {
      this.setState({
        temperature:data.main.temp,
        city:data.name,
        country:data.sys.country,
        humidity:data.main.humidity,
        description:data.weather[0].description,
        error:""
      })
    }
  }


  render() {
    return (
      <div>
        <Titles />
        <From getWeather={ this.getWeather } />
        <Weather 
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
        />
        
      </div>
    )
  }
}



export default App;
