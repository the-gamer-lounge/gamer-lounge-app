import * as React from "react"
import { useState } from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Avatar from "@mui/material/Avatar"
import Tooltip from "@mui/material/Tooltip"
import MenuItem from "@mui/material/MenuItem"
import SportsEsportsIcon from "@mui/icons-material/SportsEsports"
import SearchBar from "../components/SearchBar"
import HomeIcon from "@mui/icons-material/Home"
import ChatIcon from "@mui/icons-material/Chat"

const Header = ({
  logged_in,
  sign_out_route,
  new_user_route,
  sign_in_route,
  games,
  foundGames,
  handleSearch,
  searchTerm,
}) => {
  const [anchorElNav, setAnchorElNav] = useState(null)
  const [anchorElUser, setAnchorElUser] = useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <AppBar
      position="fixed"
      sx={{ bgcolor: "#020307" }}
      className="mui-app-bar"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* This is the DESKTOP view. It will not show on mobile views. */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                {/* This is the MOBILE menu. It is not shown on desktop views. */}
                <div className="flex-column mobile-menu">
                  <a href="/">
                    <span className="flex-center">&nbsp;Home</span>
                  </a>
                  <a href="/gameindex">
                    <span className="flex-center">&nbsp;Games</span>
                  </a>
                  {logged_in && (
                    <a href="/reviewprotectedindex">
                      <span className="flex-center">&nbsp;My Reviews</span>
                    </a>
                  )}
                  {logged_in && <a href={sign_out_route}>Log Out</a>}
                  {!logged_in && <a href={new_user_route}>Sign Up</a>}
                  {!logged_in && <a href={sign_in_route}>Sign In</a>}
                </div>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {/* This is the DESKTOP menu. It is not shown on mobile views. */}
            <div className="flex-row">
              <a href="/">
                <span className="flex-center">
                  <HomeIcon />
                  &nbsp;Home
                </span>
              </a>
              <a href="/gameindex">
                <span className="flex-center">
                  <SportsEsportsIcon />
                  &nbsp;Games
                </span>
              </a>
              {logged_in && (
                <a href="/reviewprotectedindex">
                  <span className="flex-center">
                    <ChatIcon />
                    &nbsp;My Reviews
                  </span>
                </a>
              )}
              {logged_in && <a href={sign_out_route}>Log Out</a>}
            </div>
          </Box>
          <Box sx={{ marginRight: "2.4rem" }}>
            <SearchBar
              games={games}
              foundGames={foundGames}
              handleSearch={handleSearch}
              searchTerm={searchTerm}
            />
          </Box>
          <div className="flex-row">
            {!logged_in && <a href={sign_in_route}>Sign In</a>}
            {!logged_in && <a href={new_user_route}>Sign Up</a>}
          </div>
          {logged_in && (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  {/* This is the menu that appears when the user clicks their icon. */}
                  <Typography textAlign="center">
                    <a href={sign_out_route}>Log Out</a>
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Header
