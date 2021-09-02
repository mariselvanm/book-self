import SelfRow from './self-row';
import './style.scss';

export default function BookSelfHome() {
    return(
        <div className="Self-Home-Container">
            <SelfRow />
            <SelfRow />
            <SelfRow />
            <SelfRow />
            <SelfRow />
            <SelfRow />
        </div>
    );
}