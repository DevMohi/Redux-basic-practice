import Logo from "@/assets/Logo";
import { Link } from "react-router-dom";
import { ModeToggle } from "../ui/mode-toggle";

export default function Navbar() {
  return (
    <nav className="max-1-7xl mx-auto h-16 flex items-center gap-3 px-5">
      <div className="flex items-center">
        <Logo />
      </div>
      <Link to="/">Tasks</Link>
      <Link to="/users">Users</Link>
      <div className="ml-auto">
        <ModeToggle></ModeToggle>
      </div>
    </nav>
  );
}
