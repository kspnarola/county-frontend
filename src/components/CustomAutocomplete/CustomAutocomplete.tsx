import React, { useEffect } from 'react';
import { Input, Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import useDebounce from '../../hooks/useDebounce';
import { useAppState } from '../../context';

export default function CustomAutocomplete() {
    const { getAllCountriesBySearch, getAllCountries } = useAppState('country');
    const [searchValue, setSearchValue] = React.useState<string>("");
    const searchDebounce = useDebounce(searchValue, 1000);

    useEffect(() => {
        if (searchDebounce) {
            getAllCountriesBySearch(searchValue)
        } else {
            getAllCountries()
        }
    }, [searchDebounce])


    return <>
        <Paper style={{ position: 'relative' }}>
            <FontAwesomeIcon className='input-icon' icon={faSearch} />
            <Input
                className="custom-input"
                sx={{ width: "100%", bgcolor: "primary.main" }}
                placeholder='Search for country...'
                value={searchValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)} />
        </Paper>
    </>
}
