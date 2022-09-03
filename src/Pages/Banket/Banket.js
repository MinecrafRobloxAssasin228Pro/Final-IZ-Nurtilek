import './Banket.css'
const Banket = ()=>{
    return(
       <>
          <div className="banket">
              <h1>
                <i style={{paddingRight:'10px'}} class="fas fa-utensils"></i>Банкетная служба   IZЮM
                </h1>
                <hr className="hr2" />
                 <div class="centermain">
                    <div class="inlinebox">
                        <div class="leftside">
                           <h1>#БАНКЕТ</h1>
                           <p>
                           Званый обед или ужин с полной посадкой, сервировкой и подачей нескольких блюд в торжественной обстановке.
                           </p>
                        </div>
                     <div class="rightside"> 
                  
                    </div>
                  </div>
                  <div className='inlinebox1'>
                       <div className='leftside1'>

                       </div>
                       <div className='rightside1'>
                          <h1>#ФУРШЕТ</h1>
                          <p>Вид приема, подразумевающий отсутствие индивидуальных посадочных мест и самостоятельный выбор гостями еды и напитков.</p>
                       </div>
                    </div>
                    <div class="inlinebox2">
                        <div class="leftside2">
                           <h1>#БАРБЕКЮ</h1>
                           <p>
                           Мероприятие на открытом воздухе, где главное угощение готовится, как правило, на гриле.
                           </p>
                        </div>
                     <div class="rightside2">  
                    </div>
                  </div>
                  <div className='inlinebox3'>
                       <div className='leftside3'>

                       </div>
                       <div className='rightside3'>
                          <h1>#ДЕЛОВОЙ ЗАВТРАК</h1>
                          <p>Это удобный формат делового мероприятия предполагает открытую дискуссию по вопросам сотрудничества и приятную неформальную часть-завтрак.</p>
                       </div>
                    </div>
                    <div class="inlinebox4">
                        <div class="leftside4">
                           <h1>#КОФЕ-БРЕЙК</h1>
                           <p>
                           Короткий перерыв во время конференций , семинаров , форумов с напитками и сытными закусками.
                           </p>
                        </div>
                     <div class="rightside4">  
                    </div>
                  </div>
               </div>
          </div>
       </>
    )
}

export default Banket;