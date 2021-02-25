import './App.css';
import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';


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

  handleChange = e => {
    this.setState({search:e.target.value})
  }

  render() {
    const {monsters, search} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(search.toLowerCase()))
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='search monsters' handleChange={this.handleChange}/>
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
