import React from 'react';

export default function SideMenuDir(fileName) {
  return (
    <span className="nav-group-item">
      <span className="icon icon-folder" />
      {fileName.fileName}
    </span>
  );
}
