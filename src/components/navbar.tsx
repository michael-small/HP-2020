import React, { useState } from "react"
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import MenuItem from "@material-ui/core/MenuItem"
import Menu from "@material-ui/core/Menu"
import MenuIcon from "@material-ui/icons/Menu"
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
const MOCK_PAGE_LINKS = {
  products: "",
  development: "",
  RnD: "",
  consulting: "",

  media: "/media",

  vision: "",
  team: "",
  value: "",
  company: "",
  career: "",
  contact: "",
  lang: "",
}

const SNS_LINKS = {
  github: "https://github.com/staketechnologies",
  twitter: "https://twitter.com/staketech",
  linkedin: "",
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

const pageRedirect = (path: string) => {
  console.log("going to " + path)
}

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
                  <ListItem
                    button
                    onClick={() => pageRedirect(MOCK_PAGE_LINKS.products)}
                  >
                    <ListItemText primary="Products" />
                  </ListItem>
                  <ListItem
                    button
                    onClick={() => pageRedirect(MOCK_PAGE_LINKS.development)}
                  >
                    <ListItemText primary="Development" />
                  </ListItem>
                  <ListItem
                    button
                    onClick={() => pageRedirect(MOCK_PAGE_LINKS.RnD)}
                  >
                    <ListItemText primary="R&D" />
                  </ListItem>
                  <ListItem
                    button
                    onClick={() => pageRedirect(MOCK_PAGE_LINKS.consulting)}
                  >
                    <ListItemText primary="Consulting" />
                  </ListItem>
                </List>
              </Collapse>
            </>
          ) : (
            <>
              <Button color="inherit" {...bindTrigger(popupState)}>
                Service
              </Button>
              <Menu {...bindMenu(popupState)}>
                <MenuItem
                  onClick={() => pageRedirect(MOCK_PAGE_LINKS.products)}
                >
                  Products
                </MenuItem>
                <MenuItem
                  onClick={() => pageRedirect(MOCK_PAGE_LINKS.development)}
                >
                  Development
                </MenuItem>
                <MenuItem onClick={() => pageRedirect(MOCK_PAGE_LINKS.RnD)}>
                  R&D
                </MenuItem>
                <MenuItem
                  onClick={() => pageRedirect(MOCK_PAGE_LINKS.consulting)}
                >
                  Consulting
                </MenuItem>
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
                  <ListItem
                    button
                    onClick={() => pageRedirect(MOCK_PAGE_LINKS.vision)}
                  >
                    <ListItemText primary="Vision" />
                  </ListItem>
                  <ListItem
                    button
                    onClick={() => pageRedirect(MOCK_PAGE_LINKS.team)}
                  >
                    <ListItemText primary="Team" />
                  </ListItem>
                  <ListItem
                    button
                    onClick={() => pageRedirect(MOCK_PAGE_LINKS.value)}
                  >
                    <ListItemText primary="Value" />
                  </ListItem>
                  <ListItem
                    button
                    onClick={() => pageRedirect(MOCK_PAGE_LINKS.company)}
                  >
                    <ListItemText primary="Company" />
                  </ListItem>
                </List>
              </Collapse>
            </>
          ) : (
            <>
              <Button color="inherit" {...bindTrigger(popupState)}>
                Company
              </Button>
              <Menu {...bindMenu(popupState)}>
                <MenuItem onClick={() => pageRedirect(MOCK_PAGE_LINKS.vision)}>
                  Vision
                </MenuItem>
                <MenuItem onClick={() => pageRedirect(MOCK_PAGE_LINKS.team)}>
                  Team
                </MenuItem>
                <MenuItem onClick={() => pageRedirect(MOCK_PAGE_LINKS.value)}>
                  Value
                </MenuItem>
                <MenuItem onClick={() => pageRedirect(MOCK_PAGE_LINKS.company)}>
                  Company
                </MenuItem>
              </Menu>
            </>
          )}
        </>
      )}
    </PopupState>
  )
}

export default function Navbar() {
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
        <ServiceMenuButton isMobile={true} />
        <ListItem button onClick={() => pageRedirect(MOCK_PAGE_LINKS.media)}>
          <ListItemText primary="Media" />
        </ListItem>
        <CompanyMenuButton isMobile={true} />
        <ListItem button onClick={() => pageRedirect(MOCK_PAGE_LINKS.career)}>
          <ListItemText primary="Career" />
        </ListItem>
        <ListItem button onClick={() => pageRedirect(MOCK_PAGE_LINKS.contact)}>
          <ListItemText primary="Contact" />
        </ListItem>
        <ListItem button onClick={() => pageRedirect(MOCK_PAGE_LINKS.lang)}>
          <ListItemIcon>
            <LanguageIcon style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="日本語" />
        </ListItem>
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
      </div>
    </Drawer>
  )

  return (
    <>
      <CssBaseline />
      <div className={classes.grow}>
        <AppBar position="static" className={classes.navbarRoot}>
          <Toolbar>
            {/* <Typography className={classes.title} variant="h6" noWrap>
              Stake Technology
            </Typography> */}
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <ServiceMenuButton isMobile={false} />
              <Button
                color="inherit"
                onClick={() => pageRedirect(MOCK_PAGE_LINKS.media)}
              >
                Media
              </Button>
              <CompanyMenuButton isMobile={false} />
              <Button
                color="inherit"
                onClick={() => pageRedirect(MOCK_PAGE_LINKS.career)}
              >
                Career
              </Button>
              <Button
                color="inherit"
                onClick={() => pageRedirect(MOCK_PAGE_LINKS.contact)}
              >
                Contact
              </Button>
              <Button
                color="inherit"
                onClick={() => pageRedirect(MOCK_PAGE_LINKS.lang)}
              >
                <LanguageIcon />
                <Typography>English</Typography>
              </Button>
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
