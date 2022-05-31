import { Grid } from '@mui/material'
import { useAppState } from '../../context'
import CountryListItem from './CountryListItem'

const CountryList = () => {
    const { countryList } = useAppState('country')
    return (
        <div>
            <Grid container direction='row' spacing={4}>
                {countryList.map((country: any, key: number) =>
                    <Grid item xs={12} sm={6} md={4} lg={3} key={key} justifyContent='center'>
                        <CountryListItem country={country} />
                    </Grid>
                )}
            </Grid>
        </div>
    )
}

export default CountryList
