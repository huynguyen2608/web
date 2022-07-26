import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import goto from "../../Constances/const";
import { Nav, NavItem,NavLink , Row, Col} from "reactstrap";

const pages = ["Products", "Pricing", "Blog"];

const ResponsiveAppBar = () => {
  // const [anchorElNav, setAnchorElNav] =
  //   (React.useState < null) | (HTMLElement > null);
  // const [anchorElUser, setAnchorElUser] =
  //   (React.useState < null) | (HTMLElement > null);

  // const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElNav(event.currentTarget);
  // };
  // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  // const handleCloseNavMenu = () => {
  //   setAnchorElNav(null);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <MenuIcon 
              style={{ marginTop: "8px" }} 
            />
            <img
              style={{ display: "flex", margin: "0 auto" }}
              width="100"
              height="40"
              src="https://internetfpttoanquoc.com/wp-content/uploads/2021/04/FPT_Telecom_logo.svg"
              class="header_logo header-logo"
              alt="Lắp Mạng Cáp Quang FPT"
              onClick={() => goto("app/home")}
            />
             
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Row>
              <Col xs={2}>
                <img
                  style={{ cursor:"pointer" }}
                  width="140"
                  height="45"
                  src="https://internetfpttoanquoc.com/wp-content/uploads/2021/04/FPT_Telecom_logo.svg"
                  alt="Lắp Mạng Cáp Quang FPT"
                  onClick={() => goto("app/home")}
                />
              </Col>
              <Col xs={10}>
                <Nav className='option-navbar ml-70'>
                  <NavItem>
                      <NavLink style={{color:"white", cursor:"pointer"}} className='option-item' onClick={() => goto("app/fiber")}> LẮP CÁP QUANG FPT</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink  style={{color:"white", cursor:"pointer"}} className='option-item' onClick={() => goto("app/tv")}> TRUYỀN HÌNH FPT</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink  style={{color:"white", cursor:"pointer"}} className='option-item' onClick={() => goto("app/camera")}> FPT CAMERA</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink  style={{color:"white", cursor:"pointer"}} className='option-item' onClick={() => goto("app/register")}> ĐĂNG KÝ ONLINE</NavLink>
                  </NavItem>
                  <NavItem>
                      <NavLink  style={{color:"white", cursor:"pointer"}} className='option-item' onClick={() => goto("app/news")}> TIN TỨC</NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
