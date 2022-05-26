/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Input, Paper } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import useDebounce from '../../hooks/useDebounce';
import { useAppState } from '../../context';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            background: theme.palette.primary.main,
            width: "100%"
        }
    })
);

export default function CustomAutocomplete() {
    const { getAllCountriesBySearch, getAllCountries } = useAppState('country');
    const classes = useStyles();
    const [searchValue, setSearchValue] = React.useState<any>("");
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
            <Input className={classes.root + " " + "custom-input"} placeholder='Search for country...' value={searchValue} onChange={(e: any) => setSearchValue(e.target.value)} />
        </Paper>
    </>
}
