import React, { Component } from 'react';
import ForexDropdown from './ForexDropdown';
import ForexInput from './ForexInput';
import { Button } from 'reactstrap';

class Forex extends Component {

    state = {
        amount: 0,
        baseCurrency: null,
        targetCurrency: null,
        covertedAmount: 0,
        baseCode: "",
        rate: "",
        targetCode: "",
        error: "",
        oneCurrency: "",
        toCurrency: "",
        equalsCurrency: "",
        exRate: ""
    }

    handleAmount = e => {
        this.setState({
            amount: e.target.value
        });
    }

    handleBaseCurrency = currency => {
        this.setState ({
            baseCurrency: currency
        })
    }

    handleTargetCurrency = currency => {
        this.setState({
            targetCurrency: currency
        });
    }

    handleConvert = () => {
        if (
            this.state.baseCurrency != null &&
            this.state.targetCurrency != null &&
            this.state.amount > 0
        ) {
          this.setState({ error: "" });
          this.setState({ oneCurrency: "" });
          this.setState({ toCurrency: "" });
          this.setState({ equalsCurrency: "" });
          this.setState({ exRate: "" });

          const code = this.state.baseCurrency.code;
    
          fetch ( "https://api.exchangeratesapi.io/latest?base=" + code )
            .then(res => res.json())
            .then(res => {
              
            const allRates = res.rates;
            const targetCode = this.state.targetCurrency.code;
            const rate = res.rates[targetCode];
              
            this.setState({ convertedAmount: this.state.amount * rate });

            this.setState({ baseCode: code });
            this.setState({ targetCode: targetCode });
            this.setState({ rate: rate });
            this.setState({ allRate: allRates });

            return (this.setState({ oneCurrency: "1" }), this.setState({ toCurrency: "to" }), this.setState({ equalsCurrency: "=" }), this.setState({ exRate: "Exchange currency rate:"}));

            });
        } else {
            this.setState({ error: "Please fill all the corresponding requirements." });
        }
    };

    render() {
        return (
            <div
                className= 'w-100 d-flex flex-column text-center'
            >
                <h1 className='text-center mb-5 text-success'>Forex Calculator</h1>
                <h6 
                    className="text-center text-danger"
                    style={{
                    backgroundColor: 'rgba(255,255,255,35%)'
                }}>
                    { this.state.error }
                </h6>
                <div 
                    className='d-flex justify-content-around' 
                    style={{
                        margin: '0 25rem'
                    }}
                > 
                    <ForexDropdown
                        label = { 'Base Currency'}
                        onClick = { this.handleBaseCurrency }
                        currency = { this.state.baseCurrency }
                    />
                    <ForexDropdown 
                        label = { 'Target Currency' }
                        onClick = { this.handleTargetCurrency }
                        currency = { this.state.targetCurrency }
                    />
                </div>
                <div
                    className = 'd-flex justify-content-around align-items-center flex-column'
                >
                    <ForexInput
                        label = { 'Amount '}
                        placeholder = { 'amount to convert' }
                        onChange = { this.handleAmount }
                    />
                    <Button
                        style={{
                            width: '100px'
                        }}
                        className = 'btn btn-info rounded-0'
                        onClick = { this.handleConvert }
                    >
                        Convert
                    </Button>
                </div>
                <div>
                    <h1 
                        className="text-center mt-5 text-success"
                    >
                        { this.state.convertedAmount } <span>{ this.state.targetCode }</span>
                    </h1>
                    <h6 
                        style={{
                        fontSize: '20px'
                    }}
                        className="text-center text-info font-italic mt-3"
                    >
                        { this.state.exRate }
                    </h6>
                    <h5
                        className="text-center text-info font-italic"
                    >
                        { this.state.oneCurrency } { this.state.baseCode } { this.state.toCurrency } { this.state.targetCode } {this.state.equalsCurrency } { this.state.rate } 
                    </h5>         
                </div>
            </div> 
        )
    }
}

export default Forex;