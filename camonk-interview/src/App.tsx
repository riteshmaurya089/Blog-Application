import { useState } from "react";
import BlogList from "./components/BlogList";
import BlogDetails from "./components/BlogDetails";
import CreateBlogForm from "./components/CreateBlogForm";
import Footer from "./components/Footer";

function App() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      {/* MAIN CONTENT */}
      <div className="flex-grow p-6">

        {/* HEADER */}
        <div className="mb-8 rounded-xl p-6 bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg relative">

          <div className="text-center text-white">
            <h1 className="text-4xl font-extrabold tracking-wide">
              CA Monk Blog Application
            </h1>
            <p className="text-sm mt-3 text-blue-100 tracking-wide">
              Discover insights • Share ideas • Inspire others
            </p>
          </div>

          <button
            onClick={() => setShowForm(!showForm)}
            className="absolute right-6 top-1/2 -translate-y-1/2 
              bg-white text-blue-600 font-semibold
              px-5 py-2 rounded-lg shadow
              hover:bg-blue-100 transition"
          >
            {showForm ? "Close Form" : "Create New Blog"}
          </button>
        </div>

        {/* FORM */}
        {showForm && (
          <div className="mb-6">
            <CreateBlogForm onSuccess={() => setShowForm(false)} />
          </div>
        )}

        {/* PANELS */}
        <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-6">

          {/* BLOG LIST */}
          <div className="bg-white rounded-xl shadow-md p-5 h-[70vh] overflow-y-auto border">

            <h2 className="text-lg font-semibold mb-4 border-b pb-2">
              📚 All Blogs
            </h2>

            <BlogList onSelect={setSelectedId} />
          </div>

          {/* BLOG DETAILS */}
          <div className="bg-white rounded-xl shadow-md p-6 h-[70vh] overflow-y-auto border">

            <h2 className="text-lg font-semibold mb-4 border-b pb-2">
              📝 Blog Details
            </h2>

            {selectedId ? (
              <BlogDetails id={selectedId} />
            ) : (
              <div className="text-gray-400 text-center mt-32">
                <p className="text-lg">No Blog Selected</p>
                <p className="text-sm mt-1">
                  Choose a blog from the left panel
                </p>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}

export default App;
