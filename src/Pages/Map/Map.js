import './Map.css'

function Map() {
    return(
        <>
            <div className="pofot">
               <div className='mco'>
                    <div className="cont">
                            <h1>НАШИ <span style={{color:'rgb(170, 0, 255)'}}>КОНТАКТЫ</span></h1>
                            <div className="podline"></div>
                            <p><i class="fas fa-map-marker-alt"></i> <br /> 214 ул.Ленина Ош</p>
                            <p><i class="far fa-envelope"></i> <br /> izumosh@gmail.com</p>
                            <p><i class="fas fa-phone-square"></i> <br /> +996 777 590 361 <br /> +996 553 609 243</p>
                    </div>
                    <div className="map">
                        <div style={{position:"relative;overflow:hidden;"}}><a href="https://yandex.ru/maps/org/izyum_resto_bar/154877620464/?utm_medium=mapframe&utm_source=maps" style={{color:"#eee;font-size:12px;position:absolute;top:0px;"}}></a><a href="https://yandex.ru/maps/10310/osh/category/nightclub/184106368/?utm_medium=mapframe&utm_source=maps" style={{color:"#eee;font-size:12px;position:absolute;top:14px;"}}></a><iframe className='maap' src="https://yandex.ru/map-widget/v1/-/CCUymZsh2A " frameborder="1" allowfullscreen="false" style={{position:"relative;"}}></iframe>
                        </div>
                    </div>
               </div>
            </div>
        </>
    )
}


export default Map;