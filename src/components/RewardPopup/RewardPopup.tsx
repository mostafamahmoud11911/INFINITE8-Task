"use client";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import bg from "@/images/Maskgroup.png";
import style from "./RewardPopup.module.css";
import { Stack } from "@mui/material";
import Image from "next/image";
import frame from "@/images/frame.png";
import shape1 from "@/images/xp.png";
import shape2 from "@/images/400.png";
import vector from "@/images/Vector.png";
import CloseIcon from "@mui/icons-material/Close";

const BoxModal = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: {md: 550, xs: "95%"},
  margin:"auto",
  backgroundImage: `url(${bg.src})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  boxShadow: 24,
  color: "white",
  p: 4,
  overflow: "hidden",
  borderRadius: "10px",
};

export default function RewardPopup() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box sx={{ height: "100vh", backgroundColor: "#000", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Button onClick={handleOpen} >Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={BoxModal}>
          <Box onClick={handleClose} sx={{position: "absolute", top: 10, right: 10, cursor: "pointer", border: "2px solid #fff", borderRadius: "8px", width: 25, height: 25, display: "flex", alignItems: "center", justifyContent: "center"}}>
            <CloseIcon sx={{fontSize: "15px"}}/>
          </Box>
          <Typography
            className={style.congrates}

            sx={{
              color: "rgba(243, 186, 47, 1)",
              fontWeight: "bold",
              fontSize: 25,
            }}
            variant="h6"
            component="h2"
          >
            Congratulations
          </Typography>
          <Typography sx={{ mt: 1, color: "rgba(243, 186, 47, 1)" }}>
            Command completed Successfully!
          </Typography>
          <Typography
            sx={{
              color: "rgba(200, 170, 122, 1)",
              textAlign: "center",
              fontSize: 15,
              my: 3,
            }}
          >
            You have successfully completed a command! Here are your well-earned
            rewards. Keep exploring the Command Center roe even more exciting
            mission and bigger rewards!
          </Typography>

          <Box className={style.rewardBox}>
            <Typography>Rewards</Typography>
          </Box>

          <Box>
            <Stack direction="row" gap={3}>
              <Box sx={{ position: "relative" }}>
                <Image src={frame} width={100} height={100} alt="" />
                <Image
                  src={shape1}
                  width={50}
                  height={50}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -70%)",
                  }}
                  alt=""
                />
                <Box sx={{ position: "absolute", bottom: 0, left: 0 }}>
                  <Box sx={{ position: "relative" }}>
                    <Image
                      src={vector}
                      width={100}
                      height={18}
                      style={{}}
                      alt=""
                    />
                    <Typography
                      sx={{
                        color: "#000",
                        position: "absolute",
                        top: "35%",
                        left: "20px",
                        transform: "translate(-50%, -50%)",
                        fontSize: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      20 XP
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ position: "relative" }}>
                <Image src={frame} width={100} height={100} alt="" />
                <Image
                  src={shape2}
                  width={50}
                  height={50}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -70%)",
                  }}
                  alt=""
                />
                <Box sx={{ position: "absolute", bottom: 0, left: 0 }}>
                  <Box sx={{ position: "relative" }}>
                    <Image
                      src={vector}
                      width={100}
                      height={18}
                      style={{}}
                      alt=""
                    />
                    <Typography
                      sx={{
                        color: "#000",
                        position: "absolute",
                        top: "35%",
                        left: "40px",
                        transform: "translate(-50%, -50%)",
                        fontSize: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      250,000,000
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
