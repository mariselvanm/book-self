import SelfRow from "../self-row";
import './style.scss';

export default function BookList() {
    return (
        <div className="Book-List-Container">
            <div className="Topic-Title">Programing</div>
            <div className="Books-Loader-Container">
                <SelfRow />
                <SelfRow />
                <SelfRow />
            </div>
        </div>
    );
}