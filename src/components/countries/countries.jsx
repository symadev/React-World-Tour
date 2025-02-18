import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/country";
import './Countries.css'


const Countries = () => {
    const [countries, setCountries] = useState([]);
    const[visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountries =(country)=>{
       console.log('add this to your visited countries');
    //    console.log(country);
    // visitedCountries.push(country);
    const newVisitedCountries = [...visitedCountries, country];
    //using spread operator ,,adding for visited countries
    setVisitedCountries(newVisitedCountries);
}
    
    
    
        useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res=> res.json())
        .then(data=>setCountries(data))
    } ,[])



    return (
        //this is the parent of country component
        <div>
        <h2>Countries: {countries.length}</h2>
        <div>
            <h2>Visited Countries :  {visitedCountries.length}</h2>
            <ul>{
            visitedCountries.map(country =>
                <li key={country.cca3}> {country.name.common}</li> ) 
}
            </ul>
        </div>
        {/* h3 is also the child of div  and there is actually 2 child/element*/}
        <div className="country-container">
         {
        countries.map(country =>
     <Country key={country.cca3}  handleVisitedCountries={handleVisitedCountries}  country= {country}></Country> ) 
    } 
    {/* handleVisitedCountries--> as we can set anything as props */}
    </div>
        </div>
    );
};

export default Countries;