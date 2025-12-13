import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data;
};

export default function PostsComponent() {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,

    // ✅ REQUIRED cache options
    staleTime: 1000 * 60,
    cacheTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    keepPreviousData: true
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>{error.message}</p>;

  return (
    <>
      {/* ✅ Data refetch interaction */}
      <button onClick={refetch}>Refetch Posts</button>

      {data.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </>
  );
}
