import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { Icon } from '@mui/material';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import '../css/StayCard.css';

function StayCard({stay}) {
    return (
        <div>
            {stay && 
            (<Card sx={{ minWidth: 395, margin: 'auto' }} className='card'>
                <CardMedia
                    component="img" 
                    image={stay.photo} 
                    alt={stay.title} 
                    height="269"
                    className='card-img'
                />
                <CardContent className='card-content'>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <div className='caption'>
                            {stay.superHost && (<span className='superHost'>Super Host </span>)}<span>{stay.type}</span>{stay.beds && (<span> . {stay.beds} {stay.beds === 1 ? 'bed' : 'beds'}</span>)}
                        </div>
                        <div className='rating'>
                            <Icon component={StarRateRoundedIcon} color="error" className='star'/>
                            <span>{stay.rating}</span>
                        </div>
                    </Grid>
                    <div className='title'>{stay.title}</div>
                </CardContent>
            </Card>)}
        </div>
    );
}

export default StayCard;