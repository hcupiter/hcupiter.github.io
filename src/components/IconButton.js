import { Icon } from "@iconify/react";
import "./IconButton.css";

export function IconButton({ text, icon, onClick }) {
  return (
    <div className="icon_button" onClick={onClick}>
      <Icon icon={icon} className="button_icon" />
      <div className="button_text">{text}</div>
    </div>
  );
}
