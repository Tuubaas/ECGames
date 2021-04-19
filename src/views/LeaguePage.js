import React from 'react';
import { Button } from '../components';

const LeaguePage = ({leagueId, user}) => {
    console.log(leagueId);
    return (
        <div>
            <Button link={`/leagues/${leagueId}/bet`}>Place bets</Button>
        </div>
    )
}

export default LeaguePage;