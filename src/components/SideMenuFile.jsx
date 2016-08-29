import React from 'react';

export default function SideMenuFile(fileName) {
  return (
    <span className="nav-group-item">
      <span className="icon icon-doc-text" />
      {fileName.fileName}
    </span>
  );
}
