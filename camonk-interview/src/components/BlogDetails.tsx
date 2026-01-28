import { useQuery } from "@tanstack/react-query";
import { getBlogById, Blog } from "../api/blogApi";

type BlogDetailsProps = {
  id: number;
};

export default function BlogDetails({ id }: BlogDetailsProps) {
  const { data: blog, isLoading, isError } = useQuery<Blog>({
    queryKey: ["blog", id],
    queryFn: () => getBlogById(id),
    enabled: !!id, // only fetch if ID exists
  });

  if (isLoading) return <p>Loading blog...</p>;
  if (isError || !blog) return <p className="text-red-500">Failed to load blog.</p>;

  return (
    <div className="space-y-3">
      <img
        src={blog.coverImage}
        alt={blog.title}
        className="w-full h-64 object-cover rounded"
      />
      <h2 className="text-2xl font-bold">{blog.title}</h2>
      <p className="text-sm text-gray-500">{blog.category.join(", ")}</p>
      <p>{blog.content}</p>
      <p className="text-xs text-gray-400">{new Date(blog.date).toDateString()}</p>
    </div>
  );
}
