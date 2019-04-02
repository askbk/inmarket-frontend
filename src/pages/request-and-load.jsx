import React from 'react';
import { Page, Navbar, Block, List, ListItem } from 'framework7-react';

import Header from '../components/Header/Header.jsx'

class Request extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: props.f7route.context.user,
    };

  }
  render() {
    const user = this.state.user;
    return (
      <Page>
        <Header backLink/>
        <Block strong>
          {user.about}
        </Block>
        <List>
          {user.links.map((link, index) => (
            <ListItem
              key={index}
              link={link.url}
              title={link.title}
              external
              target="_blank"
            ></ListItem>
          ))}
        </List>
      </Page>
    );
  }
}

export default Request;
