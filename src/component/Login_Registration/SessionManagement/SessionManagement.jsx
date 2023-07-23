export const setSession = (token, isLoggedIn) => {
    localStorage.setItem('userToken', token)
    localStorage.setItem('isUserLoggedIn', isLoggedIn);
  };
  

  export const getSession = () => {
    const token = localStorage.getItem('userToken');
    const isLoggedIn = localStorage.getItem('isUserLoggedIn');
    return { token, isLoggedIn: isLoggedIn === 'true' };
  };

  export const clearSession = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('isUserLoggedIn');
  };