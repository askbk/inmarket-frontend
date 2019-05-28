import React from 'react';
import { Button, Row, Col, Block } from 'framework7-react';
import './ActivitiesInstanceButtons.css';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = { status: props.status };
    }

    /*
    * / Accept an invitation to an activity
    router.post('/:activityId/invitations/:userId/accept', (rq, rs, n) => {
        activities.acceptInvitation(rq, rs, n);
    });

    // Decline an invitation to an activity
    router.post('/:activityId/invitations/:userId/decline', (rq, rs, n) => {
        activities.declineInvitation(rq, rs, n);
    });*/
    acceptActivity() {
        /*router.post('/:activityId/invitations/:userId/accept',*/
        if(this.state.status !== 'invited'){
            return;
        }


        const url = `${gConfig.url}/activities/${this.props.id}/invitations/${localStorage.userId}/accept`;


        fetch(url, {
            method: 'post',
            headers: {
                authorization: localStorage.jwt,
                'Content-Type': 'application/json'
            }
        }).then(res => {
            res.json().then(json => {
                if (res.status === 200) {
                    this.setState({ status: 'accepted' });
                } else {
                    // TODO SHOW ERROR
                    /* this.unsuccessfulDialog(res.message);*/
                }
            });
        });
    }

    declineActivity() {
        if(this.state.status !== 'invited'){
            return;
        }
        const url = `${gConfig.url}/activities/${this.props.id}/invitations/${localStorage.userId}/decline`;


        fetch(url, {
            method: 'post',
            headers: {
                authorization: localStorage.jwt,
                'Content-Type': 'application/json'
            }
        }).then(res => {
            res.json().then(json => {
                if (res.status === 200) {
                    this.setState({ status: 'cancelled' });
                } else {
                    // TODO SHOW ERROR
                    /* this.unsuccessfulDialog(res.message);*/
                }
            });
        });
    }

    render() {
        const status = this.state.status;
        var acceptButtonClass = 'activitiesInstanceButton';
        var postponedButtonClass =
            'activitiesInstanceButton regularActivitiesInstanceButton';
        var canceledButtonClass = 'activitiesInstanceButton';

        if (status === 'accepted') {
            acceptButtonClass += ' acceptedButton color-theme-green';
        } else {
            acceptButtonClass += ' regularActivitiesInstanceButton';
        }
        if (status === 'cancelled') {
            canceledButtonClass += ' canceledButton color-theme-red';
        } else {
            canceledButtonClass += ' regularActivitiesInstanceButton';
        }

        return (
            <div className='activitiesInstanceButtonsInnerContainer'>
                <Button onClick={() => this.acceptActivity()} small outline className={acceptButtonClass} fill>
                    {status === 'accepted' ? 'Akseptert' : 'Aksepter'}
                </Button>
                {/*
                <Button small outline className={postponedButtonClass} fill>
                    Utsett
                </Button>*/}
                <Button onClick={() => this.declineActivity()} small outline className={canceledButtonClass} fill>
                    {status === 'cancelled' ? 'Avbrutt' : 'Avbryt'}
                </Button>
            </div>
        );
    }
}
