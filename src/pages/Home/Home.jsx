import Details from '../../components/Details/Details';
import Hero from '../../components/Hero/Hero';
import styled from 'styled-components';

const Container = styled.div`
    height: 100%;
    overflow-y: scroll;
`;

function Home() {
    return (
        <Container>
            <Hero />
            <Details />
        </Container>
    );
}

export default Home;
