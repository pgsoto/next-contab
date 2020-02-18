import useSWR from "swr";
import fetcher from '../src/helper/fetcher'
import Noty from 'noty'
import axios from 'axios'
import * as moment from 'moment'
import 'moment/locale/es'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/noty/lib/noty.css";  
import "../node_modules/noty/lib/themes/bootstrap-v4.css";
import Clientes from './clientes'

moment.locale('es');

Noty.overrideDefaults({
  // theme: 'bootstrap-v4',
  layout: 'topRight',
  timeout: 3000,
});

const App = () => {
  // const API_URL = process.env.API_URL
  // const { data } = useSWR(`${API_URL}/cliente`, fetcher)
  // if (!data) return <h1>Loading...</h1>

  return (
    <Clientes />
  )
}

export default App