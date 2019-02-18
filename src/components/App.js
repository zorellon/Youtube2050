import React from 'react';
import SearchBar from './SearchBar';
import youtubev3 from '../APIs/youtubev3';
import VideoList from './VideoList';

class App extends React.Component {
    // Initialize empty list of videos
    state = {videos: []};

    onTermSubmit = async term => {
        // Is the value coming back from searchbar?
        //console.log(term);

        // Call youtube api function (asyn: use await)
        const response = await youtubev3.get('/search',{
            params: {
                // Searches the term submitted in search bar
                q: term
            }
        });
        // response.data.items contains list of videos
        // console.log(response);
        this.setState({videos: response.data.items});
    };

    render() {
        return (
            <div className = "ui container"> 
                <SearchBar onTermSubmit = {this.onTermSubmit}/>
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

export default App;
