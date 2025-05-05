import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase"; // adjust path as needed

function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const snapshot = await getDocs(collection(db, "blogs"));
        const blogsData = snapshot.docs.map((doc) => {
          const data = doc.data();
          // If date is a Firestore Timestamp, convert it:
          let formattedDate = "";
          if (data.date && typeof data.date.toDate === "function") {
            formattedDate = data.date.toDate().toLocaleDateString();
            // or .toDate().toISOString(), or any format you like
          } else {
            formattedDate = data.date; // if they stored a string already
          }
          return {
            id: doc.id,
            title: data.title,
            content: data.content,
            date: formattedDate,
          };
        });
        setBlogs(blogsData);
      } catch (error) {
        console.error("Error fetching blogs: ", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div style={{ padding: "200px" }}>
      <h1>My Blog</h1>
      {blogs.map((blog, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
          <small>{blog.date}</small>
        </div>
      ))}
    </div>
  );
}

export default BlogPage;
