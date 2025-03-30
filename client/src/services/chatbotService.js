import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyDqs_cB5CwewkoK8l9Ntd_8C3uKTQ2QEF8");

async function sendMessage(userMessage) {
    try {
      // สร้าง model instance
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // หรือใช้ gemini-2.0-flash ขึ้นอยู่กับสิทธิ์การใช้งาน
  
      // สร้าง prompt ด้วยรูปแบบที่ถูกต้อง
      const prompt = userMessage;
      
      // ส่งคำขอไปยัง API
      const result = await model.generateContent(prompt);
      
      // ดึงการตอบกลับ
      const response = result.response;
      const text = response.text();
      
      return text;
    } catch (error) {
      console.error("Error generating response:", error);
      return "Sorry, I encountered an error while processing your request. " + error.message;
    }
  }

export async function testApiConnection() {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent("Hello, can you hear me?");
      console.log("API Test Response:", result.response.text());
      return true;
    } catch (error) {
      console.error("API Connection Test Failed:", error);
      return false;
    }
  }

export { sendMessage };
