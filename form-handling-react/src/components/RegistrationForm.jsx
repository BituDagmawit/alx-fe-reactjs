import { useState } from "react";

export default function RegistrationForm() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = e =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.username || !form.email || !form.password) {
      setError("All fields required");
      return;
    }
    console.log("Submitted:", form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" onChange={handleChange} value={form.username} />
      <input name="email" onChange={handleChange} value={form.email} />
      <input name="password" onChange={handleChange} value={form.password} />
      <button>Register</button>
      {error && <p>{error}</p>}
    </form>
  );
}
