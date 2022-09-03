import './Footter.css'

const Footter = ()=>{
    return(
        <>
        <div className="bot">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#9932cc" fill-opacity="1" d="M0,64L60,106.7C120,149,240,235,360,256C480,277,600,235,720,208C840,181,960,171,1080,170.7C1200,171,1320,181,1380,186.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
                <div className="footext">
                    <h1>IZЮM</h1>
                    <p style={{paddingTop: '50px'}}>Права не защищены </p>
                    <p>:P</p>
                    <ul>
                        <li><i class="fab fa-instagram"></i></li>
                        <li><i class="fab fa-facebook"></i></li>
                        <li><i class="fab fa-vk"></i></li>
                        <li><i class="fab fa-twitter"></i></li>
                    </ul>
                    <p className="ser" style={{paddingBottom: '30px'}}>@ 2022 Nurtilek A.</p>
                </div>
            </div> 
        </>
    )
}


export default Footter