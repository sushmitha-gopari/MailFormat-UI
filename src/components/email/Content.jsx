import React, { useState, useEffect, useRef } from "react";
import Container from "@mui/material/Container";
import {
  Button,
  Paper,
  Box,
  Checkbox,
  IconButton,
  Menu,
  MenuItem,
  Dialog,
  Popover,
  Typography,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import NotInterestedOutlinedIcon from "@mui/icons-material/NotInterestedOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Badge, Avatar } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import "./email.css";
import ReplyIcon from "@mui/icons-material/Reply";
import LocalPrintshopOutlinedIcon from "@mui/icons-material/LocalPrintshopOutlined";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import Images from "./Images";

const Content = ({ imageUrls }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOption, setSelectedOption] = useState("Option 1");
  const [open, setOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCursorOnPaper, setIsCursorOnPaper] = useState(false);
  const [boxClicked, setBoxClicked] = useState(false);

  const handleBoxClick = (event) => {
    setOpen(true);
    setBoxClicked(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const paperRef = useRef(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (option) => {
    setSelectedOption(option);
    setAnchorEl(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (paperRef.current) {
        setIsScrolled(paperRef.current.scrollTop > 0);
      }
    };

    if (paperRef.current) {
      paperRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (paperRef.current) {
        paperRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <>
      <Container
        className={`fixed-container ${isScrolled ? "scrolled" : ""}`}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "fixed",
          zIndex: 1,
          width: "100%",
        }}
      >
        <Box
          width={50}
          height={35}
          display="flex"
          sx={{
            boxShadow: "0px 0px 1px 1px rgba(0, 0, 0, 0.2)",
            borderRadius: "4px",
            marginLeft: "0px",
          }}
        >
          <Checkbox className="custom-checkbox" />
          <IconButton
            onClick={handleMenuClick}
            sx={{ padding: 0, marginLeft: -2 }}
          >
            <ArrowDropDownIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => handleMenuItemClick("Option 1")}>
              All
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick("Option 2")}>
              None
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick("Option 3")}>
              Read
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick("Option 3")}>
              Unread
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick("Option 3")}>
              Starred
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick("Option 3")}>
              Unstarred
            </MenuItem>
          </Menu>
        </Box>
        <Box display="flex" style={{ marginLeft: "200px" }}>
          <Box
            width={95}
            height={35}
            my={3}
            display="flex"
            alignItems="center"
            p={2}
            sx={{
              boxShadow: "0px 0px 1px 1px rgba(0, 0, 0, 0.2)",
              borderRadius: "4px 0px 0px 4px",
              marginRight: "3px",
            }}
            className="listItem-text"
          >
            <DraftsOutlinedIcon sx={{ padding: 0, marginRight: "2px" }} />
            <Typography>Read</Typography>
          </Box>
          <Box
            width={95}
            height={35}
            my={3}
            display="flex"
            alignItems="center"
            p={2}
            sx={{
              boxShadow: "0px 0px 1px 1px rgba(0, 0, 0, 0.2)",
              marginRight: "3px",
            }}
            className="listItem-text"
          >
            <NotInterestedOutlinedIcon
              sx={{ padding: 0, marginRight: "2px" }}
            />{" "}
            <Typography>Spam</Typography>
          </Box>
          <Box
            width={95}
            height={35}
            my={3}
            display="flex"
            alignItems="center"
            className="listItem-text"
            p={2}
            sx={{
              boxShadow: "0px 0px 1px 1px rgba(0, 0, 0, 0.2)",
              borderRadius: "0px 4px 4px 0px",
              marginRight: "3px",
            }}
          >
            <DeleteOutlinedIcon sx={{ padding: 0, marginRight: "2px" }} />{" "}
            <Typography>Delete</Typography>
          </Box>
        </Box>
      </Container>
      <div
        className={`box-cards ${
          boxClicked === "currentBox" ? "text-color-change" : ""
        }`}
      >
        <Box
          height={150}
          width={580}
          my={4}
          sx={{
            boxShadow: "0px 0px 1px 1px rgba(0, 0, 0, 0.2)",
            borderRadius: "4px",
            padding: "15px",
            position: "relative",
            cursor: "pointer",
            marginLeft: "4px",
          }}
          onClick={handleBoxClick}
        >
          <Row>
            <Col xs={12} sm={1} style={{ marginTop: "10px" }}>
              <Checkbox className="custom-checkbox" />
            </Col>
            <Col xs={12} sm={1} style={{ marginTop: "10px" }}>
              <Avatar alt="User Avatar" src="/images/avatar1.jpg" />
            </Col>
            <Col
              xs={12}
              sm={8}
              style={{ marginTop: "10px", textAlign: "left" }}
            >
              {/* Add your message content here */}
              <h5>Ayub AI Ansari</h5>
              <h6>Please open this message</h6>
              <p>
                It is a long established fact that a reader will be distracted.
                The point of using like readable English.
              </p>
            </Col>
            <Col xs={12} sm={2} className="listItem-text text-end fixed">
              <p>05:43 AM</p>
              <div>
                <IconButton aria-label="star">
                  <StarOutlinedIcon sx={{ color: "rgb(255,174,66)" }} />
                </IconButton>
              </div>
              <div>
                <IconButton aria-label="pin">
                  <AttachFileOutlinedIcon className="listItem-text" />
                </IconButton>
              </div>
            </Col>
          </Row>
        </Box>
        <Box
          height={150}
          width={580}
          my={4}
          sx={{
            boxShadow: "0px 0px 1px 1px rgba(0, 0, 0, 0.2)",
            borderRadius: "4px",
            padding: "15px",
            position: "relative",
            cursor: "pointer",
            marginLeft: "4px",
          }}
          onClick={handleBoxClick}
        >
          <Row>
            <Col xs={12} sm={1} style={{ marginTop: "10px" }}>
              <Checkbox className="custom-checkbox" />
            </Col>
            <Col xs={12} sm={1} style={{ marginTop: "10px" }}>
              <Avatar alt="User Avatar" src="/images/avatar1.jpg" />
            </Col>
            <Col
              xs={12}
              sm={8}
              style={{ marginTop: "10px", textAlign: "left" }}
            >
              {/* Add your message content here */}
              <h5>Ayub AI Ansari</h5>
              <h6>Please open this message</h6>
              <p>
                It is a long established fact that a reader will be distracted.
                The point of using like readable English.
              </p>
            </Col>
            <Col xs={12} sm={2} className="listItem-text text-end fixed">
              <p>05:43 AM</p>
              <div>
                <IconButton aria-label="star">
                  <StarOutlinedIcon sx={{ color: "rgb(255,174,66)" }} />
                </IconButton>
              </div>
              <div>
                <IconButton aria-label="pin">
                  <AttachFileOutlinedIcon className="listItem-text" />
                </IconButton>
              </div>
            </Col>
          </Row>
        </Box>
        <Box
          height={150}
          width={580}
          my={4}
          sx={{
            boxShadow: "0px 0px 1px 1px rgba(0, 0, 0, 0.2)",
            borderRadius: "4px",
            padding: "15px",
            position: "relative",
            cursor: "pointer",
            marginLeft: "4px",
          }}
          onClick={handleBoxClick}
        >
          <Row>
            <Col xs={12} sm={1} style={{ marginTop: "10px" }}>
              <Checkbox className="custom-checkbox" />
            </Col>
            <Col xs={12} sm={1} style={{ marginTop: "10px" }}>
              <Avatar alt="User Avatar" src="/images/avatar1.jpg" />
            </Col>
            <Col
              xs={12}
              sm={8}
              style={{ marginTop: "10px", textAlign: "left" }}
            >
              {/* Add your message content here */}
              <h5>Ayub AI Ansari</h5>
              <h6>Please open this message</h6>
              <p>
                It is a long established fact that a reader will be distracted.
                The point of using like readable English.
              </p>
            </Col>
            <Col xs={12} sm={2} className="listItem-text text-end fixed">
              <p>05:43 AM</p>
              <div>
                <IconButton aria-label="star">
                  <StarOutlinedIcon sx={{ color: "rgb(255,174,66)" }} />
                </IconButton>
              </div>
              <div>
                <IconButton aria-label="pin">
                  <AttachFileOutlinedIcon className="listItem-text" />
                </IconButton>
              </div>
            </Col>
          </Row>
        </Box>
        <Box
          height={150}
          width={580}
          my={4}
          sx={{
            boxShadow: "0px 0px 1px 1px rgba(0, 0, 0, 0.2)",
            borderRadius: "4px",
            padding: "15px",
            position: "relative",
            cursor: "pointer",
            marginLeft: "4px",
          }}
          onClick={handleBoxClick}
        >
          <Row>
            <Col xs={12} sm={1} style={{ marginTop: "10px" }}>
              <Checkbox className="custom-checkbox" />
            </Col>
            <Col xs={12} sm={1} style={{ marginTop: "10px" }}>
              <Avatar alt="User Avatar" src="/images/avatar1.jpg" />
            </Col>
            <Col
              xs={12}
              sm={8}
              style={{ marginTop: "10px", textAlign: "left" }}
            >
              {/* Add your message content here */}
              <h5>Ayub AI Ansari</h5>
              <h6>Please open this message</h6>
              <p>
                It is a long established fact that a reader will be distracted.
                The point of using like readable English.
              </p>
            </Col>
            <Col xs={12} sm={2} className="listItem-text text-end fixed">
              <p>05:43 AM</p>
              <div>
                <IconButton aria-label="star">
                  <StarOutlinedIcon sx={{ color: "rgb(255,174,66)" }} />
                </IconButton>
              </div>
              <div>
                <IconButton aria-label="pin">
                  <AttachFileOutlinedIcon className="listItem-text" />
                </IconButton>
              </div>
            </Col>
          </Row>
        </Box>
        <Box
          height={150}
          width={580}
          my={4}
          sx={{
            boxShadow: "0px 0px 1px 1px rgba(0, 0, 0, 0.2)",
            borderRadius: "4px",
            padding: "15px",
            position: "relative",
            cursor: "pointer",
            marginLeft: "4px",
          }}
          onClick={handleBoxClick}
        >
          <Row>
            <Col xs={12} sm={1} style={{ marginTop: "10px" }}>
              <Checkbox className="custom-checkbox" />
            </Col>
            <Col xs={12} sm={1} style={{ marginTop: "10px" }}>
              <Avatar alt="User Avatar" src="/images/avatar1.jpg" />
            </Col>
            <Col
              xs={12}
              sm={8}
              style={{ marginTop: "10px", textAlign: "left" }}
            >
              {/* Add your message content here */}
              <h5>Ayub AI Ansari</h5>
              <h6>Please open this message</h6>
              <p>
                It is a long established fact that a reader will be distracted.
                The point of using like readable English.
              </p>
            </Col>
            <Col xs={12} sm={2} className="listItem-text text-end fixed">
              <p>05:43 AM</p>
              <div>
                <IconButton aria-label="star">
                  <StarOutlinedIcon sx={{ color: "rgb(255,174,66)" }} />
                </IconButton>
              </div>
              <div>
                <IconButton aria-label="pin">
                  <AttachFileOutlinedIcon className="listItem-text" />
                </IconButton>
              </div>
            </Col>
          </Row>
        </Box>
        <Box
          height={150}
          width={580}
          my={4}
          sx={{
            boxShadow: "0px 0px 1px 1px rgba(0, 0, 0, 0.2)",
            borderRadius: "4px",
            padding: "15px",
            position: "relative",
            cursor: "pointer",
            marginLeft: "4px",
          }}
          onClick={handleBoxClick}
        >
          <Row>
            <Col xs={12} sm={1} style={{ marginTop: "10px" }}>
              <Checkbox className="custom-checkbox" />
            </Col>
            <Col xs={12} sm={1} style={{ marginTop: "10px" }}>
              <Avatar alt="User Avatar" src="/images/avatar1.jpg" />
            </Col>
            <Col
              xs={12}
              sm={8}
              style={{ marginTop: "10px", textAlign: "left" }}
            >
              {/* Add your message content here */}
              <h5>Ayub AI Ansari</h5>
              <h6>Please open this message</h6>
              <p>
                It is a long established fact that a reader will be distracted.
                The point of using like readable English.
              </p>
            </Col>
            <Col xs={12} sm={2} className="listItem-text text-end fixed">
              <p>05:43 AM</p>
              <div>
                <IconButton aria-label="star">
                  <StarOutlinedIcon sx={{ color: "rgb(255,174,66)" }} />
                </IconButton>
              </div>
              <div>
                <IconButton aria-label="pin">
                  <AttachFileOutlinedIcon className="listItem-text" />
                </IconButton>
              </div>
            </Col>
          </Row>
        </Box>
        <Box
          height={150}
          width={580}
          my={4}
          sx={{
            boxShadow: "0px 0px 1px 1px rgba(0, 0, 0, 0.2)",
            borderRadius: "4px",
            padding: "15px",
            position: "relative",
            cursor: "pointer",
            marginLeft: "4px",
          }}
          onClick={handleBoxClick}
        >
          <Row>
            <Col xs={12} sm={1} style={{ marginTop: "10px" }}>
              <Checkbox className="custom-checkbox" />
            </Col>
            <Col xs={12} sm={1} style={{ marginTop: "10px" }}>
              <Avatar alt="User Avatar" src="/images/avatar1.jpg" />
            </Col>
            <Col
              xs={12}
              sm={8}
              style={{ marginTop: "10px", textAlign: "left" }}
            >
              {/* Add your message content here */}
              <h5>Ayub AI Ansari</h5>
              <h6>Please open this message</h6>
              <p>
                It is a long established fact that a reader will be distracted.
                The point of using like readable English.
              </p>
            </Col>
            <Col xs={12} sm={2} className="listItem-text text-end fixed">
              <p>05:43 AM</p>
              <div>
                <IconButton aria-label="star">
                  <StarOutlinedIcon sx={{ color: "rgb(255,174,66)" }} />
                </IconButton>
              </div>
              <div>
                <IconButton aria-label="pin">
                  <AttachFileOutlinedIcon className="listItem-text" />
                </IconButton>
              </div>
            </Col>
          </Row>
        </Box>
        {open && (
          <Paper
            ref={paperRef}
            sx={{
              position: isCursorOnPaper ? "absolute" : "fixed",
              top: 0,
              right: 0,
              width: "calc(100% - 870px)",
              marginTop: "72px",
              marginRight: "10px",
              paddingLeft: "10px",
              marginBottom: "20px",
              borderRadius: "0px",
              WebkitOverflowScrolling: "touch",
              height: "calc(100vh - 72px)",
              overflowY: "auto",
              overflowX: "hidden",
            }}
          >
            <Box p={2} width={700} height={700}>
              <Row>
                <Col xs={12} sm={1} style={{ marginTop: "10px" }}>
                  <Avatar alt="User Avatar" src="/images/avatar1.jpg" />
                </Col>
                <Col
                  xs={12}
                  sm={6}
                  style={{ marginTop: "10px", textAlign: "left" }}
                >
                  <h6 style={{ margin: 0 }}>Ayub AI Ansari</h6>
                  <span className="listItem-text">ayubansari@gmail.com</span>
                </Col>
                <Col xs={12} sm={4} className="listItem-text text-end fixed">
                  <p>05:43 AM</p>
                </Col>
              </Row>
              <Row>
                <Col
                  xs={12}
                  sm={6}
                  style={{
                    marginTop: "18px",
                    marginBottom: "15px",
                    textAlign: "left",
                  }}
                >
                  <h5>Important document Here</h5>
                </Col>
                <Col
                  xs={12}
                  sm={5}
                  style={{ marginTop: "18px", marginBottom: "15px" }}
                  className="listItem-text text-end fixed"
                >
                  <ReplyIcon />
                  <LocalPrintshopOutlinedIcon />
                  <DeleteOutlinedIcon />
                </Col>
              </Row>
              <hr className="listItem-text" width={610} />
              <Row>
                <Col xs={12} style={{ marginTop: "17px", textAlign: "left" }}>
                  <p>Hi Ayub,</p>
                </Col>
              </Row>
              <Row>
                <Col
                  xs={11}
                  style={{
                    marginTop: "17px",
                    textAlign: "left",
                    whiteSpace: "pre-line",
                  }}
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus sem sem dolor, viverra tempus lectus. Ut vel metus a
                    sem sodales congue eu et tortor.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col
                  xs={11}
                  style={{
                    textAlign: "left",
                    whiteSpace: "pre-line",
                  }}
                >
                  <p>
                    Aenean orci diam, aliquet at aliquam sed, faucibus ac quam.
                    Morbi mattis luctus velit, vitae posuere nunc accumsan at.
                    iaculis, et scelerisque felis consequat. Quisque vitae
                    aliquet justo. Cras iaculis nibh ac eros posuere, eget
                    eleifend turpis mattis.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col
                  xs={11}
                  style={{
                    textAlign: "left",
                    whiteSpace: "pre-line",
                  }}
                >
                  <p>
                    Aenean orci diam, aliquet at aliquam sed, faucibus ac
                    quam.Quisque vitae aliquet justo. Cras iaculis nibh eget
                    eleifend mattis.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col xs={12} style={{ marginTop: "17px", textAlign: "left" }}>
                  <p style={{ margin: 0 }}>Best Regards</p>
                  <p>Aenean</p>
                </Col>
              </Row>
              <hr className="listItem-text" width={570} />
              <Row>
                <Col
                  xs={4}
                  className="listItem-text"
                  style={{ marginTop: "17px", textAlign: "left" }}
                >
                  <IconButton aria-label="pin" size="small">
                    <AttachFileOutlinedIcon
                      className="listItem-text"
                      style={{ fontSize: "18px" }}
                    />
                  </IconButton>
                  <span style={{ fontSize: "0.8rem", marginLeft: "0px" }}>
                    Attachment (25 MB)
                  </span>
                </Col>
                <Col
                  xs={5}
                  className="listItem-text"
                  style={{ marginTop: "17px", textAlign: "left" }}
                >
                  <IconButton
                    aria-label="pin"
                    size="small"
                    style={{ color: "rgb(160, 57, 228)" }}
                  >
                    <SaveAltIcon style={{ fontSize: "18px" }} />
                  </IconButton>
                  <span
                    style={{
                      fontSize: "0.8rem",
                      marginLeft: "0px",
                      color: "rgb(160, 57, 228)",
                    }}
                  >
                    Download All
                  </span>
                </Col>
              </Row>
              <Images
                imageUrls={[
                  "/static/images/avatar/1.jpg",
                  "/static/images/avatar/2.jpg",
                  "/static/images/avatar/3.jpg",
                  "/static/images/avatar/4.jpg",
                  "/static/images/avatar/5.jpg",
                ]}
              />
            </Box>
          </Paper>
        )}
      </div>
    </>
  );
};

export default Content;
