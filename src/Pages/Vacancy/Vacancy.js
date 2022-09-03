import Main from '../Main'
import './Vacancy.css'
import VHeader from './VacancyHeader/VHeader'
import Barmen from './VacancyHeader/VJobs/Barmen/Barmen'
import Hostes from './VacancyHeader/VJobs/Hostes/Hostes'
import Master from './VacancyHeader/VJobs/Master/Master'
import Menrestaurant from './VacancyHeader/VJobs/Menrestaorant/Menrestaurant'
import Oficiant from './VacancyHeader/VJobs/Oficiant/Oficiant'
import { Route, Switch } from 'react-router-dom'

const vstyle = {
    paddingTop: '70px'
  }

function Vacancies() {
    return(
        <>
          <VHeader />
          <div>
          {/* <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/barmen' component={Barmen} />
            <Route path='/menrestaurant' component={Menrestaurant} />
            <Route path='/oficiant' component={Oficiant} />
            <Route path='/hostes' component={Hostes} />
            <Route path='/master' component={Master} />
          </Switch> */}
          </div>
          <div className="about">
                <h3>О Нас</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit officiis nam sequi sunt accusantium modi rerum aperiam. Laudantium animi, distinctio sequi natus eaque consequuntur eos mollitia error corporis, aut qui porro incidunt nihil. Dolor tempora minus magnam consectetur consequatur atque voluptatum nisi voluptatem! Suscipit quibusdam magnam quaerat, necessitatibus odit quam labore aliquid est adipisci hic iusto, eveniet unde expedita id eum! Corporis rerum eaque maiores nisi harum sequi iste delectus deleniti dolorum ab nobis similique ea ducimus, consectetur officiis? Sint harum atque commodi alias dolor laudantium nam veritatis, voluptatum, quas modi nesciunt possimus ab accusamus sapiente libero iusto quae culpa.
                <br /><br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nemo suscipit ipsa a odit, distinctio eaque sint optio quae facilis officiis voluptatem, excepturi eos dolores nisi animi, quaerat incidunt minus dignissimos. Ducimus rerum fuga eum eius, ratione cup.
                </p>
          </div>
                <br />
          <div className="we">
                <h3>Почему Мы?</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit officiis nam sequi sunt accusantium modi rerum aperiam. Laudantium animi, distinctio sequi natus eaque consequuntur eos mollitia error corporis, aut qui porro incidunt nihil. Dolor tempora minus magnam consectetur consequatur atque voluptatum nisi voluptatem! Suscipit quibusdam magnam quaerat, necessitatibus odit quam labore aliquid est adipisci hic iusto, eveniet unde expedita id eum! Corporis rerum eaque maiores nisi harum sequi iste delectus deleniti dolorum ab nobis similique ea ducimus, consectetur officiis? Sint harum atque commodi alias dolor laudantium nam veritatis, voluptatum, quas modi nesciunt possimus ab accusamus sapiente libero iusto quae culpa.
                <br /><br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nemo suscipit ipsa a odit, distinctio eaque sint optio quae facilis officiis voluptatem, excepturi eos dolores nisi animi, quaerat incidunt minus dignissimos. Ducimus rerum fuga eum eius, ratione cup.
                </p>
          </div>
        </>
    )
}

export default Vacancies