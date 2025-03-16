import React, { useRef, useState, useEffect } from "react";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import AirplaneIcon from "@mui/icons-material/AirplanemodeActive";
import useStore from "../../Store/store";

const CompLoading = () => {
  const { themeColors } = useStore();
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }

    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: themeColors.loadingBg,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <motion.div
        initial={{ x: -containerWidth }}
        animate={{ x: containerWidth }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ position: "absolute" }}
      >
        <AirplaneIcon
          sx={{
            fontSize: 60,
            color: themeColors.loadingText,
            transform: "rotateZ(90deg)",
          }}
        />
      </motion.div>
    </Box>
  );
};

export default CompLoading;
