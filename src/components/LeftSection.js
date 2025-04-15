import * as React from "react";
import { styled } from "@mui/system";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Image1 from "../sample.avif";
import UserList from "./UserList";

export default function LeftSection() {
  const LogoImage = styled("img")({
    borderRadius: "5%",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  });

  return (
    <div>
      <div className="parentImg">
        <LogoImage src={Image1} alt="Logo" />
      </div>
      <div style={{ margin: "20px 0px", textAlign: "left" }}>
        <b style={{ color: "var(--tint-color)" }}>Hosted By</b>
        <hr
          style={{ border: 0, height: "1px", backgroundColor: "#00518714" }}
        />
        <UserList />
        <List sx={{ margin: "10px 0px", color: "var(--black-base-color)" }}>
          <ListItem
            sx={{
              paddingLeft: "0!important",
            }}
          >
            <ListItemText
              sx={{ fontSize: "12px !important" }}
              primary="Contact the Host"
            />
          </ListItem>
          <ListItem
            sx={{
              paddingLeft: "0!important",
            }}
          >
            <ListItemText
              sx={{ fontSize: "12px!important" }}
              primary="Report Event"
            />
          </ListItem>
        </List>
      </div>
    </div>
  );
}
