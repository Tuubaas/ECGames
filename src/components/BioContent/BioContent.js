import React from 'react';
import { UserPhoto } from '..';
import {StyledBioContent} from './BioContent.styled';

const BioContent = ({user}) => {

    if(user){
        return (<StyledBioContent >
            <UserPhoto className="StyledBio-image" src={user.photoURL} alt={user.name} size="L"/>
            <div className="StyledBio-group">
                <div className="StyledBio-text">{user.name}</div>
                <div className="StyledBio-text StyledBio-bal">{'Balance: ' + user.balance}</div>
            </div>
        </StyledBioContent>)}
    else{
        return <div/>
    }
}

export default BioContent;