import React from 'react';

import Header from './Header'
import ContestList from './ContestList'

import data from '../testData.json'

class App extends React.Component {
    state = { 
        pageHeader: 'Naming Contest',
        contests: this.props.initialContests 
    }
    
    componentDidMount = () => {
    }

    render() {
        return (
            <div className="App">
                <Header message= {this.state.pageHeader} />
                <ContestList contests={this.state.contests} />
            </div>
        )
    }
}

export default App