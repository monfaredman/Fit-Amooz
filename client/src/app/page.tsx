import * as React from "react";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <Box sx={{ width: "100%", display: "flex" }}>
      <Typography>سلام ایران</Typography>
      <br />
      <Typography className=" font-custom">سلام ایران</Typography>
    </Box>
  );
}
