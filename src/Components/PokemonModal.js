import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import red from "@material-ui/core/colors/red";


const styles = theme => ({
  card: {
    maxWidth: 400
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
});

class PokeModal extends Component {
  constructor(props) {
    super(props);
    const { classes } = props;
    this.classes = classes;
    this.state = {
      pokemon: {}
    };
  }

  render() {
    return (
      <Card className={this.classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Pokemon" className={this.classes.avatar}>
              R
            </Avatar>
          }
          action={
            <IconButton>

            </IconButton>
          }
          title="This is a Pokemon"
          subheader="Weight: Here goes the weight - Height: Here goes the height"
        />
        <CardMedia
          className={this.classes.media}
          image="link to image"
          title="Pokemon Name"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Abilities
          </Typography>

          <List>
            <ListItem>
              <ListItemText primary="Ability 1" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Ability 2" />
            </ListItem>
          </List>
          <Divider />
          <Typography gutterBottom variant="h5" component="h2">
            Stats
          </Typography>

          <List>
            <ListItem>
              <ListItemText primary="Stat 1" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Stat 2" />
            </ListItem>
          </List>

          <Divider />
          <Typography gutterBottom variant="h5" component="h2">
            Types
          </Typography>

          <List>
            <ListItem>
              <ListItemText primary="Type 1" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Type 2" />
            </ListItem>
          </List>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(PokeModal);
