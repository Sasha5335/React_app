import './App.css';
import Aloha from './components/Aloha/index'

function App() {
  const user = {
    firstName: "Sasha",
    url: 'http://placehold.it/100'
  }

  const user1 = {
    firstName: "Masha",
    url: 'http://placehold.it/100'
  }

  const user2 = {
    firstName: "Dasha",
    url: 'http://placehold.it/100'
  }

  return (
    <>
      <Aloha name={user.firstName} photo={user.url} />
      <Aloha name={user1.firstName} photo={user1.url} />
      <Aloha name={user2.firstName} photo={user2.url} />
    </>
  )
}

export default App;
