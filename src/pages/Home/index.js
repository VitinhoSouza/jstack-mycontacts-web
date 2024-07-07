
import arrow from "../../assets/images/icons/arrow.svg";
import edit from "../../assets/images/icons/edit.svg";
import trash from "../../assets/images/icons/trash.svg";

import { Card, Container, Header, ListContainer, InputSearchContainer } from "./styles";

export default function Home() {

  return (
    <Container>

      <InputSearchContainer>
        <input type='text' placeholder='Pesquise pelo nome...' />
      </InputSearchContainer>


      <Header>
        <strong> 3 contatos </strong>
        <a href="/">Novo contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Victor Souza</strong>
              <small>instagram</small>
            </div>

            <span>vitinhosouza@gmail.com</span>

            <span>(88) 9 9999-9999</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Victor Souza</strong>
              <small>instagram</small>
            </div>

            <span>vitinhosouza@gmail.com</span>

            <span>(88) 9 9999-9999</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Victor Souza</strong>
              <small>instagram</small>
            </div>

            <span>vitinhosouza@gmail.com</span>

            <span>(88) 9 9999-9999</span>
          </div>

          <div className="actions">
            <a href="/">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="Delete" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  )
}