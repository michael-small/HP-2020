import React, { useState } from "react"
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import MenuItem from "@material-ui/core/MenuItem"
import Menu from "@material-ui/core/Menu"
import MenuIcon from "@material-ui/icons/Menu"
import { StyledLink as PageLink } from "./link"
import StakeLogo from "../images/logo-slim.svg"
import MediumIcon from "../images/icons/medium-icon.inline.svg"
import {
  Button,
  Drawer,
  ListSubheader,
  CssBaseline,
  Link,
} from "@material-ui/core"
import LanguageIcon from "@material-ui/icons/Language"
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state"

import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Collapse from "@material-ui/core/Collapse"
import ExpandLess from "@material-ui/icons/ExpandLess"
import ExpandMore from "@material-ui/icons/ExpandMore"
import GitHubIcon from "@material-ui/icons/GitHub"
import TwitterIcon from "@material-ui/icons/Twitter"
import LinkedInIcon from "@material-ui/icons/LinkedIn"


import CloseIcon from "@material-ui/icons/Close"

// add the page links in here, I know it's a very hacky way to do this
const MOCK_PAGE_LINKS_ARRAY = [
  {
    label:"Service",
    link: "/service",
  },{
    label:"Media",
    link: "/media",
  },{
    label:"Company",
    link: "/company",
  },{
    label:"Career",
    link: "/career",
  },{
    label:"Contact",
    link: "/contact",
  }
]

const MOCK_PAGE_LINKS = {
  products: "/service#products",
  development: "/service#development",
  RnD: "/service#rd",
  consulting: "/service#consulting",

  media: "/media",

  vision: "/company#vision",
  team: "/company#team",
  value: "/company#value",
  company: "/company#company",
  career: "/career",
  contact: "/contact",
  lang: "/",
}

const SNS_LINKS = {
  github: "https://github.com/staketechnologies",
  twitter: "https://twitter.com/staketech",
  linkedin: "https://www.linkedin.com/company/staked-technologies/",
  medium: "https://medium.com/stake-technologies",
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navbarRoot: {
      backgroundColor: "transparent",
      backdropFilter: "blur(7px)",
    },
    grow: {
      flexGrow: 1,
    },
    title: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    mobileMenu: {
      backgroundColor: "black",
      color: "white",
    },
    mobileMediaLinks: {
      backgroundColor: "black",
      padding: theme.spacing(2),
      alignContent: "center",
    },
    nestedItem: {
      paddingLeft: theme.spacing(4),
    },
  })
)

interface MenuBtnProp {
  isMobile: boolean
}

const ServiceMenuButton: React.FC<MenuBtnProp> = ({ isMobile }) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {popupState => (
        <>
          {isMobile ? (
            <>
              <ListItem button onClick={handleClick}>
                <ListItemText primary="Service" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List
                  component="div"
                  disablePadding
                  className={classes.nestedItem}
                >
                  <PageLink to={MOCK_PAGE_LINKS.products}>
                    <ListItem button>
                      <ListItemText primary="Products" />
                    </ListItem>
                  </PageLink>
                  <PageLink to={MOCK_PAGE_LINKS.development}>
                    <ListItem button>
                      <ListItemText primary="Development" />
                    </ListItem>
                  </PageLink>
                  <PageLink to={MOCK_PAGE_LINKS.RnD}>
                    <ListItem button>
                      <ListItemText primary="R&D" />
                    </ListItem>
                  </PageLink>
                  <PageLink to={MOCK_PAGE_LINKS.consulting}>
                    <ListItem button>
                      <ListItemText primary="Consulting" />
                    </ListItem>
                  </PageLink>
                </List>
              </Collapse>
            </>
          ) : (
            <>
              <Button color="inherit" {...bindTrigger(popupState)}>
                Service
              </Button>
              <Menu {...bindMenu(popupState)}>
                <PageLink to={MOCK_PAGE_LINKS.products}>
                  <MenuItem>Products</MenuItem>
                </PageLink>
                <PageLink to={MOCK_PAGE_LINKS.development}>
                  <MenuItem>Development</MenuItem>
                </PageLink>
                <PageLink to={MOCK_PAGE_LINKS.RnD}>
                  <MenuItem>R&D</MenuItem>
                </PageLink>
                <PageLink to={MOCK_PAGE_LINKS.consulting}>
                  <MenuItem>Consulting</MenuItem>
                </PageLink>
              </Menu>
            </>
          )}
        </>
      )}
    </PopupState>
  )
}

const CompanyMenuButton: React.FC<MenuBtnProp> = ({ isMobile }) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {popupState => (
        <>
          {isMobile ? (
            <>
              <ListItem button onClick={handleClick}>
                <ListItemText primary="Company" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List
                  component="div"
                  disablePadding
                  className={classes.nestedItem}
                >
                  <PageLink to={MOCK_PAGE_LINKS.vision}>
                    <ListItem button>
                      <ListItemText primary="Vision" />
                    </ListItem>
                  </PageLink>
                  <PageLink to={MOCK_PAGE_LINKS.team}>
                    <ListItem button>
                      <ListItemText primary="Team" />
                    </ListItem>
                  </PageLink>
                  <PageLink to={MOCK_PAGE_LINKS.value}>
                    <ListItem button>
                      <ListItemText primary="Value" />
                    </ListItem>
                  </PageLink>
                  <PageLink to={MOCK_PAGE_LINKS.company}>
                    <ListItem button>
                      <ListItemText primary="Company" />
                    </ListItem>
                  </PageLink>
                </List>
              </Collapse>
            </>
          ) : (
            <>
              <Button color="inherit" {...bindTrigger(popupState)}>
                Company
              </Button>
              <Menu {...bindMenu(popupState)}>
                <PageLink to={MOCK_PAGE_LINKS.vision}>
                  <MenuItem>Vision</MenuItem>
                </PageLink>
                <PageLink to={MOCK_PAGE_LINKS.team}>
                  <MenuItem>Team</MenuItem>
                </PageLink>
                <PageLink to={MOCK_PAGE_LINKS.value}>
                  <MenuItem>Value</MenuItem>
                </PageLink>
                <PageLink to={MOCK_PAGE_LINKS.company}>
                  <MenuItem>Company</MenuItem>
                </PageLink>
              </Menu>
            </>
          )}
        </>
      )}
    </PopupState>
  )
}

export default function Navbar(props: any) {
  const classes = useStyles()

  const [isMobileMenu, setMobileMenu] = useState(false)

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return
    }

    setMobileMenu(open)
  }

  const mobileMenuId = "primary-menu-mobile"

  const renderMobileMenu = (
    <Drawer anchor="top" open={isMobileMenu} onClose={toggleDrawer(false)}>
      <List
        component="nav"
        className={classes.mobileMenu}
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            disableSticky={false}
            style={{ textAlign: "right" }}
          >
            <IconButton
              style={{ color: "white" }}
              onClick={toggleDrawer(false)}
            >
              <CloseIcon />
            </IconButton>
          </ListSubheader>
        }
      >
        {MOCK_PAGE_LINKS_ARRAY.map((item, index) =>
          <PageLink to={item.link} key={index}>
            <ListItem button>
              <ListItemText primary={item.label} />
            </ListItem>
          </PageLink>
        )}

        <PageLink to={MOCK_PAGE_LINKS.lang}>
          <ListItem button>
            <ListItemIcon>
              <LanguageIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="日本語" />
          </ListItem>
        </PageLink>
      </List>
      <div className={classes.mobileMediaLinks}>
        <Link target="_blank" rel="noopener noreferrer" href={SNS_LINKS.github}>
          <IconButton style={{ color: "white" }}>
            <GitHubIcon />
          </IconButton>
        </Link>

        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={SNS_LINKS.twitter}
        >
          <IconButton style={{ color: "white" }}>
            <TwitterIcon />
          </IconButton>
        </Link>

        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={SNS_LINKS.linkedin}
        >
          <IconButton style={{ color: "white" }}>
            <LinkedInIcon />
          </IconButton>
        </Link>
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={SNS_LINKS.medium}
        >
          <IconButton style={{ color: "white" }}>
            <MediumIcon width="75%" style={{fill:"currentcolor", }}/>
          </IconButton>
        </Link>
      </div>
    </Drawer>
  )

  return (
    <>
      <CssBaseline />
      <div className={classes.grow}>
        <AppBar position="static" className={classes.navbarRoot} style={props.isTopPage?{}:{backgroundColor: "white",color: "black"}}>
          <Toolbar>
            <PageLink
              to="/"
              style={{
                display: props.isTopPage ? "none" : "block",
                height: "90%",
                margin: "auto auto auto 0px",
              }}
            >
              <img src={StakeLogo} alt="logo" style={{ height: "100%" }} />
            </PageLink>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
            {/* <ServiceMenuButton isMobile={false} /> */}
            {MOCK_PAGE_LINKS_ARRAY.map((item,index) =>
              <PageLink to={item.link} key={index}>
                <Button color="inherit">{item.label}</Button>
              </PageLink>
            )}
            <PageLink to={MOCK_PAGE_LINKS.lang}>
              <Button color="inherit">
                <LanguageIcon />
                <Typography>English</Typography>
              </Button>
            </PageLink>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={toggleDrawer(true)}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
      </div>
    </>
  )
}
