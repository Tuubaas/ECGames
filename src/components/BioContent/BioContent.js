import React from 'react';
import { UserPhoto } from '..';
import {StyledBioContent} from './BioContent.styled';

const BioContent = ({user}) => {

    if(user){
        return (<StyledBioContent >
            <div className="StyledBio-text">{user.name}</div>
            <UserPhoto className="StyledBio-image" src={user.photoURL} alt={user.name} size="L"/>
        </StyledBioContent>)}
    else{
        return <div/>
    }
}

export default BioContent;