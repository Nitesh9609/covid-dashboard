import './App.css';
// import CardComponent from './components/card/Card.component';
import React from 'react';
import axios from 'axios'
import CardItem from './components/card-item/card-item.component';
import Search from './components/search/Search.component';

class App extends React.Component{
 constructor(){
   super()
   this.state = {
     apidata:[],
     searchValue: ''
   }
 }

 componentDidMount(){
   axios.get("https://api.rootnet.in/covid19-in/stats/latest")
   
   .then(response => this.setState({apidata : response.data.data.regional}))
  
 }

 handleOnSearch = (event) => {
    this.setState({searchValue:event.target.value})
    console.log(event.target.value)
 }
 

  render(){
       const{apidata} =this.state

       const filterState = apidata.filter(finaldata => finaldata.loc.toLowerCase().includes(this.state.searchValue.toLowerCase()))
      return (
        <>
            <div>
            <div className="App">
                  <h1>COVID DASHBOARD</h1>
                  <Search searching={this.handleOnSearch} />
                  <CardItem apidatas={filterState}/>
            </div>
        </div>
        </>
        
        
      );
  }
}

export default App;
