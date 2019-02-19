import React from 'react';
import SearchBar from './SearchBar';
import youtubev3 from '../APIs/youtubev3';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    // Initialize empty list of videos
    state = {videos: [], selectedVideo: null};

    componentDidMount(){
        this.onTermSubmit('Meditation');
    };

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
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    onVideoSelect = (video) => {
        //console.log('the selected video is:', video);
        this.setState ({selectedVideo: video});
    };

    render() {
        return (
            <div className = "ui container"> 
                <SearchBar onTermSubmit = {this.onTermSubmit}/>
                <div className = "ui grid">
                    <div className = "ui row">
                        <div className = "eleven wide column">
                            <VideoDetail video = {this.state.selectedVideo} />
                        </div>
                        <div className = "five wide column">
                            <VideoList 
                                onVideoSelect= {this.onVideoSelect} 
                                videos={this.state.videos} 
                            />
                        </div>
                    </div>    
                </div> 
            </div>
        );
    }
}

export default App;
