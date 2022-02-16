
import './App.css';
import NavCom from './component/NavCom';
import Profile from './Profile/Profile'
import photo from './photo.jpg'

function App() {
  const handleMessage = fullName => alert(`hello ${fullName}`)
  return (
    <div >
      <NavCom />     
      <Profile  handleMessage={handleMessage} fullName= "Haythem Khemir" bio= "Je suis un ingenieur en informatique" profession= "Chef de Projet" >
      <img  className='im' src={photo}></img>
      </Profile>
    </div>
    
  );
  
  
}



export default App;
