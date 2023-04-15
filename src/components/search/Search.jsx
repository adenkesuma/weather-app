import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import './Search.css';

export default function Search({ onSearchChange, changeForecastChart }) {
    const [search, setSearch] = useState("");

    const loadOptions = (inputValue) => {
        return (
            fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geoApiOptions)
                .then(response => response.json())
                .then(response => {
                    return {
                        options: response.data.map((city) => {
                            return {
                                value: `${city.latitude} ${city.longitude}`,
                                label: `${city.name}, ${city.countryCode}`
                            }
                        })
                    }
                })
                .catch(err => console.error(err))
        )
    } 

    const handleChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    const customStyles = {
        control: (provided) => ({
            ...provided,
            backgroundColor: 'rgba(156, 155, 154, 0.2)',
            borderRadius: '30px',
            padding: '5px 5px 5px 30px',
            width: '440px',
            border: 'none',
        }),
        option: (provided, state) => ({
            ...provided,
            zIndex: '9999',
            backgroundColor: state.isSelected ? '#007bff' : '#fff',
            color: state.isSelected ? '#fff' : '#333',
        }),
    };

    return (
        <div className="search__form">
            <FontAwesomeIcon className="search__icon" icon={faSearch} />
            <AsyncPaginate
                styles={customStyles}
                placeholder="search for city"
                debounceTimeout={600}
                value={search}
                onChange={handleChange}
                loadOptions={loadOptions}
            />        
        </div>
    )
}
