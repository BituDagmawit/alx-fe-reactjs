import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// REQUIRED fetch function
const fetchPosts = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data;
};

export default function PostsComponent() {
  const {
    data,
    isLoading,
    isError,
    error,     // ✅ REQUIRED
    refetch
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  return (
    <>
      {/* REQUIRED refetch interaction */}
      <button onClick={refetch}>Refetch Posts</button>

      {data.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </>
  );
}
