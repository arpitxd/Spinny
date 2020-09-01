import React from 'react';
import { CustomButton, CustomText } from 'basePath/views/component/atoms/formFields';
import { SearchDIV } from 'basePath/views/component/atoms/htmlTags';
import AnimmeView from 'basePath/views/component/common/animmeView';
import 'cssPath/explore.css';
import queryString from 'query-string';
import {getAnimme} from 'basePath/state/actions/animme/animme-action';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
class Explore extends React.Component {
    constructor(props) {
        super(props);
        let queryStringMap = queryString.parse(top.window.location.search);
        this.state = {
            query: queryStringMap.q || '',
            currentPage: 1
        };
    }
    onChange = (e) => {
        let error = '';
        this.setState({
            [e.target.name]: e.target.value,
            error: error
        });
    }
    getAnimmeResult = () => {
        this.props.getAnimme(this.state.query, this.state.currentPage)
    }
    onSubmit = () => {
        if (!this.state.query) {
            this.setState({ error: 'Field is required' });
            return;
        }
        let pathName = top.window.location.pathname;
        this.setState({
            currentPage: 1
        }, this.props.getAnimme(this.state.query, this.state.currentPage));
        this.props.history.push(`${pathName}?q=${this.state.query}`);

    }
    componentDidMount() {
        this.getAnimmeResult();
        window.addEventListener('scroll', this.loadMore);
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.loadMore);
    }
    loadMore = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.scrollingElement.scrollHeight) {
            let currentPage = this.state.currentPage + 1;
            this.setState({currentPage: currentPage}, this.props.getAnimme(this.state.query, this.state.currentPage));
        }
    }
    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          this.onSubmit();
        }
      }
    render() {
        return (
            <React.Fragment>
                
                <SearchDIV onChange={this.onChange} id="id_search_div" className="sticky">
                    <CustomText type="text" placeholder="Search Animme" name="query" className={`searchbar ${this.state.error && 'error'}`} defaultValue={this.state.query} onKeyDown={this._handleKeyDown} autoComplete="off"/>
                    <CustomButton onClick={this.onSubmit} value="Go" />
                    <div style={{color: 'white', padding: '10px'}}>Requesting: http://localhost:9090/animmesearch?q={this.state.query}&page={this.state.currentPage}</div>
                </SearchDIV>
                {this.props.animme.isLoaded && (
                    <AnimmeView 
                        query={this.state.query || 'Empty'}
                        resultArr={this.props.animme.data}/>
                )}
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => {
    return { animme: state.animme};
};

function mapDispatchToProps(dispatch) {
    return {
        getAnimme: (q, page) => dispatch(getAnimme(q, page))
    };
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Explore));
