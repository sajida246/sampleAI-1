// src/Header.js
import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { styled } from "@mui/system";
import Logo from "../logo.svg"; // Replace with your logo path
import "../App.css";

const ToolbarContainer = styled(Toolbar)({
  boxShadow: "none!important",
  display: "flex",
  justifyContent: "space-between",
  background: "var(--page-bg-color)",
  color: "var(--font-color-header)",
});

const LogoImage = styled("img")({
  maxHeight: 40,
});

const RightSection = styled(Box)({
  display: "flex",
  alignItems: "center",
});

const DateTime = styled(Typography)({
  marginRight: "16px", // theme.spacing(2) equivalent
});

function Header() {
  const currentDateTime = new Date().toLocaleString();

  return (
    <AppBar className="toolbarContainer" position="static">
      <ToolbarContainer>
        <LogoImage src={Logo} alt="Logo" />
        <RightSection>
          <DateTime variant="body1">{currentDateTime}</DateTime>
          <Button
            sx={{
              backgroundColor: "lightgrey",
              color: "black",
              borderRadius: "20px",
              padding: "6px 16px",

              "&:hover": {
                backgroundColor: "grey",
                color: "white",
              },
            }}
          >
            Sign In
          </Button>
        </RightSection>
      </ToolbarContainer>
    </AppBar>
  );
}

export default Header;
