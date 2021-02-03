import React from 'react';
import { UserPhoto } from '..';
import {StyledBioContent} from './BioContent.styled';

const BioContent = ({firebase, bio}) => {
    const {user} = firebase;

    if(bio){
    return (<StyledBioContent >
        <UserPhoto className="StyledBio-image" src={user.photoURL} alt={user.displayName} size="L"/>
        <div className="StyledBio-group">
            <div className="StyledBio-text">{bio.name}</div>
            <div className="StyledBio-text StyledBio-bal">{'Balance: ' + bio.email}</div>
        </div>
    </StyledBioContent>)}
    else{
        return <div/>
    }
}

export default BioContent;