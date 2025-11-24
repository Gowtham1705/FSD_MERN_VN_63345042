import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./FormPage.css";

export default function FormPage() {
  const nav = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    nav("/cards");
  }

  return (
    <>
      <Navbar />

      <h1 className="title">CANDY OUTFITZ</h1>

      <form className="form-box" onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Name" required />
        <input type="email" placeholder="Enter Email" required />
        <input type="password" placeholder="Enter Password" required />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
