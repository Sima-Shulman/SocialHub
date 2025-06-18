import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useCurrentUser } from '../userProvider';
import styles from './info.module.css';
import Nav from '../nav/nav';

//Show the current user's details.
const Info = () => {
    const { currentUser } = useCurrentUser();
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

     //Get the information from the DB.
    useEffect(() => {
        const getUserData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/users?username=${currentUser.username}&_exact=true`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data from JSON Server');
                }
                const user = await response.json();
                if (user.length > 0) setUserData(user[0]);
            } catch (error) {
                setError(err.message);
            }
            finally {
                setLoading(false);
            }
        };
        if (currentUser.username)
            getUserData();
    }, [currentUser]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;


    return (
        <>
            <Nav />
            <div className={styles.infoContainer}>
                <h2>Info</h2>
                <div>Name: {userData.username}</div>
                <div>Phone Number: {userData.phone}</div>
                <div>E-mail: {userData.email}</div>
            </div>

        </>
    );
};

export default Info;
