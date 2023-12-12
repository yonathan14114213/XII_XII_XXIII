import { useState } from 'react';
import './App.css';

const getRandomNumber = () => Math.floor(10000 * Math.random());

function translateNumberToColor(num: number) {
  let ans = 'black';
  switch (num) {
    case 1:
      ans = 'blue';
      break;
    case 2:
      ans = 'red';
      break;
    case 3:
      ans = 'green';
      break;
    case 4:
      ans = 'yellow';
      break;
    case 5:
      ans = 'pink';
      break;
    case 6:
      ans = 'purple';
      break;
    case 7:
      ans = 'orange';
      break;
    case 8:
      ans = 'brown';
      break;
    case 9:
      ans = 'turquoise';
      break;
    default:
      ans = 'black';
      break;
  }
  return ans;
}

let number = getRandomNumber();
console.log(number);

const first = Math.floor(number/1000)
number = number%1000
const second = Math.floor(number/100);
number = number%100
const third = Math.floor(number/10);
number = number%10
const fourth = number;

type ans = { bull: number; pgiha: number };
const arrOfResponses: ans[] = [];

function App() {
  const [countGuss, setCountGuss] = useState(0);

  const [firstGuss, setFirstGuss] = useState(0);
  const [secondGuss, setSecondGuss] = useState(0);
  const [thirdGuss, setThirdGuss] = useState(0);
  const [fourthGuss, setFourthGuss] = useState(0);

  const [gusscolor1, setGussColor1] = useState(translateNumberToColor(firstGuss));
  const [gusscolor2, setGussColor2] = useState(translateNumberToColor(secondGuss));
  const [gusscolor3, setGussColor3] = useState(translateNumberToColor(thirdGuss));
  const [gusscolor4, setGussColor4] = useState(translateNumberToColor(fourthGuss));

  const addToCount = () => {
    const num = countGuss;
    setCountGuss(num + 1);
  };

  const submit = (event: any) => {
    addToCount();
    event.preventDefault();

    const num1 = parseInt(event.target.elements.num1.value, 10);
    const num2 = parseInt(event.target.elements.num2.value, 10);
    const num3 = parseInt(event.target.elements.num3.value, 10);
    const num4 = parseInt(event.target.elements.num4.value, 10);

    setFirstGuss(num1);
    setSecondGuss(num2);
    setThirdGuss(num3);
    setFourthGuss(num4);

    setGussColor1(translateNumberToColor(num1));
    setGussColor2(translateNumberToColor(num2));
    setGussColor3(translateNumberToColor(num3));
    setGussColor4(translateNumberToColor(num4));

    let bull = 0;
    let pgiha = 0;
    if (num1 === first) {
      bull++;
    } else if (num1 === second || num1 === third || num1 === fourth) {
      pgiha++;
    }
    if (num2 === second) {
      bull++;
    } else if (num2 === first || num2 === third || num2 === fourth) {
      pgiha++;
    }
    if (num3 === third) {
      bull++;
    } else if (num3 === second || num3 === first || num3 === fourth) {
      pgiha++;
    }
    if (num4 === fourth) {
      bull++;
    } else if (num4 === second || num4 === third || num4 === first) {
      pgiha++;
    }
    if (bull < 4) {
      arrOfResponses.push({ bull: bull, pgiha: pgiha });
    } else {
      alert('you won');
    }
    if (countGuss>14) {
      alert(`you lose, the number are ${first} ${second} ${third} ${fourth}`)
    }
  };

  return (
    <>
      <div style={{ display: 'flex' }}>
        <div style={{ padding: '20px' }}>
          <h3>Response</h3>
          <ol>
            {arrOfResponses.map((item, index) => (
              <li key={index}>{`Bulls: ${item.bull}, Pgiha: ${item.pgiha}`}</li>
            ))}
          </ol>
        </div>
        <div style={{ padding: '20px' }}>
          <div>
            <h3>Your guess</h3>
            <div style={{ background: `${gusscolor1}`, width: '30px', height: '30px', margin: '5px' }}></div>
            <div style={{ background: `${gusscolor2}`, width: '30px', height: '30px', margin: '5px' }}></div>
            <div style={{ background: `${gusscolor3}`, width: '30px', height: '30px', margin: '5px' }}></div>
            <div style={{ background: `${gusscolor4}`, width: '30px', height: '30px', margin: '5px' }}></div>
          </div>
          <form onSubmit={submit}>
            <label>
              first number (between 0 and 9)
              <input type="number" name="num1" id="vol1" min="0" max="9" />
            </label>
            <br />
            <label>
              second number (between 0 and 9)
              <input type="number" name="num2" id="vol1" min="0" max="9" />
            </label>
            <br />
            <label>
              third number (between 0 and 9)
              <input type="number" name="num3" id="vol3" min="0" max="9" />
            </label>
            <br />
            <label>
              fourth number (between 0 and 9)
              <input type="number" name="num4" id="vol4" min="0" max="9" />
            </label>
            <br />

            <input type="submit" value="Submit" />
            <input type="reset" value="Reset" />
          </form>

          <p>you tried {countGuss} times</p>
          <p>guess left: {15-countGuss}</p>
        </div>
      </div>
    </>
  );
}

export default App;
