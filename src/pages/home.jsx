import React from 'react';

import {
  BlockTitle,
  Page,
  Link,
  Toolbar,
} from 'framework7-react';

import Header from '../components/Header/Header.jsx'
import VideosContainer from '../components/Home/VideosContainer/VideosContainer.jsx';
import MatchesContainer from '../components/Home/MatchesContainer/MatchesContainer.jsx';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:5000/api/users?page=1").then(res => {
            return res.json();
        }).then(users => {
            this.setState({data:users.data});
        });
    }

    render() {
        const users = this.state.data

        return (
          <React.Fragment>
            <Page name="home">
            <Header />
              {/* Top Navbar */}
              {/* Page content */}
              <VideosContainer users={users}/>
              <BlockTitle>Matches</BlockTitle>
              <MatchesContainer users={users}/>
              <Toolbar bottom>
                <Link>Left Link</Link>
                <Link>Right Link</Link>
              </Toolbar>

            </Page>
          </React.Fragment>
        )
    }
}

export default Home;
