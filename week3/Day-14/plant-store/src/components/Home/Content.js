import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import BackgroundHero from "../../asset/image/utama.jpg";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(${BackgroundHero})`,
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em",
    },
  },
  judul: {
    fontSize: "3em",
    color: "#4f4e4f",
    textAlign: "left",
    // marginLeft: "-540px",
    width: "500px",
  },
  isi: {
    fontSize: "1.5em",
    color: "#586056",
    textAlign: "left",
    // marginLeft: "-530px",
    width: "500px",
  },
  paper: {
    backgroundColor: "transparent",
    marginLeft: "-60%",
  },
}));

function Content() {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.hero}>
        <Paper className={classes.paper}>
          <Typography paragraph>
            <p className={classes.judul}>CREATE YOUR OWN SMALL GARDEN</p>
            <p className={classes.isi}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </Typography>
        </Paper>
      </Box>
    </div>
  );
}

export default Content;
