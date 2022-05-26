import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { get } from 'lodash';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => createStyles({
    root: {
        maxWidth: 345,
        backgroundColor: theme.palette.primary.main,
    },
    media: {
        height: 140,
    },
    cardItemTitle: {
        fontSize: "16px",
        fontWeight: 800,
    },
    cardItemSubTitle: {
        fontSize: "14px",
        fontWeight: 600,
    },
    cardContainTitle: {
        color: theme.palette.text.primary,
    }
}));

export default function CountryListItem({ country }: any) {
    const classes = useStyles();
    const navigate = useNavigate();

    return (
        <Card className={classes.root} style={{ height: "100%", maxWidth: "100%" }} onClick={() => navigate(`/country/${country.cca2}`)}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={country.flags.png}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography className={classes.cardItemTitle} gutterBottom variant="h5" component="h3">
                        {country.name.common}
                    </Typography>
                    <Typography className={classes.cardItemSubTitle} variant="body2" color="textSecondary" component="p">
                        <span className={classes.cardContainTitle}>Population:</span> {country?.population}
                    </Typography>
                    <Typography className={classes.cardItemSubTitle} variant="body2" color="textSecondary" component="p">
                        <span className={classes.cardContainTitle}>Region:</span> {country?.region}
                    </Typography>
                    <Typography className={classes.cardItemSubTitle} variant="body2" color="textSecondary" component="p">
                        <span className={classes.cardContainTitle}>Capital:</span> {get(country, "capital", []).join(", ")}
                    </Typography>
                </CardContent>
            </CardActionArea>

        </Card>
    );
}
