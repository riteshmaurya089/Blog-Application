A modern blog application built using React, TypeScript, TanStack Query, Tailwind CSS, and shadcn/ui, with a JSON server backend.

This project is designed for the CA Monk Frontend Developer Assignment and demonstrates:

Fetching, displaying, and creating blogs

Blog detail view

Responsive design with professional UI

Form validation

Proper state management with TanStack Query

📌 Features

Read Blogs: View all blogs in a scrollable left panel.

Blog Details: Click a blog to view full content in the right panel.

Create Blog: Toggleable form in header to create a new blog.

Responsive UI: Works on desktop and mobile devices.

Professional Footer: Gradient footer with social links, tech badges, and copyright.

Form Validation: Ensures title, author, and content are not empty.

UI Styling:

Tailwind CSS for layout and design

shadcn/ui for components (optional in your version)

Header and footer gradients for visual consistency

Shadow, hover effects, and rounded corners for modern look

🖼 UI Layout

Header:

Gradient background (blue to indigo)

Centered app title: “CA Monk Blog Application”

Description subtitle

Button to toggle Create Blog form

Left Panel:

Blog list with cards showing title and author

Category filtering and pagination (if implemented)

Right Panel:

Blog details including title, author, and content

Default message if no blog is selected

Footer:

Gradient matching header

Social media icons with hover effects

Quick links section

Tech stack badges

Copyright notice

⚡ Tech Stack

Frontend: React, TypeScript, Tailwind CSS, shadcn/ui

State Management: TanStack Query

Backend: JSON Server

Icons: lucide-react

🚀 Getting Started
Prerequisites

Node.js v18+

npm v9+

Installation

Clone the repository:

git clone <your-forked-repo-url>
cd camonk-interview


Install dependencies:

npm install


Install lucide-react icons:

npm install lucide-react


Start JSON Server (backend API):

json-server --watch db.json --port 3001


Start React App:

npm start


Open in browser:

http://localhost:3000


🔹 API Endpoints

JSON Server provides:

Method	Endpoint	Description
GET	/blogs	Get all blogs
GET	/blogs/:id	Get a specific blog by ID
POST	/blogs	Create a new blog

Sample Blog Object:

{
  "id": 1,
  "title": "Future of Fintech",
  "author": "Admin",
  "content": "Full blog content..."
}

✅ Features Implementation

TanStack Query

Fetching all blogs and blog by ID

Automatic cache invalidation on new blog creation

Form Validation

All fields required before submission

Error alerts for empty fields

Responsive Layout

Grid layout with 1-column mobile view

2-panel layout on desktop

Professional UI

Gradient header & footer

Shadows, hover effects, rounded corners

Social icons with interactive hover

Footer

Gradient background

Social links

Tech stack badges

Copyright

📝 Notes

Must use JSON Server for backend.

Form validation is basic but ensures mandatory fields.

Tailwind CSS classes handle most UI design; additional styles can be added in index.css.

Use react-scripts start if using CRA; Vite instructions differ slightly.


📞 Contact

Ritesh Maurya
Email: riteshmaurya222201@gmail.com
