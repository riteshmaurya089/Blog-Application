import { useQuery } from "@tanstack/react-query";
import { getBlogs, Blog } from "../api/blogApi";
import BlogCard from "./BlogCard";
import { useState } from "react";

const PER_PAGE = 5;

type BlogListProps = {
  onSelect: (id: number) => void;
};

export default function BlogList({ onSelect }: BlogListProps) {
  const { data, isLoading } = useQuery<Blog[]>({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  const [category, setCategory] = useState("ALL");
  const [page, setPage] = useState(1);

  if (isLoading) return <p>Loading blogs...</p>;

  const filtered =
    category === "ALL"
      ? data
      : data?.filter((b: Blog) => b.category.includes(category));

  const totalPages = Math.ceil((filtered?.length || 0) / PER_PAGE);

  // Reset page if totalPages changed and current page is too high
  if (page > totalPages && totalPages > 0) setPage(totalPages);

  const start = (page - 1) * PER_PAGE;
  const blogs = filtered?.slice(start, start + PER_PAGE);

  return (
    <div>
      {/* Category Filter */}
      <div className="flex justify-between mb-3">
        <h2 className="font-semibold">Blogs</h2>
        <select
          className="border p-1 rounded"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setPage(1); // reset to first page on category change
          }}
        >
          <option value="ALL">All</option>
          <option value="TECH">Tech</option>
          <option value="FINANCE">Finance</option>
          <option value="GENERAL">General</option>
        </select>
      </div>

      {/* Blog Cards */}
      <div className="space-y-3">
        {blogs?.map((blog: Blog) => (
          <BlogCard key={blog.id} blog={blog} onClick={() => onSelect(blog.id)} />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-3 flex justify-between">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="px-2 py-1 border rounded"
        >
          Prev
        </button>
        <span>
          Page {page} of {totalPages || 1}
        </span>
        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages || totalPages === 0}
          className="px-2 py-1 border rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}
