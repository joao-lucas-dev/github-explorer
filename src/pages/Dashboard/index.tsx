import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="GitHub Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/53630706?s=460&u=6f499424fdac2fb91b7bef47947290e23b404ea6&v=4"
            alt="João Lucas"
          />

          <div>
            <strong>Petbuddy</strong>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
