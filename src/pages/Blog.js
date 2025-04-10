import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../sanityClient";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "blog"]{
          title,
          excerpt,
          slug,
          image {
            asset -> {
              url
            }
          }
        }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  return (
    <section id="blog" className="bg-gray-100 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Latest Insights & <span className="text-blue-500">Marketing Trends</span>
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Stay updated with expert tips, digital marketing strategies, and SEO trends.
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden group hover:shadow-2xl transition-shadow"
            >
              {post.image && (
                <img
                  src={post.image.asset.url}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
                <p className="text-gray-600 mt-2">
                  {post.excerpt ? `${post.excerpt.slice(0, 150)}...` : ""}
                </p>
                <Link
                  to={`/blog/${post.slug.current}`}
                  className="mt-4 inline-block text-blue-600 font-medium hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
