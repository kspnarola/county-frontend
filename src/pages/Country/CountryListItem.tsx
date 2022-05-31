import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { get } from 'lodash';
import { useNavigate } from 'react-router-dom';

interface CountryListItemProps {
    country: any;
}

export default function CountryListItem(props: CountryListItemProps) {
    const navigate = useNavigate();

    return (
        <Card sx={{ height: "100%", maxWidth: "100%", bgcolor: 'primary.main' }} onClick={() => navigate(`/country/${props?.country.cca2}`)}>
            <CardActionArea>
                <CardMedia
                    sx={{ height: 140 }}
                    image={props?.country.flags.png}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography sx={{ fontSize: "16px", fontWeight: 800 }} gutterBottom variant="h5" component="h3">
                        {props?.country.name.common}
                    </Typography>
                    <Typography sx={{ fontSize: "14px", fontWeight: 600 }} variant="body2" color="textSecondary" component="p">
                        <span>Population:</span> {props?.country?.population}
                    </Typography>
                    <Typography sx={{ fontSize: "14px", fontWeight: 600 }} variant="body2" color="textSecondary" component="p">
                        <span >Region:</span> {props?.country?.region}
                    </Typography>
                    <Typography sx={{ fontSize: "14px", fontWeight: 600 }} variant="body2" color="textSecondary" component="p">
                        <span >Capital:</span> {get(props, "country.capital", []).join(", ")}
                    </Typography>
                </CardContent>
            </CardActionArea>

        </Card>
    );
}
