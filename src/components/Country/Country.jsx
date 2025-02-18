import './Country.css'

const Country = ({country}) => {
    const {name ,flags} = country;
    return (
        <div className='Country'>
            <h2>Name: {name?.common}</h2>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;