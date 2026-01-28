// src/api/blogApi.ts

export type Blog = {
  id: number;
  title: string;
  description: string;
  content: string;
  category: string[];
  coverImage: string;
  date: string;
};

export type BlogInput = {
  title: string;
  description: string;
  content: string;
  category: string[];
  coverImage: string;
  date: string;
};

export const getBlogs = async (): Promise<Blog[]> => {
  const res = await fetch("http://localhost:3001/blogs");
  if (!res.ok) throw new Error("Failed to fetch blogs");
  return res.json();
};

export const getBlogById = async (id: number): Promise<Blog> => {
  const res = await fetch(`http://localhost:3001/blogs/${id}`);
  if (!res.ok) throw new Error("Failed to fetch blog");
  return res.json();
};

export const createBlog = async (blog: BlogInput): Promise<Blog> => {
  const res = await fetch("http://localhost:3001/blogs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(blog),
  });
  if (!res.ok) throw new Error("Failed to create blog");
  return res.json();
};
