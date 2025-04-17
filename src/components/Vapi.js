// VapiAssistant.js
import Vapi from "@vapi-ai/web";
import { useState } from "react";
import { motion } from "framer-motion";

const vapi = new Vapi("4375ab95-9cc1-4d70-8377-c69c9fcebaf6");

export default function VapiAssistant() {
  const [isTalking, setIsTalking] = useState(false);
  console.log("test hureka2");
  const handleMicClick = async () => {
   
      try {
        
        if(!isTalking){
          console.log("starting")
          await vapi.start("0776373c-104e-4d7d-abc5-c7c37a713a8e");
          setIsTalking(true);
        }
        else {
          console.log("stopping")
          await vapi.stop();
          setIsTalking(false);
        }
      } catch (error) {
        console.error("Error starting Vapi call:", error);
      }
    }

  return (
    <motion.button
    className={`vapi-button ${isTalking ? "talking" : ""}`}
    onClick={handleMicClick}
    initial={{ scale: 1 }}
    animate={{ scale: [1, 1.05, 1] }}
    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
  >
    {isTalking ? "🛑 Click to Stop" : "🎤 Talk to AI"}
  </motion.button>
  );
}
