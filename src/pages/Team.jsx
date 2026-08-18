import React, { useState } from "react";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Button } from "../components/ui/Button";

// Clean position configuration using standard Heroicon SVG paths
const teamMembers = [
  {
    name: "Name Here",
    role: "Chairperson",
    domain: "Core",
    stickerBg: "bg-retroYellow",
    iconType: "user",
  },
  {
    name: "Name Here",
    role: "Vice Chairperson",
    domain: "Core",
    stickerBg: "bg-retroPink",
    iconType: "user",
  },
  {
    name: "Name Here",
    role: "Secretary",
    domain: "Core",
    stickerBg: "bg-white",
    iconType: "document",
  },
  {
    name: "Name Here",
    role: "Event Manager",
    domain: "Events",
    stickerBg: "bg-retroBlue",
    iconType: "calendar",
  },
  {
    name: "Name Here",
    role: "Technical Head",
    domain: "Technical",
    stickerBg: "bg-retroGreen",
    iconType: "code",
  },
  {
    name: "Name Here",
    role: "Creative Head",
    domain: "Creative",
    stickerBg: "bg-retroPink",
    iconType: "swatch",
  },
  {
    name: "Name Here",
    role: "PR Head",
    domain: "Public Relations",
    stickerBg: "bg-retroYellow",
    iconType: "megaphone",
  },
  {
    name: "Name Here",
    role: "Spons Head",
    domain: "Sponsorship",
    bg: "bg-retroGreen",
    stickerBg: "bg-retroGreen",
    iconType: "currency",
  },
  {
    name: "Name Here",
    role: "Webmaster",
    domain: "Technical",
    stickerBg: "bg-retroBlue",
    iconType: "globe",
  },
  {
    name: "Name Here",
    role: "Inhouse Head",
    domain: "Operations",
    stickerBg: "bg-retroBg",
    iconType: "building",
  },
  {
    name: "Name Here",
    role: "Joint Technical Head",
    domain: "Technical",
    stickerBg: "bg-retroGreen",
    iconType: "code",
  },
  {
    name: "Name Here",
    role: "Joint Secretary",
    domain: "Core",
    stickerBg: "bg-white",
    iconType: "document",
  },
  {
    name: "Name Here",
    role: "Joint PR & Spons Head",
    domain: "Public Relations",
    stickerBg: "bg-retroYellow",
    iconType: "handshake",
  },
  {
    name: "Name Here",
    role: "Joint Creative Head",
    domain: "Creative",
    stickerBg: "bg-retroPink",
    iconType: "swatch",
  },
  {
    name: "Name Here",
    role: "Joint Event Manager",
    domain: "Events",
    stickerBg: "bg-retroBlue",
    iconType: "calendar",
  },
];

// Helper to render clean Heroicon SVGs
const renderIcon = (type) => {
  const iconProps = "w-3.5 h-3.5 text-black shrink-0";
  switch (type) {
    case "user":
      return (
        <svg
          className={iconProps}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      );
    case "code":
      return (
        <svg
          className={iconProps}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      );
    case "calendar":
      return (
        <svg
          className={iconProps}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      );
    case "swatch":
      return (
        <svg
          className={iconProps}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      );
    case "megaphone":
      return (
        <svg
          className={iconProps}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
          />
        </svg>
      );
    case "currency":
      return (
        <svg
          className={iconProps}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
    case "globe":
      return (
        <svg
          className={iconProps}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      );
    case "document":
      return (
        <svg
          className={iconProps}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      );
    default:
      return (
        <svg
          className={iconProps}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
  }
};

export default function Team() {
  const [activeTab, setActiveTab] = useState("CURRENT");

  return (
    <div className="space-y-10 bg-paper-grid min-h-screen pb-12">
      <SectionHeader
        title="MEET THE TEAM"
        subtitle="The minds shaping TCET ACM SIGAI."
        badgeText="PEOPLE"
      />

      {/* Tab Controls */}
      <div className="flex justify-center gap-4">
        <Button
          variant={activeTab === "CURRENT" ? "yellow" : "white"}
          onClick={() => setActiveTab("CURRENT")}
        >
          Current Core (2025-26)
        </Button>
        <Button
          variant={activeTab === "ALUMNI" ? "pink" : "white"}
          onClick={() => setActiveTab("ALUMNI")}
        >
          Past Committees / Alumni
        </Button>
      </div>

      {/* Professional Member Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="border-3 border-black rounded-2xl p-4 shadow-brutal-lg bg-white flex flex-col justify-between"
          >
            {/* Member Photo Container */}
            <div className="w-full h-44 border-2 border-black rounded-xl mb-3 bg-gray-100 overflow-hidden flex items-center justify-center font-bold text-gray-400">
              [PHOTO]
            </div>

            {/* Member Info */}
            <div className="mb-3">
              <h3 className="font-black text-lg text-black leading-tight">
                {member.name}
              </h3>
            </div>

            {/* Straight Professional Position Badge */}
            <div>
              <span
                className={`inline-flex items-center gap-2 font-black text-xs px-3 py-1.5 border-2 border-black rounded-lg shadow-brutal uppercase select-none ${member.stickerBg}`}
              >
                {renderIcon(member.iconType)}
                <span>{member.role}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
