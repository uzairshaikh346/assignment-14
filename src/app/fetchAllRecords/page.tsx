"use client"

import { useState, useEffect } from 'react';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data: Post[] = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">All Posts</h1>
      <ul className="space-y-4">
        {posts.map(post => (
          <li key={post.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
            <a 
              href={`/post/${post.id}`}
              className="block p-4 text-lg text-blue-600 hover:text-blue-800"
            >
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;