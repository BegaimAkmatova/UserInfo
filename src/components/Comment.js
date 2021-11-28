import Card from './Card';
import './Comment.css'
import UserInfo from './UserInfo';

function Comment (props) {
    return (
        <Card className="Comment">
            <UserInfo author={props.author}/>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-Date">
                {props.date.toLocaleString()}
            </div>
        </Card>
    )
}
export default Comment;