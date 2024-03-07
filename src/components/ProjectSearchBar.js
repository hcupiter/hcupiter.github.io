import { Icon } from "@iconify/react";

import "./ProjectSearchBar.css";

export default function ProjectSearchBar({ onChange }) {
  return (
    <div id="projectSearchBar_container">
      <Icon icon="material-symbols:search" id="ProjectSearchBar_icon" />
      <input
        type="text"
        placeholder="Search Project Here..."
        id="projectSearchBar_inputField"
        onChange={onChange}
      ></input>
    </div>
  );
}
