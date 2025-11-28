"use client";
import { NavbarProfile } from "@/components/NavbarProfile";
import { useParams, usePathname } from "next/navigation";
import React from "react";

function BotLayout({ children }: { children: React.ReactNode }) {
  const params = useParams();

  const pathname = usePathname();

  const navItems = [
    {
      name: "Overview",
      link: `/user/${params.id}`,
      active: pathname === `/user/${params.id}`,
    },
    {
      name: "Role",
      link: `/user/${params.id}/instruction`,
      active: pathname === `/user/${params.id}/instruction`,
    },
    {
      name: "Data",
      link: `/user/${params.id}/knowledge`,
      active: pathname === `/user/${params.id}/knowledge`,
    },
    {
      name: "Playground",
      link: `/user/${params.id}/test-drive`,
      active: pathname === `/user/${params.id}/test-drive`,
    },
  ];

  return (
    <div>
      <NavbarProfile navItems={navItems} />

      <div className=" bg-slate-100 min-h-[70vh]">
        <div className="md:p-5 p-3 h-full max-w-4xl mx-auto">{children}</div>
      </div>
    </div>
  );
}

export default BotLayout;
