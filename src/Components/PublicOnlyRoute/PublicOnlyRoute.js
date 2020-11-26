import React from 'react'
import { Redirect } from 'react-router-dom';
import TokenService from '../../Services/TokenService';

function PublicOnlyRoute(props) {
  return (
    TokenService.hasAuthToken()
      ? <Redirect
        to={{
          pathname: '/'
        }}
      />
      : props.children
  )
}

PublicOnlyRoute.defaultProps = {
  children: <div />
}

export default PublicOnlyRoute;