import React, { Component } from 'react';
import Button from '../components/Button/Button';
import InputBox from '../components/Input/Input';
import RandomNumberGenerator from '../helper/generateNumbers';
import './randomGenerator.scss';


const {
  generateNumbers,
  sortInAscendingOrder,
  sortInDescendingOrder
} = RandomNumberGenerator;

class RandomGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      errorMessage: '',
      displayState: 'none',
      disabled: false,
      limit: '',
      numbers: [],
      order: 'select',
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
    const { limit, order } = this.state;
    event.preventDefault();
    const generatedNumbers = generateNumbers(limit);

    const sortedNumbers =
      order === 'ascending' ? sortInAscendingOrder(generatedNumbers)
      : order === 'descending' ? sortInDescendingOrder(generatedNumbers)
      : generatedNumbers;

    this.setState({
      numbers: sortedNumbers
    });
  }

  onSelectOrderChange = (event) => {
    const { numbers } = this.state;
    const { value } = event.target;

    const sortedNumbers =
      value === 'ascending' ? sortInAscendingOrder(numbers)
      : value === 'descending' ? sortInDescendingOrder(numbers)
      : numbers;

    this.setState({ order: value, numbers: sortedNumbers });
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
              <select
                value={this.state.order}
                onChange={this.onSelectOrderChange}
                className='selectBox'
              >
                <option value='select'>Select order</option>
                <option value='ascending'>Ascending order</option>
                <option value='descending'>Descending order</option>
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
