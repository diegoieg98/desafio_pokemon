import pikachuu from '../assets/img/pikachuu.png'

const Home = () =>{

    return(
        <div className="home">
            <h1>Bienvenido maestro pokemon</h1>
            <img src={pikachuu} alt="" width='350px' height='350px' />
        </div>
    )
}
export default Home;