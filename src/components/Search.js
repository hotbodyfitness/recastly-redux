import React from 'react';
import SearchContainer from '../containers/SearchContainer.js';

// class Search extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       value: ''
//     };
//   }

//   handleInputChange(e) {
//     this.props.getYouTubeVideos(e.target.value);
//     this.setState({
//       value: e.target.value
//     });
//   }


var Search = ({handleSearchInputChange}) => (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          // value={this.state.value}
          onChange={handleSearchInputChange}
        />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );

export default Search;
