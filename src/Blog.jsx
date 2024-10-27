import React from 'react';

const blogs = [
  {
    id: 1,
    title: 'Exploring the Mountains',
    description: 'Join us as we explore the majestic mountains and discover the beauty of nature.',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 2,
    title: 'The Art of Cooking',
    description: 'Delve into the culinary world with our delicious recipes and cooking tips.',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 3,
    title: 'Traveling the World',
    description: 'A journey through the most beautiful destinations around the globe.',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 4,
    title: 'Tech Innovations',
    description: 'Stay updated with the latest trends and innovations in technology.',
    image: 'https://via.placeholder.com/300',
  },
];

const BlogPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Latest Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-700 mb-4">{blog.description}</p>
              <a
                href={`/blog/${blog.id}`}
                className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
