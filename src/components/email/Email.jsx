import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import {
  Button,
  Paper,
  Badge,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Box,
  Typography,
  Input,
  InputAdornment,
  TextareaAutosize,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import "./email.css";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import MarkChatReadOutlinedIcon from "@mui/icons-material/MarkChatReadOutlined";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import NotInterestedOutlinedIcon from "@mui/icons-material/NotInterestedOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import Content from "./Content";
import { Col, Row } from "react-bootstrap";
import BrokenImageOutlinedIcon from "@mui/icons-material/BrokenImageOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";

const EmailUI = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedOption, setSelectedOption] = useState("Option 1");
  const [inputValue, setInputValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [message, setMessage] = useState("");

  const handleToChange = (event) => {
    setToValue(event.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (option) => {
    setSelectedOption(option);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handleSelectChange = (event) => {
    setSelectedItems(event.target.value);
  };

  const handleConfirm = () => {
    // Handle the selected items here
    console.log("Selected items:", selectedItems);
    handleClose();
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="root">
      <div
        className="sidebar"
        style={{ overflow: "hidden", marginTop: "60px" }}
      >
        <Paper style={{ height: "100%", overflowY: "auto" }}>
          <Button
            component="span"
            variant="contained"
            style={{
              marginBottom: "8px",
              marginTop: "15px",
              backgroundColor: "rgb(160, 57, 228)",
              marginRight: "15px",
            }}
            startIcon={<EditOutlinedIcon />}
            onClick={handleOpen}
          >
            Compose
          </Button>
          <List className="sidebar-list listItem-text">
            <ListItem button className="listItem">
              <ChatBubbleOutlineOutlinedIcon className="icon" />
              <ListItemText primary="Inbox" />
            </ListItem>
            <ListItem button className="listItem">
              <MarkChatReadOutlinedIcon className="icon" />
              <ListItemText primary="Sent" />
            </ListItem>
            <ListItem button className="listItem">
              <StarBorderPurple500OutlinedIcon className="icon" />
              <ListItemText primary="Important" />
            </ListItem>
            <ListItem button className="listItem">
              <InsertDriveFileOutlinedIcon className="icon" />
              <ListItemText primary="Drafts" />
            </ListItem>
            <ListItem button className="listItem">
              <NotInterestedOutlinedIcon className="icon" />
              <ListItemText primary="Spam" />
            </ListItem>
            <ListItem button className="listItem">
              <DeleteOutlinedIcon className="icon" />
              <ListItemText primary="Trash" />
            </ListItem>
          </List>
          <hr />
          <ListItem className="listItem-text" style={{ alignItems: "center" }}>
            <ListItemText primary="Conversation" />
          </ListItem>
          <ListItem button className="listItem">
            <Badge
              color="success"
              overlap="circular"
              badgeContent=" "
              variant="dot"
              anchorOrigin={{ horizontal: "left", vertical: "top" }}
            >
              <Avatar
                src="/images/avatar1.jpg"
                sx={{
                  backgroundColor: "#287405",
                  marginRight: "4px",
                }}
              />
            </Badge>
            <ListItemText primary="Miftah Jaman" />
          </ListItem>
          <ListItem button className="listItem">
            <Badge
              color="secondary"
              overlap="circular"
              badgeContent=" "
              variant="dot"
              anchorOrigin={{ horizontal: "left", vertical: "top" }}
            >
              <Avatar
                src="/images/avatar1.jpg"
                sx={{
                  backgroundColor: "#287405",
                  // marginLeft: "4px",
                  marginRight: "4px",
                }}
              />
            </Badge>
            <ListItemText primary="Miftah Jaman" />
          </ListItem>
          <ListItem button className="listItem">
            <Badge
              color="success"
              overlap="circular"
              badgeContent=" "
              variant="dot"
              anchorOrigin={{ horizontal: "left", vertical: "top" }}
            >
              <Avatar
                alt="Kamal"
                src="/images/avatar/3.jpg"
                sx={{
                  backgroundColor: "#287405",
                  // marginLeft: "4px",
                  marginRight: "4px",
                }}
              />
            </Badge>
            <ListItemText primary="Kamal Jaman" />
          </ListItem>
        </Paper>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              width: "70%",
            },
          }}
          BackdropProps={{
            style: {
              backgroundColor: "transparent",
            },
          }}
        >
          <DialogTitle>New Message</DialogTitle>
          <DialogContent>
            <FormControl
              fullWidth
              style={{ marginBottom: 10 }}
              variant="standard"
              className="text-filed"
              sx={{
                color: "rgb(160, 57, 228)", // Text color
                "& .MuiInput-underline:before": {
                  borderBottom: "1px solid rgba(0, 0, 0, 0.42)", // Original underline color
                },
                "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                  borderBottom: "1px solid rgb(160, 57, 228)", // Underline color on hover
                },
                "& .MuiInput-underline:after": {
                  borderBottom: "1px solid rgb(160, 57, 228)", // Underline color when focused
                },
              }}
            >
              <Input
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">To</InputAdornment>
                }
              />
            </FormControl>
            <FormControl
              fullWidth
              style={{ marginBottom: 10 }}
              variant="standard"
              sx={{
                color: "rgb(160, 57, 228)", // Text color
                "& .MuiInput-underline:before": {
                  borderBottom: "1px solid rgba(0, 0, 0, 0.42)", // Original underline color
                },
                "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                  borderBottom: "1px solid rgb(160, 57, 228)", // Underline color on hover
                },
                "& .MuiInput-underline:after": {
                  borderBottom: "1px solid rgb(160, 57, 228)", // Underline color when focused
                },
              }}
            >
              <Input
                id="input-with-icon-adornment"
                startAdornment={
                  <InputAdornment position="start">Subject</InputAdornment>
                }
              />
            </FormControl>
            <Box mt={2} pb={10}>
              <TextareaAutosize
                rowsMin={10}
                value={message}
                onChange={handleMessageChange}
                style={{
                  width: "100%",
                  padding: "2px",
                  border: "none",
                  outline: "none",
                  resize: "none",
                }}
              />
            </Box>
            <Row>
              <Col
                xs={4}
                className="listItem-text"
                style={{ textAlign: "left" }}
              >
                <BrokenImageOutlinedIcon style={{ fontSize: "18px" }} />
                <SentimentSatisfiedAltOutlinedIcon
                  style={{ fontSize: "18px" }}
                />
                <AttachFileOutlinedIcon style={{ fontSize: "18px" }} />
              </Col>
              <Col xs={8} className="text-end fixed">
                <Button
                  component="span"
                  variant="contained"
                  style={{
                    marginBottom: "8px",
                    marginRight: "4px",
                    backgroundColor: "rgb(160, 57, 228)",
                  }}
                  onClick={handleConfirm}
                >
                  Cancel
                </Button>
                <Button
                  component="span"
                  variant="contained"
                  style={{
                    marginBottom: "8px",
                    backgroundColor: "rgb(160, 57, 228)",
                  }}
                  onClick={handleConfirm}
                >
                  Send
                </Button>
              </Col>
            </Row>
          </DialogContent>
        </Dialog>
      </div>
      <main className="content">
        <Content />
      </main>
    </div>
  );
};

export default EmailUI;
