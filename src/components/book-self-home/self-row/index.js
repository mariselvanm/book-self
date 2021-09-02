import './style.scss';
import book from "../../../assets/book1.jpg";

export default function SelfRow() {
    return(
        <div className="Self-Row-Container">
            <div className="Books-Row-View">
                <div className="Book-Preview-Image">
                    <img src={book} alt="book-preview" className="Preview-Image"/>
                    <img src={book} alt="book-preview" className="Preview-Image"/>
                    <img src={book} alt="book-preview" className="Preview-Image"/>
                    <img src={book} alt="book-preview" className="Preview-Image"/>
                    <img src={book} alt="book-preview" className="Preview-Image"/>
                    <img src={book} alt="book-preview" className="Preview-Image"/>
                    <img src={book} alt="book-preview" className="Preview-Image"/>
                    <img src={book} alt="book-preview" className="Preview-Image"/>
                    <img src={book} alt="book-preview" className="Preview-Image"/>
                    <img src={book} alt="book-preview" className="Preview-Image"/>
                    <img src={book} alt="book-preview" className="Preview-Image"/>
                    <img src={book} alt="book-preview" className="Preview-Image"/>
                    <img src={book} alt="book-preview" className="Preview-Image"/>
                </div>
            </div>
        </div>
    );
}