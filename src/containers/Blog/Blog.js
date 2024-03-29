import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
// import axios from 'axios';
// import axios from '../../axios';

// import Post from '../../components/Post/Post';
// import FullPost from './FullPost/FullPost';
// import NewPost from './NewPost/NewPost';
import './Blog.css';
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/syncComponent';
// import NewPost from './NewPost/NewPost';
// import FullPost from './FullPost/FullPost';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

{/*pathname: this.props.match,url + '/new-post',*/}

class Blog extends Component {

    state = {
        auth: true
    }

    render () {
        return (
            <div>
                <header>
                    <nav className="Blog">
                        <ul>
                            <li><NavLink to="/posts" 
                                         exact
                                         activeClassName="my-active"
                                         activeStyle={{
                                             color: '#fa923f',
                                             textDecoration: 'underline'
                                         }}>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} />*/}
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
                    <Route path="/posts" component={Posts} />
                    <Route render={()=><h1>Not found</h1>} />
                    {/*<Redirect from="/" to="/posts" />*/}
                    {/*<Route path="/" component={Posts} />*/}
                </Switch>
            </div>
        );
    }
}

export default Blog;