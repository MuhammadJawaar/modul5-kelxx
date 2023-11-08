import { AiFillStar } from "react-icons/ai";
import "./CardBig.css"; // Ubah file CSS sesuai dengan file CardBig.css

export default function CardBig({ title, genre, img, size, color, rating, onClick }) {
    const starCount = Math.floor(rating / 2);

    return (
        <div className="containerBig" onClick={onClick}>
            <img src={img} alt="" className="posterBig" />
            <div className="descriptionBig">
                <div>
                    <p id="title">{title}</p>
                    <p id="genre">{genre}</p>
                </div>
                <div className="stars">
                {Array.from({ length: starCount }, (_, index) => (
                        <AiFillStar key={index} color={color} size={size} />
                    ))}
                </div>
            </div>
        </div>
    );
}
