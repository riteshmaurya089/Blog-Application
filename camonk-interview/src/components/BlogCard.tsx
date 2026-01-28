import { Blog } from "../api/blogApi";

type BlogCardProps = {
  blog: Blog;
  onClick: () => void; // just call onClick when card is clicked
};

export default function BlogCard({ blog, onClick }: BlogCardProps) {
  return (
    <div
      className="border p-3 rounded cursor-pointer hover:shadow"
      onClick={onClick}
    >
      <h3 className="font-semibold">{blog.title}</h3>
      <p className="text-sm text-gray-600">{blog.description}</p>
      <div className="mt-1 text-xs text-gray-500">
        {blog.category.join(", ")}
      </div>
    </div>
  );
}
