import { Icon } from "@iconify/react";
import "./IconButton.css";

export function IconButton({ text, icon, onClick, className, id, disabled }) {
  return (
    <div className={className + " icon_button"} id={id} onClick={onClick}>
      <Icon icon={icon} className="button_icon" />
      <div className="button_text" disabled={disabled}>
        {text}
      </div>
    </div>
  );
}
