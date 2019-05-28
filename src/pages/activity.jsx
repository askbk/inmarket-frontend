import React from 'react';
import Framework7 from 'framework7/framework7.esm.bundle.js';
import {
    Page,
    Navbar,
    Block,
    BlockTitle,
    List,
    ListItem,
    Toolbar,
    Link,
    Searchbar
} from 'framework7-react';
import ActivitiesView from '../components/Activity/ActivitiesView/ActivitiesView.jsx';
import ActivitiesInstance from '../components/Activities/ActivitiesInstance/ActivitiesInstance.jsx';

import Header from '../components/Header/Header.jsx';

import '../css/toolbar.css';

class Activities extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    componentDidMount() {
        const url = gConfig.url + '/activities/' + this.$f7route.params.id;

        fetch(url, { headers: { authorization: localStorage.jwt } })
            .then(res => {
                return res.json();
            })
            .then(activity => {
                this.setState({
                    id: activity.id,
                    header: activity.name,
                    description: activity.description,
                    start_date: new Date(activity.startDateUTC),
                    end_date: new Date(activity.endDateUTC),
                    duration: activity.duration,
                    isRecurring: activity.isRecurring,
                    recurrencePattern: activity.recurrencePattern,
                    creatorId: activity.creatorId,
                    creator: activity.creator,
                    createdAt: activity.createdAt,
                    updatedAt: activity.updatedAt,
                });
            });
    }

    render() {
        return (
            <Page className='theme-dark'>
                <Header backLink title='Activities' />
                <div className='conversationsActivitiesViewContainer'>
                    <div className='conversationsActivitiesViewInnerContainer'>
                        <List
                            noHairlines
                            noHairlinesBetween
                            className='search-list searchbar-found conversationsActivitiesViewList'
                        >
                            <div className='conversationsActivitiesViewInstanceContainer'>
                                <ListItem
                                    className='conversationsActivitiesViewListItem'
                                    key={1}
                                >
                                    <ActivitiesInstance
                                        id={this.state.id}
                                        header={this.state.header}
                                        description={
                                            this.state.description
                                        }
                                        startDate={this.state.start_date}
                                        endDate={this.state.end_date}
                                        frequency={this.state.frequency}
                                        address={this.state.address}
                                        status={this.state.status}
                                    />
                                </ListItem>
                            </div>
                        </List>
                    </div>
                </div>

                <Toolbar className='bottomToolbar' tabbar labels bottom>
                    <Link
                        className='bottomToolbarLink toolbarIcon'
                        href='/'
                        iconF7='home'
                    />
                    <Link
                        className='bottomToolbarLink toolbarIcon'
                        href='/nettverk/'
                        iconF7='search'
                    />
                    <Link
                        className='bottomToolbarLink toolbarIcon'
                        tabLinkActive
                        href='/activities/'
                        iconF7='email'
                    />
                    <Link
                        className='bottomToolbarLink toolbarIcon'
                        href='/profile/me'
                        iconF7='person_round'
                    />
                </Toolbar>
            </Page>
        );
    }
}

export default Activities;
