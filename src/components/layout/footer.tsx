import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiNotion } from "react-icons/si";
export default function Footer() {
  return (
    <footer className="w-full bg-light-background-reverse text-light-text-secondary py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
        {/* Left: 소셜 링크 */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Tessa1217"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <FaGithub className="text-lg" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/%EC%9C%A0%EC%A7%84-%EA%B6%8C-3a38aa372/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <FaLinkedin className="text-lg" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://www.notion.so/tessa1217-dev/Tessa1217-Development-Space-135184f775248059a356cf4e13f0d52c"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition"
          >
            <SiNotion className="text-lg" />
            <span>Notion</span>
          </a>
        </div>

        {/* Right: 이름 + 저작권 */}
        <div className="text-xs text-gray-500 text-center md:text-right">
          © 2025 YuJin Kwon. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
