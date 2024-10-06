"use client";
import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import bg from "@/images/bg.jpg";
import logo from "@/images/logo.png";
import Image from "next/image";
import styled from "@emotion/styled";
import style from "./LevelPopup.module.css"

const Btn = styled(Button)({
  backgroundColor: "rgba(240,142,60,1)",
  color: "#000",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "rgba(240,142,60,.7)",
    scale: "1.1"
  },
  transition: "all 0.5s ease",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",

});

const Title = styled(Typography)({
  textAlign: "center",
  fontWeight: "bold",
  color: "rgba(255, 244, 46, 1)",
});
export default function LevelPopUp() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: `url(${bg.src})`,
        height: "100vh",
        width: "100%",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Box sx={{ width: { md: "80%", sm: "80%", xs: "100%" } }}>
          <Title variant="h2" mb={"3rem"}>
            LEVEL UP
          </Title>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "25px",
            }}
          >
            <Image
              src={logo.src}
              width={150}
              height={150}
              alt=""
              className={style.image}
            />
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Corporal
            </Typography>
          </Box>
          <Box
            sx={{
              px: "2rem",
              width: { md: "60%", sm: "80%", xs: "100%" },
              m: "auto",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                color: "#fff",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", fontSize: "13px" }}
              >
                XP:{" "}
                <span style={{ color: "rgba(240,142,60,1)" }}>{progress}</span>
              </Typography>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", fontSize: "13px" }}
                className={progress === 100 ? `${style.progressNum}` : ""}
              >
                100
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "15px",
                backgroundColor: "rgba(53, 36, 28, 1)",
                borderRadius: "5px",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  background:
                    "linear-gradient(180deg, #FFFF00 0%, #FBB03B 22.6%, #F7931E 47.24%, #F37830 64.12%, #F16A3A 76%, #F37433 84.61%, #F79020 99.46%, #F7931E 100.65%)",
                  width: `${progress}%`,
                  transition: "width 0.5s ease",
                }}
              ></Box>
            </Box>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Btn sx={{ mt: "1rem" }}>Claim NFT Badge</Btn>
            <Box sx={{ my: "1rem" }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  fontSize: "17px",
                  color: "rgba(53, 36, 28, 1)",
                }}
              >
                You’ve leveled up and earned a new badge!
              </Typography>
              <Typography variant="h6" color="#ddd" sx={{ fontSize: "13px" }}>
                Claim your{" "}
                <span style={{ color: "rgba(240,142,60,1)" }}>NFT</span> badge
                now, or retrieve it later from your Inventory.
              </Typography>
            </Box>
            <Box sx={{ color: "#ddd" }}>
              <Typography variant="caption" sx={{ fontSize: "13px" }}>
                To claim your new badge, you will need to transfer your previous
                badge from your wallet for it to be burned in exchange for the
                new one.{" "}
              </Typography>
              <Typography variant="caption" sx={{ fontSize: "13px" }}>
                If there is insufficient gas in your wallet, the transaction will
                be canceled. You can always visit your Inventory and claim your
                badge at any time.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
