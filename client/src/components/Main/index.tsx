import { Description, Illustration, Logo, Title, Wrapper } from './styles'

const Main = () => (
  <Wrapper>
    <Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado"
    ></Logo>
    <Title>React Avançado</Title>
    <Description>Typesript, ReactJS, NextJS e Styled Components</Description>
    <Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente pra uma tela com código."
    />
  </Wrapper>
)

export default Main
