import Nav from "../../components/Nav/Nav"
import "../../components/layoutcss/Contact.css"
import { motion } from "framer-motion";
import contactImage from "../image/meme.jpg" // ต้องเพิ่มไฟล์ภาพประกอบในโฟลเดอร์ assets

function ContactLayout() {
  return (
    <section id="contact-layout">
      <Nav></Nav>
      <div className="contact-container">
        <div className="contact-left">
          <p className="contact-pre-heading">How can we help you?</p>
          <h1 className="contact-heading">Contact us</h1> 
          {/* <motion.h1 
        className="contact-heading"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact us
      </motion.h1> */}
          
          <p className="contact-description">
            We're here to help and answer any questions you might have. We look forward to hearing from you!
          </p>
          
          <div className="contact-info-item">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <span>123 หมู่ 16 ถ.มิตรภาพ ต.ในเมือง อ.เมือง จ.ขอนแก่น 40002</span>
          </div>
          
          <div className="contact-info-item">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <span>โทรศัพท์ 043-009700, 043-002539 โทรสาร 043-202216</span>
          </div>
          
          <div className="contact-info-item">
            <div className="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <a href="mailto:mail@sleekbots.com" className="contact-email">info@kku.ac.th, poramet.l@kkumail.com</a>
          </div>
        </div>
        
        <div className="contact-right">
          <img src={contactImage} alt="meme-frog" className="meme-frog" />
        </div>
      </div>
    </section>
  )
}

export default ContactLayout