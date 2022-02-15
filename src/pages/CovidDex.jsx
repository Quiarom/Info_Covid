import Footer from "../components/Footer";
import Variant from "../components/Variant";
import "../assets/styles/CovidDex.css"
// IMG
import USA from '../assets/Estados Unidos.png'
import CO from '../assets/Colombia.png'
import BR from '../assets/Brasil.png'
import ZA from '../assets/Sudafrica.png'
import GB from '../assets/Reino Unido.png'
import IN from '../assets/India.png'
import PH from '../assets/Filipinas.png'
import NG from '../assets/Nigeria.png'

const info = [
    { name:'Alpha', description: 'Entre un 45% y un 90% más contagiosa', origin:GB, date:'Octubre de 2020'},
    { name:'Delta', description: 'Sin evidencia de cambios', origin:IN, date:'Octubre de 2020'},
    { name:'Beta', description: '', origin:ZA, date:'Diciembre de 2020'},
    { name:'Gamma', description: '', origin:BR, date:'Enero 2021'},
    { name:'Epsilon', description: '', origin:USA, date:'Marzo de 2020'},
    { name:'Eta', description: '', origin:NG, date:'Diciembre de 2020'},
    { name:'Iota', description: '', origin:USA, date:'Noviembre de 2020'},
    { name:'Kappa', description: '', origin:IN, date:'Octubre de 2020'},
    { name:'Mu', description: '', origin:CO, date:'Enero 2021'},
    { name:'Theta', description: '', origin:PH, date:'Enero 2021'},
    { name:'Zeta', description: 'Abril de 2020', origin:BR, date:'Abril de 2020'},
    { name:'Omicrón', description: '', origin:ZA, date:'Noviembre de 2021'}
]

function Home() {
    return (
    <>
        <main>
            {info.map(info => (
                <Variant key={info.name} name={info.name} description={info.description} origin={info.origin} date={info.date}/>
            ))}
        </main>
        <Footer/>
    </>
)
}

export default Home