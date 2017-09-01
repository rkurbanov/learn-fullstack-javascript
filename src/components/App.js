import React from 'react';

import Header from './Header'
import ContestPreview from './ContestPreview'

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
                <div>
                    {this.state.contests.map( contest => 
                        <ContestPreview key={contest.id} { ...contest } />
                    )}
                </div>
            </div>
        )
    }
}

export default App