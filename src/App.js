import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Banner from './components/Banner';


function App() {

  const [dog, setDog] = useState('');
  const [selectBreed, setSelectBreed] = useState('beagle');

  const API_URL = `https://dog.ceo/api/breed/${selectBreed}/images/random`;

  const random = () => {
    axios.get(API_URL)
      .then((response) => {
        setDog(response.data.message);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    random();
  }, [])

  return (

    <div>
      <Banner />


      <div id="container">
        <img src={dog} alt="Random dog" />

        <div id="select">
          <label>
            Select breed:
            <select
              value={selectBreed}
              onChange={(e) => setSelectBreed(e.target.value)}>
              <option value="hound">Hound</option>
              <option value="beagle">Beagle</option>
              <option value="poodle">Poodle</option>
              <option value="collie">Collie</option>
              <option value="akita">Akita</option>
              <option value="terrier">Terrier</option>
              <option value="germanshepherd">German Shepherd</option>
              <option value="labrador">Labrador</option>
            </select>
          </label>

          <button onClick={random}>Show</button>
        </div>
      </div>
    </div>

  );
}

export default App;
