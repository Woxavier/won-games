import { Description, Illustration, Logo, Title, Wrapper } from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'Typesript, ReactJS, NextJS e Styled Components'
}) => (
  <Wrapper>
    <Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado"
    ></Logo>
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente pra uma tela com código."
    />
  </Wrapper>
)

export default Main
