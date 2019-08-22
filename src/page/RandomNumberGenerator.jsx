import React, { Component } from 'react';
import Button from '../components/Button/Button';
import InputBox from '../components/Input/Input';
import generateNumber from '../helper/generateNumbers';
import './randomGenerator.scss';

class RandomGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      errorMessage: '',
      displayState: 'none',
      disabled: false,
      limit: '',
      numbers: []
    };
  }

  onInputChange = event => {
    event.preventDefault();
    const { value } = event.target;
    if (isNaN(value)) {
      this.setState({
        displayState: 'block',
        errorMessage: 'enter a valid number',
        disabled: true
      })
    } else if (value > 10000) {
      this.setState({
        displayState: 'block',
        errorMessage: 'Number can\'t be more than 10,000',
        disabled: true
      })
    } else if (value <= 0) {
      this.setState({
        display: 'block',
        errorMessage: 'Enter a positive number',
        disabled: true
      })
    } else {
      this.setState({
        limit: value,
        displayState: 'none',
        errorMessage: '',
        disabled: false
      });
    }
  }

  handleGenerateButton = (event) => {
    event.preventDefault();
    const generatedNumbers = generateNumber(this.state.limit);
    this.setState({
      numbers: generatedNumbers
    });
  }

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
            <Button
              className='button'
              type='button'
              text='Generate Phone numbers'
              onClick={this.handleGenerateButton}
              disabled={this.state.disabled}
            />
            <div>
              <select className='selectBox'>
                <option value='0'>Select order</option>
                <option value='1'>Ascending order</option>
                <option value='2'>Descending order</option>
              </select>
            </div>
            <InputBox
              className='number-box'
              type="text"
              placeholder='Enter a limit here...'
              name='limit'
              onChange={this.onInputChange}
            />
            <div className='error-message' style={{ display: this.state.displayState }}>
              <span>{this.state.errorMessage}</span>
            </div>
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
            <div className='scroll'>
              <table>
                <tbody>
                  <tr>
                    <th>S/N</th>
                    <th>Phone number</th>
                  </tr>
                  {this.state.numbers &&
                    this.state.numbers.map(randomNumbers => {
                      return (
                        <tr key={randomNumbers}>
                          <td>{this.state.numbers.indexOf(randomNumbers) + 1}</td>
                          <td>{randomNumbers}</td>
                        </tr>
                      )
                    })}
                </tbody>
              </table>
            </div>
            <Button
              className='button downloadButton'
              type='submit'
              text='Download'
            />
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
