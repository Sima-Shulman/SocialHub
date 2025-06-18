import { React, useRef } from "react";
import { useCurrentUser } from './userProvider';
import { Navigate } from 'react-router-dom';
import Nav from "./nav/nav";

//The home page 
export default function Home() {
    const { currentUser } = useCurrentUser();
    const firstLoad = useRef(true);

    if (firstLoad.current) {
        firstLoad.current = false;
        if (!localStorage.getItem('currentUser')) {
            alert('You have to be logged in!');
            return <Navigate to='/login' />
        }
    }
  
    return (
        <>
            <Nav />
            <h1>Welcome, {currentUser.username}</h1>
        </>
    );
}