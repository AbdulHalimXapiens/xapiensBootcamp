import React from "react";
import Link from "react-router-dom";
import {
  AppBar,
  makeStyles,
  Button,
  Typography,
  Toolbar,
  Grid,
} from "@material-ui/core";
import { TabList, TabContext } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#BABFBB",
    borderBottom: "1px solid #50813c",
  },
  toolBar: {
    paddingLeft: "7%",
    paddingRight: "7%",
  },
  typography: {
    fontFamily: "Perpetua Titling MT",
    fontSize: "35px",
    color: "#50813c",
  },
  item: {
    color: "#50813c",
    fontSize: "16px",
    fontFamily: "Bell Mt",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Grid container justify="space-between">
            <Typography className={classes.typography}>PLANT .</Typography>

            <Button className={classes.item}>
              <Link to={"/home"}>
                <a href="#">Home</a>
              </Link>
            </Button>

            <Button className={classes.item}>PRODUCT</Button>

            <Button className={classes.item}>
              <Link to={"/blog"}>
                <a href="#">BLOG</a>
              </Link>
            </Button>

            <Button className={classes.item}>ABOUT</Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
