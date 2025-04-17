// VapiAssistant.js
import Vapi from "@vapi-ai/web";
import { useState } from "react";
import { motion } from "framer-motion";

const vapi = new Vapi("5b1f521d-3fe6-40f9-8f6f-19e6c2d21bad");

export default function VapiAssistant() {
  const [isTalking, setIsTalking] = useState(false);
  console.log("test hureka2");
  const handleMicClick = async () => {
   
      try {
        
        if(!isTalking){
          console.log("starting")
          await vapi.start("62b8ae12-d6df-40de-af36-d01e54d94e1c");
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
