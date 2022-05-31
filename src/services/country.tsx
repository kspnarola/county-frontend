import axios from 'axios';

export const getAllCountriesAPI = async (): Promise<any> => {
    try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const data = response.data;
        return data;
    } catch (error) {
        return [];
    }
}
export const getAllCountriesBySearchAPI = async (search: string): Promise<any> => {
    try {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${search}`);
        const data = response.data;
        return data;
    } catch (error) {
        return [];
    }
}

export const getCountryDetailsByCodeAPI = async (code: string): Promise<any> => {
    try {
        const response = await axios.get(`https://restcountries.com/v3.1/alpha/${code}`);
        const data = response.data;
        return data.length ? data[0] : data;
    } catch (error) {
        return null;
    }
}
export const getCountryDetailsForMultipleCodesAPI = async (code: string): Promise<any> => {
    try {
        const response = await axios.get(`https://restcountries.com/v2/alpha/?codes=${code}`);
        const data = response.data;
        return data.length ? data.map((item: any) => { return { name: item?.name, code: item?.alpha2Code, image: item?.flag } }) : data;
    } catch (error) {
        return null;
    }
}

export const getAllCountriesByRegionAPI = async (region: string): Promise<any> => {
    try {
        const response = await fetch(`https://restcountries.com/v3.1/region/${region}`);
        const data = await response.json();
        return data;
    } catch (error) {
        return [];
    }
}