import "./App.css";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PostList from "./components/PostList/PostList";
import Form from "./components/Form/Form";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getPosts } from "./actions/posts";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { Redirect, Route, Switch } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import PostDetail from "./components/PostDetails/PostDetail";

const useStyles = makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
  },
  image: {
    marginLeft: "15px",
  },
}));

function App() {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));

  // const [currentId, setCurrentId] = useState(null);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getPosts());
  // }, [dispatch]);

  return (
    <Container maxWidth="lg">
      {/* <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </AppBar> */}
      <Navbar />
      {/* <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <PostList setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow> */}
      <Switch>
        <Route path="/" exact component={() => <Redirect to="/posts" />} />
        <Route path="/posts" exact component={Home} />
        <Route path="/posts/search" exact component={Home} />
        <Route path="/posts/:id" exact component={PostDetail} />
        <Route
          path="/auth"
          exact
          component={() => (!user ? <Auth /> : <Redirect to="/posts" />)}
        />
      </Switch>
    </Container>
  );
}

export default App;
