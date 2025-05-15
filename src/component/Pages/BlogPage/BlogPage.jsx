import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase"; // adjust path as needed

function BlogPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const snapshot = await getDocs(collection(db, "blogs_data"));
        const blogsData = snapshot.docs.map((doc) => {
          const data = doc.data();

          let formattedDate = "";
          if (data.date && typeof data.date.toDate === "function") {
            formattedDate = data.date.toDate().toLocaleDateString();
          } else {
            formattedDate = data.date;
          }

          return {
            id: doc.id,
            title: data.title,
            content: data.content,
            date: formattedDate,
            imageUrl: data.imageUrl || "",
            blog_link: data.blog_link || "",
            subheading1: data.subheading1 || "",
            subheading1_list: data.subheading1_list || [],
            subheading2: data.subheading2 || "",
            subheading2_list: data.subheading2_list || [],
            subheading3: data.subheading3 || "",
            subheading3_list: data.subheading3_list || "",
            subheading4: data.subheading4 || "",
            subheading4_list: data.subheading4_list || [],
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
    <div style={{ paddingTop: "200px", maxWidth: "800px", margin: "auto" }}>
      <h1>My Blog</h1>
      {blogs.map((blog, index) => (
        <div key={index} style={{ marginBottom: "40px" }}>
          <h2>{blog.title}</h2>

          {blog.imageUrl && (
            <img
              src={blog.imageUrl}
              alt={blog.title}
              style={{
                width: "100%",
                maxWidth: "500px",
                height: "auto",
                margin: "10px 0",
              }}
            />
          )}

          <p>{blog.content}</p>

          {/* Subheading 1 */}
          {blog.subheading1 && <h3>{blog.subheading1}</h3>}
          <ul>
            {blog.subheading1_list.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          {/* Subheading 2 */}
          {blog.subheading2 && <h3>{blog.subheading2}</h3>}
          <ul>
            {blog.subheading2_list.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          {/* Subheading 3 */}
          {blog.subheading3 && <h3>{blog.subheading3}</h3>}
          <p>{blog.subheading3_list}</p>

          {/* Subheading 4 */}
          {blog.subheading4 && <h3>{blog.subheading4}</h3>}
          <ul>
            {blog.subheading4_list.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>

          {/* Blog link */}
          {blog.blog_link && (
            <p>
              <a
                href={blog.blog_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {blog.blog_link}
              </a>
            </p>
          )}

          <small>Posted on: {blog.date}</small>
        </div>
      ))}
    </div>
  );
}

export default BlogPage;
