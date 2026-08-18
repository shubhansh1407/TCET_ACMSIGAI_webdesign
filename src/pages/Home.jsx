import React from "react";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { StickerBadge } from "../components/ui/StickerBadge";
import { Sticker } from "../components/ui/Sticker";

// --- DUMMY SVG PLACEHOLDERS ---
// Replace these paths with your actual imported SVGs
// e.g., import Spidey from '../assets/spidey.svg';
const SpideyIcon = () => (
  <svg width="60" height="120" viewBox="0 0 60 120" fill="none">
    <line x1="30" y1="0" x2="30" y2="70" stroke="black" strokeWidth="2" />
    <circle
      cx="30"
      cy="90"
      r="20"
      stroke="black"
      strokeWidth="2"
      fill="#EE2A24"
    />
    <circle cx="23" cy="88" r="3" fill="white" stroke="black" />
    <circle cx="37" cy="88" r="3" fill="white" stroke="black" />
  </svg>
);
const SkaterIcon = () => (
  <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
    <rect x="10" y="45" width="60" height="5" rx="2.5" fill="black" />
    <circle cx="20" cy="55" r="5" fill="#70D6FF" stroke="black" />
    <circle cx="60" cy="55" r="5" fill="#70D6FF" stroke="black" />
    <path
      d="M40 10 L30 45 L50 45 Z"
      fill="#38B000"
      stroke="black"
      strokeWidth="2"
    />
  </svg>
);
const AlienIcon = () => (
  <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
    <ellipse
      cx="25"
      cy="25"
      rx="20"
      ry="15"
      fill="#38B000"
      stroke="black"
      strokeWidth="2"
    />
    <ellipse cx="17" cy="22" rx="5" ry="8" fill="black" />
    <ellipse cx="33" cy="22" rx="5" ry="8" fill="black" />
  </svg>
);
const CoolKidIcon = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
    <circle
      cx="50"
      cy="50"
      r="40"
      stroke="black"
      strokeWidth="3"
      fill="#FCD34D"
    />
    <rect x="25" y="30" width="50" height="20" rx="5" fill="black" />
    <path d="M35 70 Q50 80 65 70" stroke="black" strokeWidth="3" fill="none" />
  </svg>
);
// --------------------------------

export default function Home() {
  return (
    <div className="space-y-12 bg-paper-grid min-h-screen pb-24 relative overflow-x-hidden">
      {/* 1. Fun Element: Hanging Spidey (Global Top Right) */}
      <div className="absolute -top-4 right-10 md:right-24 z-50 animate-bounce-slow opacity-80 hover:opacity-100 transition-opacity">
        <SpideyIcon />
      </div>

      {/* Hero Section */}
      <section className="bg-retroYellow border-3 border-black rounded-3xl p-8 md:p-12 shadow-brutal-lg relative overflow-hidden">
        {/* 2. Fun Element: Cool Kid Sticker (Inside Hero) */}
        <div className="absolute -bottom-8 -left-8 rotate-12 opacity-90 scale-75 md:scale-100 z-10">
          <CoolKidIcon />
        </div>

        <div className="relative z-20 space-y-4">
          <StickerBadge
            text="TCET ACM SIGAI"
            color="bg-retroPink"
            rotation="-rotate-6"
          />
          <h1 className="text-5xl md:text-7xl font-black text-black uppercase leading-none tracking-tight">
            Innovate. <br /> Create. Connect.
          </h1>
          <p className="text-lg font-bold text-black mt-4 max-w-xl">
            The official AI student chapter pushing boundaries in Artificial
            Intelligence and Machine Learning.
          </p>
          <div className="mt-6 flex gap-4">
            <Button variant="pink">Explore Events</Button>
            <Button variant="blue">Read Publications</Button>
          </div>
        </div>
      </section>

      {/* Domain Showcase Section (Relative for Skater positioning) */}
      <section className="relative">
        <SectionHeader title="What We Do" badgeText="Our Domains" />

        {/* 3. Fun Element: Skateboarder (Floating between Header and Cards) */}
        <div className="absolute -top-16 left-1/4 -rotate-12 hover:rotate-0 transition-transform z-10 animate-float-sideways opacity-80">
          <SkaterIcon />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-20">
          <Card
            title="AI Research"
            category="Domain"
            description="Publishing research papers and exploring deep learning architectures."
            bgColor="bg-retroBlue"
          />
          <Card
            title="Workshops & Hackathons"
            category="Events"
            description="Hands-on technical bootcamps for student developers."
            bgColor="bg-retroGreen"
          />
          <Card
            title="Technical Blogs"
            category="Community"
            description="Insights, tutorials, and project breakdowns written by students."
            bgColor="bg-white"
          />
        </div>
      </section>

      {/* Footer Element Section */}
      <section className="flex justify-center relative pt-16">
        {/* 4. Fun Element: Retro Alien Peekaboo */}
        <div className="absolute bottom-0 right-1/4 translate-y-1/2 hover:translate-y-0 transition-transform duration-500 cursor-pointer">
          <AlienIcon />
        </div>
        <StickerBadge
          text="Fun elements provided by the lead!"
          color="bg-retroGreen"
          rotation="rotate-3"
        />
        <Sticker
          bgColor="bg-retroPink"
          rotate="-rotate-6"
          className="absolute -top-3 -right-4"
        >
          NEW ★
        </Sticker>
      </section>
    </div>
  );
}
