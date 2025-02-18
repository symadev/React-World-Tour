import './Country.css'

const Country = ({country}) => {
    const {name ,flags , population, area } = country;
    return (
        <div className='Country'>

            <h2>Name: {name?.common}</h2>
            <img src={flags.png} alt="" />
            <h3>Population: {population}</h3>
            <h3>Area: {area}</h3>
           
        </div>
    );
};

export default Country;