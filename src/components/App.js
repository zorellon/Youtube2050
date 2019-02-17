import React from 'react';
import SearchBar from './SearchBar';
import youtubev3 from '../APIs/youtubev3';

class App extends React.Component {

    onTermSubmit = (term) => {
        // Is the value coming back from searchbar?
        //console.log(term);

        // Call youtube api function
        youtubev3.get('/search',{
            params: {
                q: term
            }
        });
    };

    render() {
        return (
            <div className = "ui container"> 
                <SearchBar onTermSubmit = {this.onTermSubmit}/>
            </div>
        );
    }
}

export default App;
