import '../Sidebar.css';
import { X, Search, MessageSquare, CircleDollarSign, Palette, ClipboardPlus, Earth, BookCheck, Coins, HandCoins, ScanEye, SunMedium, Settings, HelpCircle, FileText, GraduationCap, FlaskConical } from 'lucide-react';

const Setting = () => {
  return (
        <button className="sidebar-footer-button">
          <Settings size={18} />
          <span>Settings</span>
        </button>
  )
}
export default Setting