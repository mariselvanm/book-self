import BookList from './book-list';
import Header from '../header';
import './style.scss';

export default function BookSelfHome() {
    return(
        <div className="Self-Home-Container">
            <Header />
            <div className="Self-Home-Main">
                <BookList />
                <BookList />
                <BookList />
            </div>
        </div>
    );
}