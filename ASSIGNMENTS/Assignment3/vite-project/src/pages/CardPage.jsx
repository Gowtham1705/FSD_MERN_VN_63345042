import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./CardPage.css";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";

const images = [img1, img2, img3, img4, img5, img6];

export default function CardPage() {
  const nav = useNavigate();

  return (
    <>
      <Navbar />

      <div className="card-container">
        {images.map((img, index) => (
          <div
            className="card"
            key={index}
            onClick={() => nav(`/details/${index}`)}
          >
            <img src={img} className="card-img" />
            <p className="card-title">Outfit {index + 1}</p>
          </div>
        ))}
      </div>
    </>
  );
}
