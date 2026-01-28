import { useState } from "react";
import BlogList from "./components/BlogList";
import BlogDetails from "./components/BlogDetails";
import CreateBlogForm from "./components/CreateBlogForm";

function App() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        CA Monk Blog Application
      </h1>

      <CreateBlogForm />

      <div className="mt-6 grid grid-cols-1 md:grid-cols-[40%_60%] gap-6">
        
        {/* LEFT PANEL */}
        <div className="bg-white rounded-lg shadow p-4 h-[70vh] overflow-y-auto">
          <BlogList onSelect={setSelectedId} />
        </div>

        {/* RIGHT PANEL */}
        <div className="bg-white rounded-lg shadow p-6 h-[70vh] overflow-y-auto">
          {selectedId ? (
            <BlogDetails id={selectedId} />
          ) : (
            <p className="text-gray-500 text-center mt-20">
              Select a blog to view details
            </p>
          )}
        </div>

      </div>
    </div>
  );
}

export default App;
