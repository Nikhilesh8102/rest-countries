/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";



export default function Country({ country, setPos }) {




    return (
        <>
            <Link onClick={() => setPos(window.pageYOffset)} className="country-card" to={`./${country.name.common}`} state={country}>
                <div className="wrapper">

                    <img src={country.flags.svg} alt={`${country.name.common}'s flag`} />
                    <div className="spacer" ></div>
                </div>
                <div className="card-text">
                    <h3 className="card-title">{country.name.common}</h3>
                    <p>
                        <b>Population: </b>{country.population.toLocaleString(
                            'en-IN'
                        )}
                    </p>
                    <p>
                        <b>Region: </b>{country.region}
                    </p>
                    <p>
                        <b>Capital: </b>{country.capital?.[0]}
                    </p>
                </div>

            </Link>

        </>

    );
}

