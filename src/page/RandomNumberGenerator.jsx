import React, {Component} from 'react';
import './randomGenerator.scss';

class RandomGenerator extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Phone Number Generator
          </p>
        </header>
        <div className='app-body'>
          <form className='container'>
            <button className='generateButton' type='button'>
              Generate Phone numbers
            </button>
            <div>
              <select className='selectBox'>
                <option value='0'>Select order</option>
                <option value='1'>Ascending order</option>
                <option value='2'>Descending order</option>
              </select>
            </div>
            <input
              className='number-box'
              type="text"
              name='input'
              placeholder='Enter a limit here...'
            />
            {/* <div className='errorMessage' style={{display: 'block'}}>
              <span>error message</span>
            </div> */}
            <div className="maxMin-instance">
              <label className='max-num'>
                Max number: some numbers
              </label>
              <label className='min-num'>
                Min number: some numbers
              </label>
            </div>
          </form>
          <div className='number-table'>
            <table>
              <div className='scroll'>
                <tr>
                  <th>S/N</th>
                  <th>Phone number</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>07065349529</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>07065349529</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>07065349529</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>07065349529</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>07065349529</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>07065349529</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>07065349529</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>07065349529</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>07065349529</td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>07065349529</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>07065349529</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>07065349529</td>
                </tr>
              </div>
            </table>
            <button className='downloadButton'>
              Download
            </button>
          </div>
        </div>
        <footer>
          &copy; {new Date().getFullYear()} <a href='https://github.com/d-beloved'>d-beloved</a>
        </footer>
      </div>
    );
  }
}

export default RandomGenerator;
