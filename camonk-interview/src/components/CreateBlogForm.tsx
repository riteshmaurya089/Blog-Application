import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { createBlog } from "../api/blogApi";

type Props = {
  onSuccess: () => void;
};

export default function CreateBlogForm({ onSuccess }: Props) {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [content, setContent] = useState("");

  const [errors, setErrors] = useState({
    title: "",
    description: "",
    content: "",
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      setTitle("");
      setDesc("");
      setContent("");
      setErrors({ title: "", description: "", content: "" });
      onSuccess();
    },
  });

  // ✅ Validation
  const validate = () => {
    let valid = true;
    const newErrors = { title: "", description: "", content: "" };

    if (!title.trim()) {
      newErrors.title = "Title is required";
      valid = false;
    }

    if (!description.trim()) {
      newErrors.description = "Description is required";
      valid = false;
    }

    if (!content.trim()) {
      newErrors.content = "Content is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    mutation.mutate({
      title,
      description,
      content,
      category: ["GENERAL"],
      coverImage:
        "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
      date: new Date().toISOString(),
    });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-2xl mx-auto">

      <h2 className="text-xl font-semibold mb-1">
        Create New Blog
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Share your thoughts with the community
      </p>

      {/* TITLE */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Blog Title
        </label>
        <input
          className={`border rounded-md p-2 w-full outline-none
            ${errors.title ? "border-red-500" : ""}
          `}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title}</p>
        )}
      </div>

      {/* DESCRIPTION */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Short Description
        </label>
        <input
          className={`border rounded-md p-2 w-full outline-none
            ${errors.description ? "border-red-500" : ""}
          `}
          value={description}
          onChange={(e) => setDesc(e.target.value)}
        />
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">{errors.description}</p>
        )}
      </div>

      {/* CONTENT */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-1">
          Blog Content
        </label>
        <textarea
          className={`border rounded-md p-2 w-full h-32 outline-none
            ${errors.content ? "border-red-500" : ""}
          `}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        {errors.content && (
          <p className="text-red-500 text-sm mt-1">{errors.content}</p>
        )}
      </div>

      <button
        disabled={mutation.status === "pending"}
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white py-2 rounded-md
                   hover:bg-blue-700 transition font-semibold disabled:opacity-50"
      >
        {mutation.status === "pending" ? "Publishing..." : "Publish Blog"}
      </button>

      {mutation.status === "error" && (
        <p className="text-red-500 text-sm mt-3 text-center">
          Failed to create blog. Try again.
        </p>
      )}

    </div>
  );
}
