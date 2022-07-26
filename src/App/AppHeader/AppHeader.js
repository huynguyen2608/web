import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import goto from "../../Constances/const";
import { Nav, NavItem, NavLink, Row, Col } from "reactstrap";
import Popover from "@mui/material/Popover";
import { Typography } from "@mui/material";
import "./AppHeader.scss";

const ResponsiveAppBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <MenuIcon
              style={{ marginTop: "8px" }}
              aria-describedby={id}
              onClick={handleClick}
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
            <div>
              <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Typography
                  sx={{ p: 1 }}
                  style={{ borderBottom: "1px solid", fontSize: "0.7rem" }}
                  onClick={() => goto("app/fiber")}
                >
                  LẮP CÁP QUANG FPT{" "}
                </Typography>
                <Typography
                  sx={{ p: 1 }}
                  style={{ borderBottom: "1px solid", fontSize: "0.7rem" }}
                  onClick={() => goto("app/tv")}
                >
                  TRUYỀN HÌNH FPT{" "}
                </Typography>
                <Typography
                  sx={{ p: 1 }}
                  style={{ borderBottom: "1px solid", fontSize: "0.7rem" }}
                  onClick={() => goto("app/camera")}
                >
                  FPT CAMERA
                </Typography>
                <Typography
                  sx={{ p: 1 }}
                  style={{ borderBottom: "1px solid", fontSize: "0.7rem" }}
                  onClick={() => goto("app/register")}
                >
                  ĐĂNG KÝ ONLINE
                </Typography>
                <Typography
                  sx={{ p: 1 }}
                  style={{ fontSize: "0.7rem" }}
                  onClick={() => goto("app/news")}
                >
                  TIN TỨC
                </Typography>
              </Popover>
            </div>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Row>
              <Col xs={1}>
                <img
                  style={{ cursor: "pointer" }}
                  width="140"
                  height="45"
                  src="https://internetfpttoanquoc.com/wp-content/uploads/2021/04/FPT_Telecom_logo.svg"
                  alt="Lắp Mạng Cáp Quang FPT"
                  onClick={() => goto("app/home")}
                />
              </Col>
              <Col xs={11}>
                <Nav className="option-navbar ml-70">
                  <NavItem>
                    <NavLink
                      style={{ color: "white", cursor: "pointer" }}
                      className="option-item"
                      onClick={() => goto("app/fiber")}
                    >
                      {" "}
                      LẮP CÁP QUANG FPT
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style={{ color: "white", cursor: "pointer" }}
                      className="option-item"
                      onClick={() => goto("app/tv")}
                    >
                      {" "}
                      TRUYỀN HÌNH FPT
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style={{ color: "white", cursor: "pointer" }}
                      className="option-item"
                      onClick={() => goto("app/camera")}
                    >
                      {" "}
                      FPT CAMERA
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style={{ color: "white", cursor: "pointer" }}
                      className="option-item"
                      onClick={() => goto("app/register")}
                    >
                      {" "}
                      ĐĂNG KÝ ONLINE
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      style={{ color: "white", cursor: "pointer" }}
                      className="option-item"
                      onClick={() => goto("app/news")}
                    >
                      {" "}
                      TIN TỨC
                    </NavLink>
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
