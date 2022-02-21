import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import Card from "@mui/material/Card";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

import Chip from "@mui/material/Chip";
import { Box, styled } from "@mui/system";

const style = {
  width: "100%",
  //   maxWidth: 360,
  bgcolor: "background.paper"
};

// 自动定义Chip
const CustomizedChip = styled(Chip)(({ theme }) => ({
  margin: 5,
  marginRight: 1
}));

export default function CustomizedInputBase() {
  return (
    <Card sx={{ padding: 1, border: "none", boxShadow: "none" }}>
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center" }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="输入您想搜索的问题"
          inputProps={{ "aria-label": "search your question" }}
        />
        <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <Paper sx={{ marginTop: 2 }}>
        <ListItem button>
          <Typography variant="h6" component="div" gutterBottom>
            阅读推荐
            {/* recommend */}
          </Typography>
        </ListItem>
        <Divider />
        <List sx={style} component="nav" aria-label="mailbox folders">
          <ListItem button>
            引用官方原话，Jotai 是一个原始且灵活的 React 状态管理库
            {/* <ListItemText primary="" /> */}
          </ListItem>
          <Divider />
          <ListItem button divider>
            <ListItemText primary="Drafts" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Trash" />
          </ListItem>
          <Divider light />
          <ListItem button>
            <ListItemText primary="Spam" />
          </ListItem>
        </List>
      </Paper>
      <Paper sx={{ marginTop: 2 }}>
        <ListItem button>
          <Typography variant="h6" component="div" gutterBottom>
            SKILL
          </Typography>
        </ListItem>
        <Box sx={{ paddingRight: 2, paddingLeft: 2, paddingBottom: 2 }}>
          <CustomizedChip label="HTML" />
          <CustomizedChip label="CSS-SK" variant="outlined" />
          <CustomizedChip label="JAVASCRIPT-SK" variant="outlined" />
          <CustomizedChip label="typescript Outlined" variant="outlined" />
          <CustomizedChip label="golang Outlined" variant="outlined" />
          <CustomizedChip label="pyth Outlined" variant="outlined" />
        </Box>
      </Paper>
    </Card>
  );
}
