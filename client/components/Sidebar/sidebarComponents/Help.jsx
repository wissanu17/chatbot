import '../Sidebar.css';
import { X, Search, MessageSquare, CircleDollarSign, Palette, ClipboardPlus, Earth, BookCheck, Coins, HandCoins, ScanEye, SunMedium, Settings, HelpCircle, FileText, GraduationCap, FlaskConical } from 'lucide-react';

const Help = () => {
  return (
        <button className="sidebar-footer-button">
          <HelpCircle size={18} />
          <span>Help</span>
        </button>
  )
}
export default Help