export default function UserCard({ user }){
  if (!user) return null;
  return (
    <div>
      <img src={user.avatar_url} alt="" width="80"/>
      <h3>{user.login}</h3>
      <p>{user.bio}</p>
      <a href={user.html_url} target="_blank">View on GitHub</a>
    </div>
  );
}
