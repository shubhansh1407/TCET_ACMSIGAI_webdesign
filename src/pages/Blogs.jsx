import React, { useState } from "react";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { StickerBadge } from "../components/ui/StickerBadge";
import { blogsData } from "../data/blogsData";

export default function Blogs() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "ALL",
    "AI RESEARCH",
    "TUTORIALS",
    "MACHINE LEARNING",
    "CAREER",
  ];

  // Filter blogs based on category and search query
  const filteredBlogs = blogsData.filter((blog) => {
    const matchesCategory =
      selectedCategory === "ALL" ||
      blog.category.toUpperCase() === selectedCategory;
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.snippet.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredBlog = blogsData[0];

  return (
    <div className="space-y-10 bg-paper-grid min-h-screen pb-12">
      {/* Header Section */}
      <SectionHeader
        title="TCET SIGAI BLOGS"
        subtitle="Insights, deep dives, and student perspectives on Artificial Intelligence."
        badgeText="READ & LEARN"
      />

      {/* Hero Featured Article (Magazine Style) */}
      {featuredBlog && (
        <div className="bg-retroYellow border-3 border-black rounded-3xl p-6 md:p-10 shadow-brutal-lg relative overflow-hidden">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            {featuredBlog.image && (
              <div className="w-full md:w-1/2 border-2 border-black rounded-2xl overflow-hidden shadow-brutal h-64 md:h-80">
                <img
                  src={featuredBlog.image}
                  alt={featuredBlog.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="w-full md:w-1/2 space-y-4">
              <div className="flex gap-2 items-center">
                <StickerBadge
                  text="FEATURED"
                  color="bg-retroPink"
                  rotation="-rotate-3"
                />
                <span className="font-bold text-xs bg-black text-white px-2.5 py-1 rounded">
                  {featuredBlog.readTime || "5 MIN READ"}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-black leading-tight uppercase">
                {featuredBlog.title}
              </h2>
              <p className="font-medium text-black text-base line-clamp-3">
                {featuredBlog.snippet}
              </p>
              <div className="flex justify-between items-center pt-2 border-t-2 border-black">
                <span className="font-bold text-xs uppercase">
                  By {featuredBlog.author} • {featuredBlog.date}
                </span>
                <Button variant="pink" size="sm">
                  Read Article →
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filter and Search Bar Controls */}
      <div className="bg-white border-3 border-black rounded-2xl p-4 shadow-brutal flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* Category Tags */}
        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1.5 font-black text-xs uppercase border-2 border-black rounded-lg transition-all ${
                selectedCategory === category
                  ? "bg-retroBlue shadow-brutal -translate-y-0.5"
                  : "bg-retroBg hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="w-full md:w-64">
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-3 py-1.5 font-bold text-sm border-2 border-black rounded-lg bg-retroBg focus:outline-none focus:bg-white shadow-brutal"
          />
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog, index) => {
            const cardColors = ["bg-white", "bg-retroBg", "bg-retroGreen/20"];
            const colorClass = cardColors[index % cardColors.length];

            return (
              <div key={blog.id || index} className="flex flex-col h-full">
                <Card
                  title={blog.title}
                  category={blog.category}
                  description={blog.snippet}
                  image={blog.image}
                  bgColor={colorClass}
                />
                <div className="mt-auto pt-3 flex justify-between items-center px-1">
                  <span className="font-bold text-xs text-gray-700 uppercase">
                    {blog.date}
                  </span>
                  <Button variant="yellow" size="sm">
                    Read →
                  </Button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="col-span-full text-center py-12 bg-white border-3 border-black rounded-2xl shadow-brutal">
            <h3 className="font-black text-2xl uppercase">No blogs found</h3>
            <p className="font-bold text-gray-600 mt-2">
              Try adjusting your search query or selected category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
