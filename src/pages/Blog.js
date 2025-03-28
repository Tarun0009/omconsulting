import React from "react";

const blogPosts = [
  {
    id: 1,
    title: "How Digital Marketing Can Boost Your Business",
    excerpt: "Discover the latest digital marketing strategies to grow your brand online.",
    image: "https://source.unsplash.com/600x400/?marketing,digital",
    link: "/blog/digital-marketing",
  },
  {
    id: 2,
    title: "SEO Trends in 2024: What You Need to Know",
    excerpt: "Stay ahead of the competition with the latest SEO trends and best practices.",
    image: "https://source.unsplash.com/600x400/?seo,search",
    link: "/blog/seo-trends-2024",
  },
  {
    id: 3,
    title: "The Power of Social Media Advertising",
    excerpt: "Maximize your brand's reach with effective social media strategies.",
    image: "https://source.unsplash.com/600x400/?socialmedia,advertising",
    link: "/blog/social-media-ads",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="bg-gray-100 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Latest Insights & <span className="text-blue-500">Marketing Trends</span>
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Stay updated with expert tips, digital marketing strategies, and SEO trends.
        </p>

        {/* Blog Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden group hover:shadow-2xl transition-shadow"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
                <p className="text-gray-600 mt-2">{post.excerpt}</p>
                <a
                  href={post.link}
                  className="inline-block mt-4 text-blue-600 font-medium hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
