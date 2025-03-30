import React from 'react';
import './Sidebar.css';
import { X, Search, MessageSquare, CircleDollarSign, Palette, ClipboardPlus, Earth, BookCheck, Coins, HandCoins, ScanEye, SunMedium, Settings, HelpCircle, FileText, GraduationCap, FlaskConical } from 'lucide-react';
import Setting from './sidebarComponents/Setting';
import Help from './sidebarComponents/Help';
//import kkuLogo from '../../src/image/kku.png';

const Sidebar = () => {
    const homeLinks = [
        { name: 'หลักสูตร', icon: <FileText size={18} />, url: 'https://www.en.kku.ac.th/web/%e0%b8%ab%e0%b8%a5%e0%b8%b1%e0%b8%81%e0%b8%aa%e0%b8%b9%e0%b8%95%e0%b8%a3/' },
        { name: 'บัณฑิตศึกษา', icon: <GraduationCap size={18} />, url: 'https://www.en.kku.ac.th/web/%E0%B8%9A%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B8%B4%E0%B8%95%E0%B8%A8%E0%B8%B6%E0%B8%81%E0%B8%A9%E0%B8%B2/' },
        { name: 'งานวิจัย', icon: <FlaskConical size={18} />, url: 'https://www.en.kku.ac.th/web/%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A7%E0%B8%B4%E0%B8%8A%E0%B8%B2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%A7%E0%B8%B4%E0%B8%88/#1523875822874-a039c957-3a3f' },
    ];

    const quickTopics = [
        { name: 'หลักฐานการสมัครและการส่งหลักฐานการสมัคร Portfolio', icon: <ClipboardPlus size={18} /> },
        { name: 'ค่าธรรมเนียมการศึกษา', icon: <CircleDollarSign size={18} /> },
        { name: 'หากจบมัธยมศึกษาตอนปลาย สายศิลป์ สามารถสมัครเรียนได้หรือไม่', icon: <Palette size={18} /> },
        { name: 'หลักสูตรระดับปริญญาตรี หลักสูตรนานาชาติ', icon: <Earth size={18} /> },
        { name: 'สอบถามเกี่ยวกับเรียนต่อในระดับปริญญาตรี', icon: <Settings size={18} /> },
        { name: 'สอบถามเรื่อง การทดสอบภาษาอังกฤษ', icon: <BookCheck size={18} /> },
        { name: 'สอบถามเรื่อง การผ่อนผันค่าเทอม', icon: <Coins size={18} /> },
        { name: 'สอบถามเรื่อง ตาบอดสี สามารถสมัครเรียนได้ไหม', icon: <ScanEye size={18} /> },
        { name: 'สอบถามเรื่อง การกู้ยืม กยศ ', icon: <HandCoins size={18} /> },
        { name: 'สอบถามเรื่อง การลงเรียนซัมเมอร์', icon: <SunMedium size={18} /> },
    ];

    const handleQuickTopicClick = (topicName) => {
        // ส่งข้อความไปยัง ChatInput ผ่าน CustomEvent
        const event = new CustomEvent("set-input-text", { detail: topicName });
        document.dispatchEvent(event);
      };

    return (
        <aside className="sidebar">
            <div className="sidebar-section">
                <h3 className="sidebar-section-title">Home</h3>
                <ul className="sidebar-menu">
                    {homeLinks.map((link, index) => (
                        <li key={index} className="sidebar-menu-item">
                            <a href={link.url} target="_blank" rel="noopener noreferrer" className="sidebar-menu-button">
                                {link.icon}
                                <span>{link.name}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="sidebar-section">
                <h3 className="sidebar-section-title">Quick Topics</h3>
                <ul className="sidebar-menu">
                    {quickTopics.map((topic, index) => (
                        <li key={index} className="sidebar-menu-item">
                        <button
                            className="sidebar-menu-button"
                            onClick={() => handleQuickTopicClick(topic.name)} // เพิ่ม onClick
                        >
                            {topic.icon}
                            <span>{topic.name}</span>
                        </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="sidebar-footer">
                {/* <button className="sidebar-footer-button">
                    <Settings size={18} />
                    <span>Settings</span>
                </button>
                <button className="sidebar-footer-button">
                    <HelpCircle size={18} />
                    <span>Help</span>
                </button> */}
                <Setting />
                <Help />
            </div>
        </aside>
    );
};

export default Sidebar;