import React from "react";
import SidebarGroup from "./SidebarGroup";
import SidebarGroupLabel from "./SidebarGroupLabel";
import SidebarMenu from "./SidebarGroupContent";
import SidebarItem from "./SidebarItem";

export default function SidebarContent() {
  return (
    <>
      <SidebarGroup>
        <SidebarGroupLabel>About</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarItem href="/">Introduction</SidebarItem>
          <SidebarItem href="/work-experience">Work Experience</SidebarItem>
        </SidebarMenu>
      </SidebarGroup>
      <SidebarGroup>
        <SidebarGroupLabel>Project</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarItem href="/portofolio">Portofolio</SidebarItem>
          <SidebarItem href="/current-project">Current Project</SidebarItem>
          <SidebarItem href="/paid-project">Paid Project</SidebarItem>
        </SidebarMenu>
      </SidebarGroup>
      <SidebarGroup>
        <SidebarGroupLabel>Blog</SidebarGroupLabel>
        <SidebarMenu>
          <SidebarItem href="/sharing-session">Sharing Session</SidebarItem>
        </SidebarMenu>
      </SidebarGroup>
    </>
  );
}
