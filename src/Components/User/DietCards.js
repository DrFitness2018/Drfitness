import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import './userDietPlans.css'

// const useStyles = makeStyles({
//   root: {
//     width: 300,
//     // maxWidth:300,
//     margin:10,
//     // textAlign:'justify'
//   },
// });

export default function ImgMediaCard(props) {
//   const classes = useStyles();

  return (
    // <Card className={classes.root}>
    <Card className="CardMain">
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={props.imgs}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.FoodTime}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {
                props.Description
            }
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{
          display:"flex",
          flexDirection:'row',
        //   justifyContent:'center',
          alignItems:'baseline'
      }}>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
