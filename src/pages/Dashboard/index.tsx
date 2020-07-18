import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explore" />
      <Title>Explore repositories on Github</Title>

      <Form>
        <input placeholder="Type the name of the repository" />
        <button type="submit">Search</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/23077892?s=460&u=5ec6a92a789a749b38c48f40f9b911f5233d1f23&v=4"
            alt="Theoz"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/23077892?s=460&u=5ec6a92a789a749b38c48f40f9b911f5233d1f23&v=4"
            alt="Theoz"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/23077892?s=460&u=5ec6a92a789a749b38c48f40f9b911f5233d1f23&v=4"
            alt="Theoz"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
