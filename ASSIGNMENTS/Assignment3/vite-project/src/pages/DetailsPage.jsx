import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./DetailsPage.css";

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";

const images = [img1, img2, img3, img4, img5, img6];

export default function DetailsPage() {
  const { id } = useParams();
  const image = images[id]; // VERY IMPORTANT
  const name = `Outfit ${Number(id) + 1}`;

  return (
    <>
      <Navbar />

      <div className="details-box">
        <img src={image} className="details-img" />

        <div className="details-info">
          <h2>{name}</h2>
          <p>
            Premium quality Candy Fashion outfit. Stylish design suitable for
            all occasions.
          </p>
        </div>
      </div>
    </>
  );
}
