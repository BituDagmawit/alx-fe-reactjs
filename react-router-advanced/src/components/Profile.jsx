import { Link, Routes, Route } from "react-router-dom";
import Details from "./ProfileDetails";
import Settings from "./ProfileSettings";

export default function Profile() {
  return (
    <>
      <Link to="details">Details</Link>
      <Link to="settings">Settings</Link>

      <Routes>
        <Route path="details" element={<Details />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </>
  );
}