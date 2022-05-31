import { useEffect } from 'react'
import { Container, Grid } from '@mui/material'
import CustomAutocomplete from '../../components/CustomAutocomplete/CustomAutocomplete'
import FilterByRegion from '../../components/FilterByRegion/FilterByRegion'
import CountryList from './CountryList'
import { useAppState } from '../../context'
import Loading from '../../components/Loading/Loading'

const Country = () => {
    const { getAllCountries, loading } = useAppState('country');

    useEffect(() => {
        getAllCountries();
    }, [])

    return (
        <Container style={{ marginTop: "40px" }}>
            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                <Grid item xs={12} lg={5} style={{ marginBottom: "20px" }}>
                    <CustomAutocomplete />
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2} style={{ marginBottom: "20px" }}>
                    <FilterByRegion />
                </Grid>
            </Grid>
            <div style={{ marginTop: "20px" }}>
                {loading ? <Loading loading={loading} /> :
                    <CountryList />}
            </div>
        </Container>
    )
}

export default Country