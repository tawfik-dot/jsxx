import logo from './logo.svg';
import './App.css';
import proj2 from "./proj2.jpg"

function App() {
  function createForm() {
    
    return (
      <div style={{border:"solid 1px black",maxwidth:"100vw"}}>
       <h1 class="title red">Your name here </h1>
       <img class="imgg" src={proj2} ></img>
       <img class="imgg"  src={"/proj1.jpg"} alt="proj1" ></img>

       <video class="imgg"  width="750" height="500" controls >
      <source src={"/vd.mp4"} type="video/mp4"/>
     </video>

      </div>





    );
    const ActionLink = () => {
      const handleClick = e => {
        e.preventDefault();
        console.log("The link was clicked.");
      };
     
      return (
        <a href="/" onClick={handleClick}>
          Click me
        </a>
      );
     };
  }
  return <div>{createForm()}</div>;
}

export default App;
