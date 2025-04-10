import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import sanityClient from "../sanityClient";
import { PortableText } from "@portabletext/react";

const SinglePost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "blog" && slug.current == $slug][0]{
          title,
          excerpt,
          body,
          image {
            asset -> {
              url
            }
          }
        }`,
        { slug }
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, [slug]);

  if (!post) return <div className="text-center py-20">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Back Button */}
      <button
        onClick={() => navigate("/#blog")}
        className="mb-6 text-blue-600 hover:underline font-medium"
      >
        ← Back to Blog
      </button>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-4 text-gray-800">{post.title}</h1>

      {/* Image */}
      {post.image && (
        <img
          src={post.image.asset.url}
          alt={post.title}
          className="w-full h-auto rounded-lg mb-6"
        />
      )}

      {/* Excerpt */}
      {post.excerpt && (
        <p className="text-gray-600 text-lg mb-6">{post.excerpt}</p>
      )}

      {/* Body */}
      {post.body && (
        <div className="prose max-w-none">
          <PortableText value={post.body} />
        </div>
      )}
    </div>
  );
};

export default SinglePost;
