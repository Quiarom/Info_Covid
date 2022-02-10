import Footer from "../components/Footer";
import Variant from "../components/Variant";
import "../assets/styles/CovidDex.css"
import USA from '../assets/Estados Unidos.png'

const info = [
    { name:'Alpha', description: 'Entre un 45% y un 90% más contagiosa', origin:'Reino Unido.png', date:'Octubre de 2020'},
    { name:'Delta', description: 'Sin evidencia de cambios', origin:'India.png', date:'Octubre de 2020'},
    { name:'Beta', description: '', origin:'Sudáfrica.png', date:'Diciembre de 2020'},
    { name:'Gamma', description: '', origin:'Brasil.png', date:'Enero 2021'},
    { name:'Epsilon', description: '', origin:USA, date:'Marzo de 2020'},
    { name:'Eta', description: '', origin:'Nigeria.png', date:'Diciembre de 2020'},
    { name:'Iota', description: '', origin:'Estados Unidos.png', date:'Noviembre de 2020'},
    { name:'Kappa', description: '', origin:'India.png', date:'Octubre de 2020'},
    { name:'Mu', description: '', origin:'Colombia.png', date:'Enero 2021'},
    { name:'Theta', description: '', origin:'Filipinas.png', date:'Enero 2021'},
    { name:'Zeta', description: 'Abril de 2020', origin:'Brasil.png', date:'Abril de 2020'},
    { name:'Omicrón', description: '', origin:'Sudáfrica.png', date:'Noviembre de 2021'}
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