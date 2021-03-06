import React, { useState, useEffect } from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';

import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

function CountryPicker({handleCountryChange}) {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const fetchAPI = async () => {
          setCountries(await fetchCountries());
        };
    
        fetchAPI();
      }, []);

    return (
        <FormControl className={styles.FormControl}>
            <NativeSelect defaultValue='' onChange={(e)=> handleCountryChange(e.target.value)}>
                <option value=''>Global</option>
                {countries.map(country => (
                    <option key={country} value={country}>{country}</option>
                ))}
            </NativeSelect>
        </FormControl>
    )
};

export default CountryPicker;