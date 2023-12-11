import './App.css';
import { Country, Person} from './Components/Person';

function App() {

  const getAge = (name: string) : number => {
    return 99;
  }

  return (
    <div className="App">
      <Person
        name = "Alejandro"
        email = "alex@cool.com"
        age = {19}
        isMarried = {false}
        friends = {["kenia","oscar","ponky","andrea","pablo"]}
        country = {Country.France}

      />

    </div>
  );
}


export default App;