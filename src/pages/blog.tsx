import { useEffect, useState } from "react";
import axios from "axios";
import PageTitle from "../components/PageTitle";

type Post = {
  id: number;
  title: string;
  body: string;
};

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/posts")
      .then(({ data }) => setPosts(data.posts));
  }, []);

  return (
    <div className="container p-2 mx-auto mt-3 grid gap-12">
      <PageTitle text="Blog" />
      {!posts && <h1>Loading...</h1>}
      {posts && (
        <div className="grid gap-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex flex-col px-5 py-3 gap-3 border border-stone-700 rounded-md"
              >
                <h2 className="text-lg font-bold">{post.title}</h2>
                <p>{post.body.slice(0, 100)}...</p>
              </article>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
