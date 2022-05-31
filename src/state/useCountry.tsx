import { useEffect, useReducer } from "react";
import { getAllCountriesAPI, getAllCountriesByRegionAPI, getAllCountriesBySearchAPI, getCountryDetailsByCodeAPI, getCountryDetailsForMultipleCodesAPI } from "../services/country";
import { get } from 'lodash';

interface InitialArgs {
    countryList: Array<any>,
    country: any,
    loading: boolean,
}

function reducer(state: InitialArgs, action: any) {
    return { ...state, ...action };
}

const initialArgs = {
    countryList: [],
    country: null,
    loading: false
}

const useCountry = () => {
    const [state, setState] = useReducer(reducer, initialArgs);

    const getAllCountries = async () => {
        setState({ loading: true });
        const resp = await getAllCountriesAPI();
        setState({ countryList: resp, loading: false });
    }
    const getAllCountriesBySearch = async (search: string) => {
        setState({ loading: true });
        const resp = await getAllCountriesBySearchAPI(search);
        setState({ countryList: resp, loading: false });
    }

    const getAllCountriesByRegion = async (region: string) => {
        setState({ loading: true });
        const resp = await getAllCountriesByRegionAPI(region);
        setState({ countryList: resp, loading: false });
    }

    const getCountryDetailsByCode = async (code: string) => {
        setState({ loading: true });
        let resp = await getCountryDetailsByCodeAPI(code);
        let borders = get(resp, "borders", []).join(',');
        let borderList = [];
        if (borders) {
            let resp1 = await getCountryDetailsForMultipleCodesAPI(borders);
            borderList = resp1;
        }
        resp = { ...resp, borderList };
        setState({ country: resp, loading: false });
    }

    const setData = async (obj: any) => {
        setState({ ...state, ...obj });
    }

    return {
        ...state,
        getAllCountries,
        getAllCountriesBySearch,
        getCountryDetailsByCode,
        getAllCountriesByRegion,
        setData
    }
}

export default useCountry