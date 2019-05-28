import React from 'react';
import '../../../css/conversationsActivitiesViewShared.css';
import ActivitiesInstance from '../ActivitiesInstance/ActivitiesInstance.jsx';
import { List, ListItem, Searchbar } from 'framework7-react';

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchbarContent: '',
            activities: []
        };
    }

    handleChange(e) {
        const value = e.target.value.toLowerCase();
        this.setState({ searchbarContent: value });
    }

    componentDidMount() {
        // const userId = JSON.parse(atob(localStorage.jwt.split('.')[1])).sub;
        const url = gConfig.url + '/activities/users/' + localStorage.userId;

        fetch(url, {
            headers: {
                authorization: localStorage.jwt
            }
        })
            .then(res => {
                return res.json();
            })
            .then(data => {
                const activities = data.activities.map(activity => {
                    return {
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
                        status: 'accepted'
                    };
                });

                const activityInvitations = data.activityInvitations.map(
                    activity => {
                        return {
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
                            status: 'invited'
                        };
                    }
                );

                // TODO  address in backend, frequency? (probably recurrencePattern
                this.setState({
                    activities: [...activityInvitations, ...activities]
                });
            });
    }

    render() {
        return (
            <div className='conversationsActivitiesViewContainer'>
                <div className='conversationsActivitiesViewInnerContainer'>
                    <div className='conversationsActivitiesViewSearchbarContainer'>
                        <Searchbar onChange={this.handleChange.bind(this)} />
                    </div>
                    <List
                        noHairlines
                        noHairlinesBetween
                        className='searchbar-not-found'
                    >
                        <ListItem title='Nothing found' />
                    </List>
                    <List
                        noHairlines
                        noHairlinesBetween
                        className='search-list searchbar-found conversationsActivitiesViewList'
                    >
                        {this.state.activities
                            .filter(a =>
                                a.header
                                    .toLowerCase()
                                    .includes(this.state.searchbarContent)
                            )/*
                            .filter(
                                a =>
                                    new Date(a.end_date + ' ' + a.end_time) >=
                                    new Date(Date.now())
                            )*/
                            .sort(
                                (a, b) =>
                                    new Date(
                                        a.start_date + ' ' + a.start_time
                                    ) -
                                    new Date(b.start_date + ' ' + b.start_time)
                            )
                            .map((activity, index) => (
                                <ListItem
                                    className='conversationsActivitiesViewListItem'
                                    title=''
                                    key={index}
                                >
                                    <div className='conversationsActivitiesViewInstanceContainer'>
                                        <ActivitiesInstance
                                            id={activity.id}
                                            header={activity.header}
                                            description={activity.description}
                                            startDate={activity.start_date}
                                            endDate={activity.end_date}
                                            frequency={activity.frequency}
                                            address={activity.address}
                                            status={activity.status}
                                        />
                                    </div>
                                </ListItem>
                            ))}
                        {/*
                <ListItem className="conversationsActivitiesViewListItem" title="">
                    <div className="conversationsActivitiesViewInstanceContainer">
                        <ActivitiesInstance/>
                    </div>
                </ListItem>
                <ListItem className="conversationsViewListItem" title="">
                    <div className="conversationsActivitiesViewInstanceContainer">
                        <ActivitiesInstance/>
                    </div>
                </ListItem>*/}
                    </List>
                </div>
            </div>
        );
    }
}
