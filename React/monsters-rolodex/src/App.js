import './App.css';
import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component';


class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      search: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
  }

  render() {
    const {monsters, search} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(search.toLowerCase()))
    return (
      <div className="App">
        <input 
          type="search" 
          placeholder='search monster' 
          onChange={e => this.setState({search: e.target.value})} />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;


//How to Fetch Data with Hooks:
/* export const Card = () => {
  const [data, setData] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://jsonplaceholder.typicode.com/users',
      );
 
      setData(result.data);
    };
 
    fetchData();
  }, []);
 
  return (
    <>
      {data.map(item => (
        <h1 key={item.id}>
          {item.name}
        </h1>
      ))}
    </>
  );
} */
