import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import { Text, Form, UserInput, Button } from './styles';
import { SlideInLeft } from 'animate-css-styled-components';

export default function Home() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function handleLogin(event) {
        event.preventDefault();

        try {
            const response = await api.post('session', { email, password });

            sessionStorage.setItem('userEmail', email);
            sessionStorage.setItem('userName', response.data.name);

            history.push('/profile');
        } catch (err) {
            alert('Falha no login, tente novamente.');
        }
    }

    return (
        <SlideInLeft duration="0.8s" >
            <Form onSubmit={handleLogin}>
                <Text>Faça seu login</Text>
                <UserInput
                    type="text"
                    placeholder="Seu e-mail"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    required
                />

                <UserInput
                    type="password"
                    placeholder="Sua senha"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    required
                />

                <Button type="submit">Entrar</Button>

                <Link to="/register">Não tenho cadastro</Link>
            </Form>
        </SlideInLeft>
    );
};
