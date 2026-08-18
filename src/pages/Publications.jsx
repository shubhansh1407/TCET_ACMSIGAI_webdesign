import React from "react";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { StickerBadge } from "../components/ui/StickerBadge";

export default function Publications() {
  const publications = [
    {
      title: "Optimizing Small Language Models for Edge Inference",
      authors: "A. Rivera, P. Sharma, Dr. S. K. Gupta",
      journal: "IEEE International Conference on AI",
      year: "2026",
    },
    {
      title: "Real-time Computer Vision in Autonomous Robotics",
      authors: "R. Mehta, A. Iyer",
      journal: "ACM SIGAI Student Research Competition",
      year: "2025",
    },
  ];

  return (
    <div className="space-y-10 bg-paper-grid min-h-screen pb-12">
      <SectionHeader
        title="RESEARCH & PUBLICATIONS"
        subtitle="Peer-reviewed papers and conference contributions authored by chapter members."
        badgeText="ACADEMICS"
      />

      <div className="space-y-6">
        {publications.map((pub, idx) => (
          <Card key={idx} bgColor="bg-white" className="border-3">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="space-y-2">
                <div className="flex gap-2 items-center">
                  <StickerBadge
                    text={pub.year}
                    color="bg-retroGreen"
                    rotation="rotate-0"
                  />
                  <span className="font-bold text-xs text-gray-600 uppercase">
                    {pub.journal}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-black">{pub.title}</h3>
                <p className="font-bold text-sm text-gray-700">
                  Authors: {pub.authors}
                </p>
              </div>

              <div className="flex gap-2 shrink-0">
                <Button variant="blue" size="sm">
                  Abstract
                </Button>
                <Button variant="yellow" size="sm">
                  PDF ↗
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
