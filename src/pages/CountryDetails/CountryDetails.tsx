import React, { useEffect } from 'react'
import { Button, Container, Paper, Grid } from '@mui/material'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppState } from '../../context';
import { get, map } from 'lodash'
import Loading from '../../components/Loading/Loading';

const CountryDetails = () => {
    const { getCountryDetailsByCode, country, setData, loading } = useAppState('country')
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (params.code) {
            getCountryDetailsByCode(params.code)
        }
        return () => {
            setData({ country: null })
        }
    }, [params])

    const currencies = map(country?.currencies, function (n) { return n.name });
    const languages = map(country?.languages, function (n) { return n });

    const handleClickBorder = (code: string) => {
        navigate(`/country/${code}`)
    }

    return (
        <Container style={{ marginTop: "40px" }}>
            <Paper sx={{ bgcolor: 'primary.main', width: "fit-content", minWidth: "100px" }}>
                <Button onClick={() => navigate('/')} sx={{ width: "100px", bgcolor: "primary.main" }} startIcon={<FontAwesomeIcon icon={faArrowLeft} size="1x" />}>Back</Button>
            </Paper>

            {loading ? <Loading loading={loading} /> :
                <Grid container spacing={5} style={{ marginTop: "50px" }}>
                    <Grid item xs={12} sm={6} md={6}>
                        <img src={country?.flags.png} height="100%" width="100%" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <div className="info-box">
                            <div>
                                <h3>{country?.name.common}</h3>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={12} md={6} lg={6}>
                                        <ul className='info-list'>
                                            <li>
                                                <span>Native Name:</span> {country?.name.common}
                                            </li>
                                            <li>
                                                <span>Population:</span> {country?.population}
                                            </li>
                                            <li>
                                                <span>Region:</span> {country?.region}
                                            </li>
                                            <li>
                                                <span>Sub Region:</span> {country?.subregion}
                                            </li>
                                            <li>
                                                <span>Capital:</span> {get(country, "capital", []).join(", ")}
                                            </li>

                                        </ul>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6} lg={6}>
                                        <ul className='info-list'>
                                            <li>
                                                <span>Top Level Domain:</span> {get(country, "tld", []).join(", ")}
                                            </li>
                                            <li>
                                                <span>Currencies:</span> {currencies.join(", ")}
                                            </li>
                                            <li>
                                                <span>Languages:</span> {languages.join(", ")}
                                            </li>
                                        </ul>
                                    </Grid>
                                </Grid>


                                <div style={{ display: "flex", flexWrap: "wrap" }}>
                                    <h4>Border Countries:</h4>
                                    <ul className="borderList">
                                        {get(country, "borderList", []).map((item: any, index: number) =>
                                            <li key={index} style={{ cursor: "pointer" }} onClick={() => handleClickBorder(item.code)}>
                                                <Paper sx={{ padding: "5px 15px", bgcolor: "primary.main", display: "flex", alignItems: "center" }}>
                                                    <img src={item?.image} style={{ marginRight: "5px" }} height="20px" width="20px" />{item.name}
                                                </Paper>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </Grid>
                </Grid>}
        </Container>
    )
}

export default CountryDetails
