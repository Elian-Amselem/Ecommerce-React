import './Contacto.css'
import Card from "./Card"
import CardsData from '../../components/Footer/CardsData';


function Contacto() {
  return (
    <>
      <h2 className='subtittle__contact'>¿Necesitas contactarnos?</h2>
      <div className='container2'>
      <Card details={CardsData}/>
      
    </div>
    </>
  );
}

export default Contacto;