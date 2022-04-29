import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Box, AreaCards, Button } from "../../Styles/Pages/home";


const Home = () => {
  const navigate = useNavigate()

  return (
    <>
      <Container>
        {/* <h2>O seu site para relaxar</h2> */}
      </Container>
      <AreaCards>
        <Box>
          <h3>Ansiedade</h3>
          <span>
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
            doloribus ex fugiat repellat officiis voluptas! Impedit, cupiditate
            nesciunt! Quisquam delectus error rerum suscipit{" "}
          </span>
          <Button onClick={() =>{navigate('/about')}}>Clique aqui!</Button>
        </Box>
        <Box>
          <h3>Exercícios</h3>
          <span>
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
            doloribus ex fugiat repellat officiis voluptas! Impedit, cupiditate
            nesciunt! Quisquam delectus error rerum suscipit{" "}
          </span>

          <Button onClick={() =>{navigate('/exercises')}}>Clique aqui!</Button>
        </Box>
        <Box>
          <h3>Ajuda</h3>

          <span>
            {" "}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
            doloribus ex fugiat repellat officiis voluptas! Impedit, cupiditate
            nesciunt! Quisquam delectus error rerum suscipit{" "}
          </span>
          <Button  onClick={() =>{navigate('/help')}}>Clique aqui!</Button>
        </Box>
      </AreaCards>
    </>
  );
}

export default Home;