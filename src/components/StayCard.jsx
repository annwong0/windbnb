import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function StayCard({stay}) {
    return (
        <div>
            {stay && 
            (<Card>
                <CardMedia image={stay.photo} alt={stay.title} height="269"/>
                <CardContent>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center">
                            <Typography>
                                {stay.superHost && (<span>Super Host </span>)}<span>{stay.type}</span>{stay.beds && (<span> . {stay.beds} {stay.beds === 1 ? 'bed' : 'beds'}</span>)}
                            </Typography>
                            <Typography>{stay.rating}</Typography>

                    </Grid>
                    <Typography>{stay.title}</Typography>
                </CardContent>
            </Card>)}
        </div>
    );
}

export default StayCard;