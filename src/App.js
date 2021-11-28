import Comment from './components/Comment';
import './App.css';

function App() {
  const comment = {
    date: new Date(),
    text: 'I hope you enjoy Learning React!',
    author: {
      name:'Hello Kitty',
      avatarUrl:'https://placekitten.com/g/64/64',
    }
  }

  return (
    <div className="App">
      <Comment 
      author={comment.author}
      text={comment.text}
      date={comment.date}
      />
    </div>
  );
}

export default App;
