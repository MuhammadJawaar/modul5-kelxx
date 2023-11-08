import { AiFillStar } from "react-icons/ai";
import "./CardSmall.css";


export default function CardSmall({ title, genre, img, size, color, rating, onClick }) {
    const starCount = Math.floor(rating / 2);

    return (
        <div className="card" onClick={onClick}>
            <img src={img} alt="" className="photo" />
            <div className="description">
                <div>
                    <p id="title">{title}</p>
                    <p id="genre">{genre}</p>
                </div>
                <div>
                    {Array.from({ length: starCount }, (_, index) => (
                        <AiFillStar key={index} color={color} size={size} />
                    ))}
                </div>
            </div>
        </div>
    );
}
