import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog, BlogInput, Blog } from "../api/blogApi";

export default function CreateBlogForm() {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [content, setContent] = useState("");

  const client = useQueryClient();

  const mutation = useMutation<Blog, unknown, BlogInput>({
    mutationFn: createBlog,
    onSuccess: (newBlog) => {
      // Update the blogs list instantly without waiting for refetch
      client.setQueryData<Blog[]>(["blogs"], (old = []) => [newBlog, ...old]);

      // Clear form
      setTitle("");
      setDesc("");
      setContent("");

      alert("Blog created successfully!");
    },
    onError: (error) => {
      console.error("Create blog error:", error);
      alert("Failed to create blog. Try again.");
    },
  });

  const isLoading = mutation.status === "pending";

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!title || !description || !content) {
      alert("All fields are required!");
      return;
    }

    mutation.mutate({
      title,
      description,
      content,
      category: ["GENERAL"],
      coverImage: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
      date: new Date().toISOString(),
    });
  };

  return (
    <div className="bg-white p-4 rounded shadow space-y-3">
      <h2 className="font-semibold text-lg">Create Blog</h2>

      <input
        className="border p-2 w-full rounded"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="border p-2 w-full rounded"
        placeholder="Description"
        value={description}
        onChange={(e) => setDesc(e.target.value)}
      />

      <input
        className="border p-2 w-full rounded"
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button
        onClick={handleClick}
        disabled={isLoading}
        className={`px-4 py-2 rounded text-white ${
          isLoading ? "bg-gray-500 cursor-not-allowed" : "bg-black"
        }`}
      >
        {isLoading ? "Creating..." : "Create"}
      </button>
    </div>
  );
}
