import { Route, Switch } from 'react-router-dom'
import Header from './Components/Header/Header';
import Main from './Pages/Main';
import Resturant from './Pages/Restaurant/Resturants';
import Banket from './Pages/Banket/Banket'
import Footter from './Components/Footer/Footter';
import Vacancies from './Pages/Vacancy/Vacancy';
import Concert from './Pages/EventMenu/Concert/Concert';
import News from './Pages/EventMenu/News/News';
import Stock from './Pages/EventMenu/Stock/Stock'
import Hotter from './Pages/DeliverMenu/MD/Hotter';
import Barmen from './Pages/Vacancy/VacancyHeader/VJobs/Barmen/Barmen';
import Oficiant from './Pages/Vacancy/VacancyHeader/VJobs/Oficiant/Oficiant';


const styles = {
  paddingTop: '70px'
}

function App(){
    return(
      <>
        <Header />
        <div style={styles}>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/restaurant' component={Resturant} />
            <Route path='/banket' component={Banket} />
            <Route exact path='/vacancy' component={Vacancies} />
            <Route path='/concert' component={Concert} />
            <Route path='/news' component={News} />
            <Route path='/stock' component={Stock} />
            <Route path='/hotter' component={Hotter} />
            <Route path='/vacancy/barmen' component={Barmen} />
            <Route path='/vacancy/oficiant' component={Oficiant} />
          </Switch>
        </div>
        <Footter />
      </>
    )
}


export default App;