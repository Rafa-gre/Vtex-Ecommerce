import React from 'react';
import Form from '../../components/form';
import { Container } from './style';



const Product: React.FC = (props) => {
    return (
        <Container>
            <Form title="Cadastre seu Produto" />
        </Container>
    );
}

export default Product;