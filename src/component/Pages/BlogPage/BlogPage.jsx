// import React, { useEffect, useState } from "react";
// import { collection, getDocs } from "firebase/firestore";
// import blog_img from "../../../assets/images/blog_img.jpg";
// import { db } from "../../../firebase"; // adjust path as needed
// import "./BlogPage.scss";
// import { Container } from "react-bootstrap";
// function BlogPage() {
//   const [blogs, setBlogs] = useState([]);

//   // useEffect(() => {
//   //   const fetchBlogs = async () => {
//   //     try {
//   //       const snapshot = await getDocs(collection(db, "blogs_data"));
//   //       const blogsData = snapshot.docs.map((doc) => {
//   //         const data = doc.data();

//   //         let formattedDate = "";
//   //         if (data.date && typeof data.date.toDate === "function") {
//   //           formattedDate = data.date.toDate().toLocaleDateString();
//   //         } else {
//   //           formattedDate = data.date;
//   //         }

//   //         return {
//   //           id: doc.id,
//   //           title: data.title,
//   //           content: data.content,
//   //           date: formattedDate,
//   //           imageUrl: data.imageUrl || "",
//   //           blog_link: data.blog_link || "",
//   //           subheading1: data.subheading1 || "",
//   //           subheading1_list: data.subheading1_list || [],
//   //           subheading2: data.subheading2 || "",
//   //           subheading2_list: data.subheading2_list || [],
//   //           subheading3: data.subheading3 || "",
//   //           subheading3_list: data.subheading3_list || "",
//   //           subheading4: data.subheading4 || "",
//   //           subheading4_list: data.subheading4_list || [],
//   //         };
//   //       });
//   //       setBlogs(blogsData);
//   //     } catch (error) {
//   //       console.error("Error fetching blogs: ", error);
//   //     }
//   //   };

//   //   fetchBlogs();
//   // }, []);

//   return (
//     // <div style={{ paddingTop: "200px", maxWidth: "800px", margin: "auto" }}>
//     //   <h1>My Blog</h1>
//     //   {blogs.map((blog, index) => (
//     //     <div key={index} style={{ marginBottom: "40px" }}>
//     //       <h2>{blog.title}</h2>

//     //       {blog.imageUrl && (
//     //         <img
//     //           src={blog.imageUrl}
//     //           alt={blog.title}
//     //           style={{
//     //             width: "100%",
//     //             maxWidth: "500px",
//     //             height: "auto",
//     //             margin: "10px 0",
//     //           }}
//     //         />
//     //       )}

//     //       <p>{blog.content}</p>

//     //       {/* Subheading 1 */}
//     //       {blog.subheading1 && <h3>{blog.subheading1}</h3>}
//     //       <ul>
//     //         {blog.subheading1_list.map((item, idx) => (
//     //           <li key={idx}>{item}</li>
//     //         ))}
//     //       </ul>

//     //       {/* Subheading 2 */}
//     //       {blog.subheading2 && <h3>{blog.subheading2}</h3>}
//     //       <ul>
//     //         {blog.subheading2_list.map((item, idx) => (
//     //           <li key={idx}>{item}</li>
//     //         ))}
//     //       </ul>

//     //       {/* Subheading 3 */}
//     //       {blog.subheading3 && <h3>{blog.subheading3}</h3>}
//     //       <p>{blog.subheading3_list}</p>

//     //       {/* Subheading 4 */}
//     //       {blog.subheading4 && <h3>{blog.subheading4}</h3>}
//     //       <ul>
//     //         {blog.subheading4_list.map((item, idx) => (
//     //           <li key={idx}>{item}</li>
//     //         ))}
//     //       </ul>

//     //       {/* Blog link */}
//     //       {blog.blog_link && (
//     //         <p>
//     //           <a
//     //             href={blog.blog_link}
//     //             target="_blank"
//     //             rel="noopener noreferrer"
//     //           >
//     //             {blog.blog_link}
//     //           </a>
//     //         </p>
//     //       )}

//     //       <small>Posted on: {blog.date}</small>
//     //     </div>
//     //   ))}
//     // </div>
//     <section className="blog">
//       <Container>
//         <div className="blog_title">
//           <h1>Inside the Creative Classroom</h1>
//           <p>
//             Stories, insights, and breakthroughs from the minds shaping
//             tomorrow's creative industries.
//           </p>
//         </div>
//         <div className="recent_post">Recent post</div>
//         <div className="blog_row">
//           <div className="blog_row_img">
//             <img src={blog_img} alt="" />
//           </div>
//           <div>
//             <span>14 May 2025</span>
//             <h3>How AI is Revolutionizing Virtual Production in Filmmaking</h3>
//             <p>
//               Artificial Intelligence is redefining virtual production by making
//               filmmaking faster, smarter, and more visually stunning than ever
//               before. What once took months of manual work can now be achieved
//               in real-time, thanks to powerful AI-driven tools that are
//               transforming the creative pipeline. From automated environment
//               generation to real-time character animation, AI is eliminating
//               bottlenecks and opening new doors for filmmakers, designers, and
//               storytellers. Artists can now visualize entire worlds with just a
//               few prompts, animate characters with natural movements using
//               motion-capture alternatives, and tweak lighting or camera angles
//               on the fly—all without reshoots or heavy post-production...
//             </p>
//             <span>Read More</span>
//           </div>
//         </div>
//         <p className="top_title">Top Articles </p>
//         <div className="blog_top">
//           <div className="blog_top_col">
//             <div>
//               <img src={blog_img} alt="" />
//             </div>
//             <span>14 May 2025</span>
//             <h6>How AI is Revolutionizing Virtual Production in Filmmaking</h6>
//             <p>
//               Artificial Intelligence is redefining virtual production by making
//               filmmaking faster, smarter, and more visually stunning.
//             </p>
//           </div>
//           <div className="blog_top_col">
//             <div>
//               <img src={blog_img} alt="" />
//             </div>
//             <span>14 May 2025</span>
//             <h6>How AI is Revolutionizing Virtual Production in Filmmaking</h6>
//             <p>
//               Artificial Intelligence is redefining virtual production by making
//               filmmaking faster, smarter, and more visually stunning.
//             </p>
//           </div>
//           <div className="blog_top_col">
//             <div>
//               <img src={blog_img} alt="" />
//             </div>
//             <span>14 May 2025</span>
//             <h6>How AI is Revolutionizing Virtual Production in Filmmaking</h6>
//             <p>
//               Artificial Intelligence is redefining virtual production by making
//               filmmaking faster, smarter, and more visually stunning.
//             </p>
//           </div>
//           <div className="blog_top_col">
//             <div>
//               <img src={blog_img} alt="" />
//             </div>
//             <span>14 May 2025</span>
//             <h6>How AI is Revolutionizing Virtual Production in Filmmaking</h6>
//             <p>
//               Artificial Intelligence is redefining virtual production by making
//               filmmaking faster, smarter, and more visually stunning.
//             </p>
//           </div>
//           <div className="blog_top_col">
//             <div>
//               <img src={blog_img} alt="" />
//             </div>
//             <span>14 May 2025</span>
//             <h6>How AI is Revolutionizing Virtual Production in Filmmaking</h6>
//             <p>
//               Artificial Intelligence is redefining virtual production by making
//               filmmaking faster, smarter, and more visually stunning.
//             </p>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }

// export default BlogPage;
