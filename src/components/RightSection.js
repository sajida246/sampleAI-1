import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import VapiAssistant from "./Vapi";

export default function VoiceAgentIntro() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(to bottom right, #e3f2fd, #fce4ec)",
        px: 2,
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            textAlign: "center",
            py: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                mb: 2,
                color: "#1a237e",
              }}
            >
              Your AI-Powered Voice Assistant
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ maxWidth: 600, mx: "auto", color: "#4e4e4e" }}
            >
              Tap the mic to start a conversation with your AI agent. Built for natural voice interaction.
            </Typography>
          </motion.div>

          <motion.img
          src="https://cdn-icons-png.flaticon.com/512/4712/4712035.png"
            alt="Voice AI Illustration"
            style={{ maxWidth: "100%", width: 300 }}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />

          <VapiAssistant />
        </Box>
      </Container>
    </Box>
  );
}
