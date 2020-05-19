import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Container,
  Typography,
} from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: "inherit" },
  link: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Drawer
          style={{ width: "220px" }}
          variant="persistent"
          anchor="left"
          open={true}
          classes={{ paper: classes.drawerPaper }}
        >
          <List>
            <Link to="/" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Home Page"} />
              </ListItem>
            </Link>
            <Link to="/about" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary={"About"} />
              </ListItem>
            </Link>
          </List>
        </Drawer>
        <Switch>
          <Route exact path="/">
            <Container>
              <Typography variant="h3" butterBottom>
                Home
              </Typography>
              <Typography variant="body1" butterBottom>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                quis tempore ad? Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Corrupti distinctio error sapiente nemo
                nesciunt, quidem quas culpa soluta et esse libero a deserunt
                aperiam hic quaerat minus dicta? Accusamus, necessitatibus magni
                reiciendis perferendis voluptates aspernatur nemo cupiditate
                laborum esse mollitia voluptatem eaque illum iusto deleniti
                maiores commodi maxime omnis sapiente excepturi a! Expedita
                porro, unde quae tempore distinctio odio quo accusamus earum
                aperiam reprehenderit commodi aliquam itaque, doloremque
                adipisci iusto aspernatur accusantium dolore voluptate debitis
                repudiandae, cum fuga. Quibusdam nulla fugiat consequuntur
                eligendi unde voluptatem optio velit, facere numquam. Ea in
                architecto iusto blanditiis laborum, corrupti consequatur
                suscipit aspernatur placeat.
              </Typography>
            </Container>
          </Route>
          <Route exact path="/about">
            <Container>
              <Typography variant="h3" butterBottom>
                About
              </Typography>
              <Typography variant="body1" butterBottom>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                quis tempore ad? Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Corrupti distinctio error sapiente nemo
          
              </Typography>
            </Container>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
