import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import BrokenImageOutlinedIcon from "@mui/icons-material/BrokenImageOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Box, Typography, IconButton, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function ImageRow() {
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };
  const [imageUrls, setImageUrls] = useState([
    "https://picsum.photos/id/1074/80/80",
    "https://picsum.photos/id/1075/80/80",
    "https://picsum.photos/id/1076/80/80",
    "https://picsum.photos/id/1077/80/80",
    "https://picsum.photos/id/1077/80/80",
    "https://picsum.photos/id/1077/80/80",
    "https://picsum.photos/id/1077/80/80",
    "https://picsum.photos/id/1077/80/80",
    "https://picsum.photos/id/1077/80/80",
    "https://picsum.photos/id/1077/80/80",
  ]);

  return (
    <Container fluid>
      <Row>
        <Col
          xs={12}
          className="d-flex"
          style={{ marginTop: "10px", textAlign: "left" }}
        >
          {imageUrls.slice(0, 4).map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`Image ${index + 1}`}
              className="img-thumbnail mb-2 mr-4" // Adjusted margin here
              style={{ width: "80px", height: "80px", marginRight: "5px" }}
            />
          ))}
          {imageUrls.length > 4 && (
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                width: "80px",
                height: "80px",
                color: "rgb(160, 57, 228)",
                backgroundColor: "rgb(233, 222, 240)",
              }}
            >
              <p className="mb-0" style={{ fontSize: "25px" }}>
                {imageUrls.length - 4}+
              </p>
            </div>
          )}
        </Col>
      </Row>
      <Row>
        <Col xs={12} style={{ marginTop: "14px", textAlign: "left" }}>
          <textarea
            className="listItem-text no-outline"
            rows={4}
            style={{
              width: "90%",
              resize: "none",
              border: "none", 
              outline: "none",
              backgroundColor: "#f0ecec",
              borderRadius: "5px",
              padding: "10px",
            }}
            placeholder="Type Something..."
          />
        </Col>
      </Row>
      <Row>
        <Col xs={6} className="listItem-text" style={{ textAlign: "left" }}>
          <BrokenImageOutlinedIcon style={{ fontSize: "18px" }}  />
          <SentimentSatisfiedAltOutlinedIcon style={{ fontSize: "18px" }}  />
          <AttachFileOutlinedIcon style={{ fontSize: "18px" }}  />
        </Col>
        <Col xs={5} className="text-end fixed">
          <Button
            component="span"
            variant="contained"
            style={{
              marginBottom: "8px",
              backgroundColor: "rgb(160, 57, 228)",
            }}
            onClick={handleClickOpen}
          >
            Reply
          </Button>
          <Dialog
            open={openDialog}
            onClose={handleClose}
            PaperProps={{
              style: {
                position: "absolute",
                top: "65%",
                left: "79%",
                transform: "translate(-50%, -50%)",
                width: "40%",
              },
            }}
            BackdropProps={{
              style: {
                backgroundColor: "transparent",
              },
            }}
          >
            <DialogTitle>
              <span
                style={{ fontSize: "13px" }}
                class="d-flex listItem-text"
                variant="body1"
              >
                Reply to:{" "} 
                <Box sx={{ display: "flex", ml: 1,backgroundColor: "#f0ecec", width:"20%", alignItems:"center"}}>
                <span
                style={{ fontSize: "13px" }}
                class="d-flex listItem-text"
                variant="body1"
              > Jainab Khan  <CloseIcon className= "d-flex" style={{ fontSize: "15px", marginTop: '3px' }} />
                </span>
                </Box>
              </span>
            </DialogTitle>
            <DialogContent>
              <Row>
                <Col xs={12} style={{ textAlign: "left" }}>
                  <textarea
                    className="listItem-text no-outline"
                    rows={4}
                    style={{
                      width: "100%",
                      resize: "none",
                      border: "none",
                      outline: "none",
                      backgroundColor: "#f0ecec",
                      borderRadius: "5px",
                      padding: "10px",
                    }}
                    placeholder="Type Something..."
                  />
                </Col>
                <Col
                  xs={4}
                  className="listItem-text"
                  style={{ textAlign: "left" }}
                >
                  <BrokenImageOutlinedIcon style={{ fontSize: "18px" }} />
                  <SentimentSatisfiedAltOutlinedIcon style={{ fontSize: "18px" }} />
                  <AttachFileOutlinedIcon style={{ fontSize: "18px" }} />
                </Col>
                <Col xs={8} className="text-end fixed">
                  <LocationOnOutlinedIcon style={{ fontSize: "18px" }} className="listItem-text" /> <span style={{ fontSize: "13px" , marginRight:'14px' }} className="listItem-text">Dhaka, Bangladesh</span> 
                  <Button
                    component="span"
                    variant="contained"
                    style={{
                      marginBottom: "8px",
                      backgroundColor: "rgb(160, 57, 228)",
                    }}
                    onClick={handleClickOpen}
                  >
                    Send
                  </Button>
                </Col>
              </Row>
            </DialogContent>
          </Dialog>
        </Col>
      </Row>
    </Container>
  );
}

export default ImageRow;
