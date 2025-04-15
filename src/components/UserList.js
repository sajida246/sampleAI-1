// src/UserList.js
import React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Box,
} from "@mui/material";
import AvatarGroup from "@mui/material/AvatarGroup";
import { styled } from "@mui/system";

const users = [
  {
    id: 1,
    name: "John Doe",
    avatar:
      "https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=112,height=112/avatars/c9/2851bab0-2212-4bab-ba26-35c39157774b",
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar:
      "https://cdn.lu.ma/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=112,height=112/avatars-default/avatar_43.png",
  },
  {
    id: 3,
    name: "Alice Johnson",
    avatar:
      "https://cdn.lu.ma/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=112,height=112/avatars-default/avatar_0.png",
  },
];

const UserListContainer = styled(Box)({
  width: "100%",
  color: "var(--primary-color)",
});

const UserList = () => {
  return (
    <UserListContainer>
      <List>
        {users.map((user) => (
          <ListItem
            key={user.id}
            sx={{ paddingLeft: "0px!important", paddingTop: "2px!important" }}
          >
            <ListItemAvatar sx={{ minWidth: 40 }}>
              <Avatar
                sx={{ width: 30, height: 30 }}
                src={user.avatar}
                alt={user.name}
              />
            </ListItemAvatar>
            <ListItemText sx={{ fontWeight: 900 }} primary={user.name} />
          </ListItem>
        ))}
      </List>
      <b style={{ color: "var(--tint-color)" }}>54 Going</b>
      <hr style={{ border: 0, height: "1px", backgroundColor: "#00518714" }} />

      <AvatarGroup
        total={24}
        sx={{ justifyContent: "flex-end", margin: "10px 0px" }}
        className="small-avatar-group"
      >
        <Avatar
          alt="Remy Sharp"
          src="https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=112,height=112/avatars/c9/2851bab0-2212-4bab-ba26-35c39157774b"
        />
        <Avatar
          alt="Travis Howard"
          src="https://cdn.lu.ma/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=112,height=112/avatars-default/avatar_43.png"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://cdn.lu.ma/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=112,height=112/avatars-default/avatar_0.png"
        />
        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
      </AvatarGroup>
      <span
        style={{
          color: "var(--tint-color)",
          fontSize: "15px",
        }}
      >
        Vitali Karpeichyk, Juan Manuel Barrero and 52 others
      </span>
    </UserListContainer>
  );
};

export default UserList;
