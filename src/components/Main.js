import * as React from "react";
import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import LeftSection from "./LeftSection";
import VapiAssistant from "./RightSection";

export default function Main() {
  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        <Grid sx={{ paddingLeft: "0!important" }} item xs={6} md={4}>
          <LeftSection />
        </Grid>
        <Grid sx={{ paddingLeft: "0!important", textAlign:"right" }} item xs={6} md={8}>
          <VapiAssistant />
        </Grid>
      </Grid>
    </Container>
  );
}
