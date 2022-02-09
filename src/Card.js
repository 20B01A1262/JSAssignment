import logo from './lizard.jpg';
import './styles.css';
function Card() {  
    return (
    <div className="card">
         <img src={logo} />
         <h1>Lizard</h1>
         <h3>Lizards are a widespread group of <br></br>squamate reptiles,with over 6,000 <br></br>species,ranging across  all continents except Antarctica</h3>
         <table>
             <tr>
                 <td><button>SHARE</button></td>
                 <td><button>LEARN MORE</button></td>
             </tr>
         </table>
    </div> 
    )
    }
export default Card;