import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/country";
import './Countries.css'


const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res=> res.json())
        .then(data=>setCountries(data))
    } ,[])
    return (
        //this is the parent of country component
        <div>
        <h2>Countries: {countries.length}</h2>
        {/* h3 is also the child of div  and there is actually 2 child/element*/}
        <div className="country-container">
         {
        countries.map(country =>
     <Country key={country.cca3} country= {country}></Country> ) 
    } 
    </div>
        </div>
    );
};

export default Countries;