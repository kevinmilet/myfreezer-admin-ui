import { useNavigate } from 'react-router-dom';
import '../../styles/Login.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';
import { useState } from 'react';
import { AUTH_TOKEN_KEY } from 'App';
import { Title } from 'tools/GlobalComponents';

export const Login = ({ setUserInfos }) => {
  const history = useNavigate();
  // const [userInfos, setUserInfos] = useState([]);

  const validationSchema = Yup.object()
    .shape({
      email: Yup.string()
        .required("L'email est requis")
        .email("L'email est invalide"),
      password: Yup.string().required('Le mot de passe est requis'),
    })
    .required();

  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(validationSchema),
  });

  const { errors } = formState;

  const onSubmit = (data) => {
    axios.post('/authenticate', data).then((response) => {
      const bearerToken = response?.headers?.authorization;
      if (response.data.isAdmin) {
        if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
          const jwt = bearerToken.slice(7, bearerToken.length);
          sessionStorage.setItem(AUTH_TOKEN_KEY, jwt);
        }
        setUserInfos(response.data.userName);
        history('/users');
      } else {
        alert("Vous n'êtes pas autorisé à accéder à cette page");
      }
    });
  };

  return (
    <div className="container">
      <div>
        <Title>Connexion</Title>
      </div>
      <div className="colm-form">
        <div className="form-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                {...register('email')}
              />
              <div className="error-msg">{errors.email?.message}</div>
            </div>
            <div>
              <input
                type="password"
                placeholder="Mot de passe"
                id="password"
                name="password"
                {...register('password')}
              />
              <div className="error-msg">{errors.password?.message}</div>
            </div>
            <button className="btn-login">OK</button>
          </form>
        </div>
      </div>
    </div>
  );
};
