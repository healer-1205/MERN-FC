import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container
} from "@material-ui/core";

export default function Footer() {
  return (
      <AppBar position="static" color="primary" style={{marginTop: "3%"}}>
        <Container maxWidth="md" style={{marginLeft: "0px"}}>
          <Toolbar>
            <Typography variant="body1" color="inherit">
              © 2021 Tomas Jefferson
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
  )
}