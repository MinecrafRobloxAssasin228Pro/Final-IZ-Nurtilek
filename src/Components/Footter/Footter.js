const Footer = ()=>{
    return(
        <>
          <div className="foot">
             <ul className="foot-flex">
                <div className="foot-logo">
                    <li>
                        <a href="">
                            IZUM
                        </a>
                    </li>
                </div>
                <div className="about">
                    <h2>
                        О компании
                    </h2>
                   <ul>
                       <li>
                           <a href="">
                              Вакансии
                           </a>
                       </li>
                       <li>
                           <a href="">
                               Контакты
                           </a>
                       </li>
                   </ul>
                </div>
                <div className="rest">
                    <h2>
                       Рестораны
                    </h2>    
                   <ul>
                       <li>
                           <a href="">
                               Концерты
                           </a>
                       </li>
                       <li>
                           <a href="">
                               Фотоотчеты
                           </a>
                       </li>
                       <li>
                           <a href="">
                               Банкеты
                           </a>
                       </li>
                       <li>
                           <a href="">
                               Отзывы
                           </a>
                       </li>
                       <li>
                           <a href="">
                               Бранирование:
                               0550555555
                           </a>
                       </li>
                   </ul>
                </div>
                <div className="delivery">
                        <h2>Служба доставки</h2>
                    <ul>
                        <li>
                            <a href="">
                                Доставка и оплата
                            </a>
                        </li>  
                        <li>
                            <a href="">
                                Служба доставки:0550555555
                            </a>
                        </li>  
                        <li>
                            <a href="">
                                Ползовательское соглашение
                            </a>
                        </li> 
                    </ul>
                </div>
                <div className="icons">
                    <li>
                        <a href="">
                           <i class="fab fa-instagram"></i>
                        </a>
                    </li>
                    
                </div>
             </ul>
          </div>
        </>
    )
}