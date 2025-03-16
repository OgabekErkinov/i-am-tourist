import { Box, Typography } from "@mui/material"
import { motion } from "framer-motion"
import AirplaneIcon from "@mui/icons-material/AirplanemodeActive"

const PageLoading = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#002244", 
        color: "#FFFFFF",
      }}
    >
      {/* Samolyot animatsiyasi */}
      <motion.div
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <AirplaneIcon sx={{ fontSize: 60, color: "#FFF" }} />
      </motion.div>

      {/* Loading matni */}
      <Typography variant="h6" sx={{ mt: 2, fontWeight: "bold", color: "#FF6600" }}>
        Loading your trip...
      </Typography>
    </Box>
  )
}

export default PageLoading
