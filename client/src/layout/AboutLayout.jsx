import Nav from "../../components/Nav/Nav";
import { motion } from "framer-motion";
import { Instagram, Facebook  } from 'lucide-react';
import "../../components/layoutcss/AboutUs.css";
import art from "../profileImg/art.jpg"

const teamMembers = [
  { name: "Nontawat Laokote", number: "653040131-2", instagram: "https://www.instagram.com/faluke_02", facebook: "https://www.facebook.com/flookayn", image: "https://th.bing.com/th/id/OIP.oNjolfvKOcyi7Ga7ec5rFgHaFU?w=640&h=460&rs=1&pid=ImgDetMain" },
  { name: "Nititorn Prompila", number: "653040133-8", instagram: "https://www.instagram.com/naza_sco", facebook: "https://www.facebook.com/nititorn.prompila", image: "https://64.media.tumblr.com/997129a5bf684d091e246b39a318ffae/28053ce2fd7f3fd5-c0/s1280x1920/a604c7a4b380ac98e05b5878507bac36c7275d45.jpg" },
  { name: "Poramet Makul", number: "653040456-4", instagram: "https://instagram.com/poramet_lukam", facebook: "https://www.facebook.com/jirawat.magool", image: art },
  { name: "Thanakorn Thummasaeng", number: "653040621-5", instagram: "https://instagram.com/book_thanak", facebook: "https://www.facebook.com/thanakorn.thummasaeng", image: "https://th.bing.com/th/id/OIP.Ta7qKcOMVuRj5fHgjF3BIAHaE8?rs=1&pid=ImgDetMain" },
  { name: "Wissanu Rayayoi", number: "653040460-3", instagram: "https://instagram.com/potayyr", facebook: "https://www.facebook.com/profile.php?id=100082091059909", image: "https://i.pinimg.com/originals/df/c5/47/dfc547134529761b6eb00a53cd87d6f0.jpg" },
  { name: "Chanyut Saengwichain", number: "653040443-3", instagram: "https://instagram.com/kr._.an", facebook: "https://www.facebook.com/kran.chanyuth", image: "https://media1.tenor.com/m/lL6XNGrDUpUAAAAC/vahye.gif" },
];

function AboutLayout() {
  return (
    <section id="about-layout">
      <Nav></Nav>
      <div className="about-us-container">
        <motion.h1 
          className="about-us-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Our Team
        </motion.h1>
        <p className="about-us-description">
          We are a group of third-year Computer Engineering students passionate about artificial intelligence.
          This chatbot project is part of our Computational Intelligence course, where we explore AI techniques
          and their applications. Our goal is to create an intelligent and user-friendly chatbot that enhances
          user interactions through smart conversations.
        </p>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <img src={member.image} alt={member.name} className="team-image" />
              <h2 className="team-name">{member.name}</h2>
              <p className="team-number">{member.number}</p>
              <div className="team-contact">
                <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="social-link">
                  <Instagram className="social-icon instagram" />
                </a>
                <a href={member.facebook} target="_blank" rel="noopener noreferrer" className="social-link">
                  <Facebook className="social-icon facebook" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutLayout;
