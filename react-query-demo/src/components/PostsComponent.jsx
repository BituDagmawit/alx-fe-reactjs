import { useQuery } from "react-query";
import axios from "axios";

export default function PostsComponent() {
  const { data, isLoading, error, refetch } = useQuery(
    "posts",
    async () => (await axios.get("https://jsonplaceholder.typicode.com/posts")).data
  );

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching posts</p>;

  return (
    <>
      <button onClick={refetch}>Refetch</button>
      {data.map(p => (
        <p key={p.id}>{p.title}</p>
      ))}
    </>
  );
}
