import React from 'react'
import CountryPicker from './CountryPicker/CountryPicker'
import Cards from './Cards/Cards'
import Chart from './Chart/Chart'
import './App.css'
import {fetchData} from './api'
import Covid from './Images/covid-19.png'

class App extends React.Component{

  state = {
    data :{},
    country: '',
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    
    this.setState({data:fetchedData});
  }

  handleCountryChange =async (country) =>{
    const fetchedData = await fetchData(country);
    
    this.setState({data:fetchedData , country : country});
  }

  render(){
    const {data,country} = this.state;
    return(
      <div className="container">
        <img className="image" src={Covid} alt="covid-19"/>
        <Cards data={data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country} />
      </div>
    );
  }
}
export default App;