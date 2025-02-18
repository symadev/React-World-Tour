import { useState } from 'react';
import './Country.css'

const Country = ({country ,handleVisitedCountries}) => {
    const {name ,flags , population, area,cca3 } = country;
    //now we declare a set of visited
    const [visited, setVisited] = useState(false)

    //now we declare a handler for visited

    const handleVisited =()=>{
        setVisited(!visited);
    }
    const passWithParams =()=>{
        handleVisitedCountries(country);

        // //if we need to add a perameter on handleVisitedCountries handler the we should rapping handleVisitedCountries
        // with a arrow function
    }
    return (
        <div className={`Country ${visited ? 'visited' : 'non-visited'}`}>

            <h2>Name: {name?.common}</h2>
            <img src={flags.png} alt="" />
            <h3>Population: {population}</h3>
            <h3>Area: {area}</h3>
            <h3>Code: {cca3}</h3>
           <button  style={{ margin: "5px"}}onClick= {handleVisited}>{ visited ? 'Visited' : 'Going'}</button>
           <br />
           <button style={{ margin: "5px"}}  onClick= {passWithParams}>Mark As Visited</button>
        </div>
    );
};

export default Country;