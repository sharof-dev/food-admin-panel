import { JSX } from "react";
import { ActionBlock } from "./ActionBlock";
import Shopping from '../../../assets/icon/shopping-cart.svg'
import File from '../../../assets/icon/file-text.svg'
import Folder from '../../../assets/icon/folder.svg'
import Download from "../../../assets/icon/file-download.svg"

export const ActionBlocksSection = (): JSX.Element => {
  const actionBlocks = [
    {
      title: "Add Product",
      icon: Shopping,
      color: "bg-[#2d9cdb]",
    },
    {
      title: "Add User",
      icon: File,
      color: "bg-green-500",
    },
    {
      title: "Export Statics",
      icon: Folder,
      actionIcon: Download,
      color: "bg-[#f7c604]",
    },
  ];

  return (
    <div className="gap-6 grid grid-cols-3">
      {actionBlocks.map((block, index) => (
        <ActionBlock
          key={index}
          title={block.title}
          icon={block.icon}
          actionIcon={block.actionIcon}
          color={block.color}
        />
      ))}
    </div>
  );
};