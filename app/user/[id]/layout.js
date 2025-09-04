"use client";
import { NavbarProfile } from "@/components/NavbarProfile";
import { useParams } from "next/navigation";

function BotLayout({ children }) {
  const params = useParams();

  const navItems = [
    {
      name: "Garage",
      link: `/bot/${params.id}`,
    },
    {
      name: "Role",
      link: `/bot/${params.id}/instruction`,
    },
    {
      name: "Data",
      link: `/bot/${params.id}/knowledge`,
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
