'use strick';
import React from 'react';
import { useHistory } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <h1>Страница информаций</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        sapiente incidunt laboriosam accusamus dolore, maxime nisi asperiores
        facilis impedit doloribus unde reprehenderit blanditiis officiis
        consequatur totam doloremque neque repudiandae molestias.
      </p>

      <button className="btn" onClick={() => history.push('/')}>
        Обратно к списку дел
      </button>
    </>
  );
};

export default AboutPage;
