import React, { useState, useMemo } from "react";
import { eventsData } from "../data/eventsData";


// Helper to assign consistent colors to event types
const TYPE_COLORS = {
  Event: "bg-retroPink",
  Workshop: "bg-retroBlue",
  Seminar: "bg-retroYellow",
  Competition: "bg-retroGreen",
  "Industrial Visit": "bg-retroPink",
  "Expert Talk": "bg-retroBlue",
  Other: "bg-retroYellow",
};

// SVG Icons to replace emojis
const MapPinIcon = () => (
  <svg className="w-3 h-3 inline-block mr-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>
);
const UsersIcon = () => (
  <svg className="w-3 h-3 inline-block mr-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" /></svg>
);
const BuildingIcon = () => (
  <svg className="w-3 h-3 inline-block mr-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" /></svg>
);
const XIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);

export default function Events() {
  const [filter, setFilter] = useState("ALL");
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Esc key to close modal
  React.useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedEvent(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Extract unique categories dynamically from the actual data
  const categories = useMemo(() => {
    const types = new Set(eventsData.map((e) => e.type));
    return ["ALL", ...Array.from(types).sort()];
  }, []);

  // Filter and group by year
  const eventsByYear = useMemo(() => {
    const filtered = eventsData.filter(
      (e) => filter === "ALL" || e.type === filter
    );

    const grouped = filtered.reduce((acc, event) => {
      const y = event.year || "Unknown";
      if (!acc[y]) acc[y] = [];
      acc[y].push(event);
      return acc;
    }, {});

    const sortedYears = Object.keys(grouped).sort((a, b) => b.localeCompare(a));

    return sortedYears.map((year) => ({
      year,
      events: grouped[year],
    }));
  }, [filter]);

  return (
    <div className="space-y-20 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      {/* 1. HERO / INTRO & FILTERS */}
      <section>
        <div className="flex flex-col items-center text-center mb-16 gap-8">
          <div className="w-full text-left flex flex-col items-start gap-4 md:px-0">
            <span className="bg-retroPink text-black font-black text-sm md:text-base px-5 py-2 border-4 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] uppercase tracking-widest inline-flex items-center gap-2 -rotate-2 transform hover:rotate-0 transition-transform cursor-default">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
              </svg>
              OUR JOURNEY
            </span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-black leading-[0.9] mt-2">
              THINGS WE'VE DONE.
            </h2>
            <p className="text-lg md:text-xl font-bold text-black/80 max-w-3xl mt-2">
              A collection of events, workshops, seminars and experiences from ACM SIGAI.
            </p>
          </div>

          <div className="w-full mt-4 md:px-0">
            <div className="flex flex-wrap justify-start gap-3 w-full">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`btn-pop px-5 py-2 font-black text-sm md:text-base uppercase border-4 border-black rounded-xl transition-all duration-200 ${
                    filter === cat
                      ? "bg-retroBlue text-black shadow-none translate-y-0.5 translate-x-0.5"
                      : "bg-white text-black shadow-brutal hover:bg-retroBlue hover:-translate-y-0.5"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 4. EVENT ARCHIVE BY YEAR */}
        <div key={filter} className="space-y-24 animate-filter-change">
          <style>{`
            @keyframes subtleFadeUp {
              from { opacity: 0; transform: translateY(10px); }
              to { opacity: 1; transform: translateY(0); }
            }
            .animate-filter-change {
              animation: subtleFadeUp 0.2s ease-out forwards;
            }
          `}</style>
          {eventsByYear.length === 0 ? (
            <div className="text-center py-20 border-4 border-black border-dashed bg-white rounded-2xl shadow-brutal">
              <h3 className="text-3xl font-black uppercase">No events found.</h3>
              <p className="font-bold mt-2">Try a different filter!</p>
            </div>
          ) : (
            eventsByYear.map(({ year, events }) => (
              <div key={year} className="relative mb-20 last:mb-0">
                {/* Year Header */}
                <div className="mb-6 flex justify-center md:justify-start">
                  <h3 className="text-2xl md:text-3xl font-black bg-white text-black border-4 border-black px-5 py-2 shadow-brutal-sm -rotate-2 inline-block rounded-xl transform hover:rotate-0 transition-transform cursor-default">
                    {year}
                  </h3>
                </div>

                {/* Masonry/Grid - Removed items-start to restore uniform row heights */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {events.map((event) => {
                    const cardColor = TYPE_COLORS[event.type] || "bg-retroPink";
                    return (
                      <div
                        key={event.id}
                        className="group flex flex-col bg-white border-4 border-black rounded-3xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-300 overflow-hidden"
                      >
                        {/* Card Header (Editorial block) */}
                        <div className={`p-4 border-b-4 border-black flex justify-between items-start ${cardColor} relative overflow-hidden`}>
                           {/* Subtle diagonal stripe overlay for texture */}
                           <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#000_10px,#000_20px)]"></div>
                           
                           <span className="relative z-10 inline-block bg-white text-black font-black text-xs md:text-sm uppercase border-4 border-black px-4 py-1.5 rounded-full shadow-brutal-sm transform -rotate-2">
                            {event.type}
                          </span>
                          <span className="relative z-10 font-black text-xs md:text-sm bg-black text-white px-3 py-1.5 rounded-xl rotate-3 shadow-brutal-sm border-2 border-black whitespace-nowrap">
                            {event.date}
                          </span>
                        </div>

                        {/* Card Body */}
                        <div className="p-5 md:p-6 flex-grow flex flex-col bg-[#fdfbf7] relative">
                          <h4 className="text-xl md:text-2xl font-black uppercase tracking-tight leading-tight mb-4 group-hover:text-retroPink transition-colors">
                            {event.title}
                          </h4>

                          {event.shortDescription && (
                            <p className="font-bold text-sm md:text-base mb-6 text-black/80 leading-relaxed border-l-4 border-retroYellow pl-4 py-1">
                              {event.shortDescription}
                            </p>
                          )}

                          <div className="mt-auto flex flex-wrap gap-2.5">
                            {event.mode && (
                              <span className="flex items-center text-xs md:text-sm font-bold uppercase border-2 border-black px-3 py-1.5 rounded-lg bg-white shadow-brutal-sm hover:-translate-y-0.5 transition-transform cursor-default">
                                <MapPinIcon /> {event.mode}
                              </span>
                            )}
                            {event.participants && (
                              <span className="flex items-center text-xs md:text-sm font-bold uppercase border-2 border-black px-3 py-1.5 rounded-lg bg-retroYellow shadow-brutal-sm hover:-translate-y-0.5 transition-transform cursor-default">
                                <UsersIcon /> {event.participants}
                              </span>
                            )}
                            {event.venue && event.venue !== "N/A" && (
                              <span className="flex items-center text-xs md:text-sm font-bold uppercase border-2 border-black px-3 py-1.5 rounded-lg bg-retroBlue shadow-brutal-sm hover:-translate-y-0.5 transition-transform cursor-default">
                                <BuildingIcon /> {event.venue}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Card Footer Action */}
                        <div className="p-4 border-t-4 border-black bg-white flex justify-end items-center relative overflow-hidden">
                          <button 
                            onClick={() => setSelectedEvent(event)}
                            className="relative z-10 btn-pop bg-retroBlue text-black font-black uppercase px-8 py-3 rounded-xl border-2 border-black shadow-brutal hover:-translate-y-0.5 active:translate-y-1 active:translate-x-1 active:shadow-none transition-all duration-200 flex items-center gap-3 group/btn"
                          >
                            <span>Details</span>
                            <span className="text-xl leading-none group-hover/btn:translate-x-2 transition-transform">→</span>
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Modal Overlay for Event Details */}
      {selectedEvent && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto"
          onClick={() => setSelectedEvent(null)}
        >
          {/* Modal Container */}
          <div 
            className="relative w-full max-w-4xl bg-[#fdfbf7] border-4 border-black rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] my-auto flex flex-col max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            {/* Modal Header */}
            <div className={`p-4 md:p-6 border-b-4 border-black flex justify-between items-start ${TYPE_COLORS[selectedEvent.type] || "bg-retroPink"} relative`}>
              <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#000_10px,#000_20px)]"></div>
              <div className="relative z-10 flex flex-col gap-2">
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block bg-white text-black font-black text-xs md:text-sm uppercase border-4 border-black px-4 py-1.5 rounded-full shadow-brutal-sm transform -rotate-2">
                    {selectedEvent.type}
                  </span>
                  <span className="font-black text-xs md:text-sm bg-black text-white px-3 py-1.5 rounded-xl rotate-3 shadow-brutal-sm border-2 border-black whitespace-nowrap">
                    {selectedEvent.date}
                  </span>
                </div>
                <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight leading-tight mt-2">{selectedEvent.title}</h2>
              </div>
              
              <button 
                onClick={() => setSelectedEvent(null)}
                className="relative z-10 bg-white p-2 rounded-xl border-4 border-black shadow-brutal-sm hover:-translate-y-1 hover:shadow-brutal hover:bg-retroYellow transition-all ml-4 flex-shrink-0"
                aria-label="Close"
              >
                <XIcon />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 overflow-y-auto flex-grow flex flex-col md:flex-row gap-8 bg-[#fdfbf7]">
              {/* Left Column: Image */}
              <div className="w-full md:w-1/2 flex-shrink-0">
                <div className="border-4 border-black rounded-2xl overflow-hidden shadow-brutal-sm bg-white aspect-video md:aspect-square flex items-center justify-center relative">
                  {selectedEvent.image ? (
                    <img src={selectedEvent.image} alt={selectedEvent.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="font-black uppercase text-gray-400">No Image Available</div>
                  )}
                </div>
              </div>

              {/* Right Column: Info */}
              <div className="w-full md:w-1/2 flex flex-col gap-6">
                <div>
                  <h3 className="text-xl font-black uppercase mb-2 border-b-4 border-black pb-1 inline-block">About Event</h3>
                  <p className="font-bold text-black/80 leading-relaxed text-sm md:text-base whitespace-pre-wrap">
                    {selectedEvent.description}
                  </p>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 gap-4">
                  {selectedEvent.venue && selectedEvent.venue !== "N/A" && (
                    <div className="bg-retroBlue/20 border-2 border-black p-3 rounded-xl flex items-start gap-3">
                      <div className="bg-retroBlue p-2 rounded-lg border-2 border-black"><BuildingIcon /></div>
                      <div>
                        <div className="text-xs font-black uppercase text-black/60">Venue</div>
                        <div className="font-bold">{selectedEvent.venue}</div>
                      </div>
                    </div>
                  )}

                  {selectedEvent.participants && (
                    <div className="bg-retroYellow/20 border-2 border-black p-3 rounded-xl flex items-start gap-3">
                      <div className="bg-retroYellow p-2 rounded-lg border-2 border-black"><UsersIcon /></div>
                      <div>
                        <div className="text-xs font-black uppercase text-black/60">Participants</div>
                        <div className="font-bold">{selectedEvent.participants}</div>
                      </div>
                    </div>
                  )}

                  {selectedEvent.speakers && selectedEvent.speakers.length > 0 && (
                    <div className="bg-retroPink/20 border-2 border-black p-3 rounded-xl flex items-start gap-3">
                      <div className="bg-retroPink p-2 rounded-lg border-2 border-black">
                        <svg className="w-4 h-4 inline-block" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" /></svg>
                      </div>
                      <div>
                        <div className="text-xs font-black uppercase text-black/60">Speaker{selectedEvent.speakers.length > 1 ? 's' : ''}</div>
                        <div className="font-bold">{selectedEvent.speakers.join(", ")}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
