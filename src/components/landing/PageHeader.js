import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { fade, makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import logo from "../common/images/logo.png";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
// import Login from './Login';
// import SignUp from './SignUp';
// import ForgotPassword from './ForgotPassword'
import ResetPassword from './ResetPassword';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position: "absolute",
    top: 0,
    display: "flex",
    width: "100%"
  },
  appBar: {
    background: "rgba(0,0,0,0.2)"
  },
  title: {
    flexGrow: 1,
    width: "33%",
    display: "inline-block",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    },
    "& a": {
      color: "inherit",
      textDecoration: "none"
    },
    "& img": {
      width: "33%"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    marginRight: theme.spacing(15),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 200,
      "&:focus": {
        width: 240
      }
    }
  },
  button: {
    margin: theme.spacing(1),
    color: "white",
    borderColor: "white",
    backgroundColor: "#007bff"
  }
}));

const PageHeader = ({ toggleDrawer }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <IconButton
              onClick={toggleDrawer(true)}
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="Open drawer"
            >
              <MenuIcon />
            </IconButton>
            <div className={classes.title} variant="h5" noWrap>
              <Link
                to={{
                  pathname: "/read",
                  hash: "#submit",
                  search: "?quick-search=true"
                }}
              >
                <img src={logo} alt={"logo"} />
              </Link>
            </div>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            {/* <Login /> */}
            {/* <SignUp /> */}
            {/* <ForgotPassword /> */}
            <ResetPassword />
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};
export default PageHeader;
