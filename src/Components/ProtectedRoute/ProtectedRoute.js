import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import TokenService from '../../Services/TokenService';

export default function PrivateRoute(props) {
  return (
    TokenService.hasAuthToken()
      ? props.children
      : <Redirect
        to={{
          pathname: '/login'
        }}
      />
  )
}