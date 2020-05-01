import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import { Text, Form, UserInput, Button } from './styles';
import { SlideInRight } from 'animate-css-styled-components';

export default function Home() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function handleRegister(event) {
        event.preventDefault();

        const data = {
            name,
            email,
            password
        };

        try {
            const response = await api.post('users', data);

            alert(`Bem-vindo, ${response.data.name}!`)

            history.push('/');
        } catch (err) {
            alert('Erro no cadastro. E-mail já existente ou credenciais inválidas.');
        }
    }

    return (
        <SlideInRight duration="0.8s" >
            <Form onSubmit={handleRegister}>
                <Text>Faça seu cadastro</Text>
                <UserInput
                    type="text"
                    placeholder="Seu nome"
                    value={name}
                    onChange={event => setName(event.target.value)}
                    required
                />

                <UserInput
                    type="text"
                    placeholder="Seu e-mail"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    required
                />

                <UserInput
                    type="password"
                    placeholder="Sua senha (no mínimo 8 dígitos)"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    required
                />

                <Button type="submit">Cadastrar</Button>

                <Link className="link" to="/">Já tenho cadastro</Link>
            </Form>
        </SlideInRight>
    );
};
