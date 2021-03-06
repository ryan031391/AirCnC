export const login = user => (
    $.ajax({
      method: 'POST',
      url: '/api/session',
      data: { user }
    })
  );

  export const fetch = userId => (
    $.ajax({
      method: 'GET',
      url: `/api/user/${userId}`
    })
  )
  
  export const signup = user => (
    $.ajax({
      method: 'POST',
      url: '/api/user',
      data: { user }
    })
  );
  
  export const logout = () => (
    $.ajax({
      method: 'DELETE',
      url: '/api/session'
    })
  );

  export const remove = userId => (
    $.ajax({
      method: 'DELETE',
      url: `/api/user/${userId}`
    })
  )