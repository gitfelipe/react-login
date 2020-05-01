import React from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import { Text, Container, Button } from './styles';
import { SlideInUp } from 'animate-css-styled-components';

export default function Profile() {
    const history = useHistory();

    const userEmail = sessionStorage.getItem('userEmail');
    const userName = sessionStorage.getItem('userName');

    api.get('profile', {
        headers: {
            Authorization: userEmail,
        }
    });

    function handleLogout() {
        sessionStorage.clear();

        history.push('/');
    }

    return (
        <SlideInUp duration="0.8s" >
            <Container>
                <Text>{`Bem-vindo, ${userName}!`}</Text>
                <Button onClick={handleLogout}>Sair</Button>
            </Container>
        </SlideInUp>
    );
};
