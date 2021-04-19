import { useFormik } from 'formik';
import React, { useState } from 'react';
import { Button } from '..';
import { createLeague, joinLeague } from '../../FirebaseConfig';
import { StyledNewLeagueHandler } from './NewLeagueHandler.styled';

const NewLeagueHandler = ({user}) => {

    const [showCreate, setShowCreate] = useState(false);
    const [showJoin, setShowJoin] = useState(false);

    const createFormik = useFormik({
        initialValues: {
            leagueName: '',
        },
        onSubmit: values => {
            createLeague(user.id, values.leagueName)
        }
    })

    const joinFormik = useFormik({
        initialValues: {
            leagueId: ''
        },
        onSubmit: values => {
            joinLeague(user.id, values.leagueId)
        }
    })

    const showForm = (type) => {
        setShowCreate(type === 'create')
        setShowJoin(type === 'join')
    }

    return(
    <StyledNewLeagueHandler>
        <div id="NewLeagueHandler-wrapper">
            <Button onClick={() => showForm('create')}>Create League</Button>
            <Button onClick={() => showForm('join')}>Join League</Button>
        </div>
        {showCreate && 
        <form onSubmit={createFormik.handleSubmit} id="NewLeagueHandler-create">
            <label>League Name: </label>
            <input id="leagueName" name="leagueName" onChange={createFormik.handleChange} value={createFormik.values.leagueName} />
            <button type="submit">Submit</button>
        </form>}
        {showJoin && 
        <form onSubmit={joinFormik.handleSubmit} id="NewLeagueHandler-join">
            <label>League Code:</label>
            <input id="leagueId" name="leagueId" onChange={joinFormik.handleChange} value={joinFormik.values.leagueId}/>
            <button type="submit">Submit</button>
        </form>}
    </StyledNewLeagueHandler>)
}

export default NewLeagueHandler;