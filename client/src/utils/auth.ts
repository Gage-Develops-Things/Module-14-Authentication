import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    // TODO: return the decoded token
    const token = this.getToken();
    const decoded = jwtDecode<JwtPayload>(token);
    return decoded;
  }

  loggedIn() {
    // TODO: return a value that indicates if the user is logged in
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }
  
  isTokenExpired(_token: string) {
    // TODO: return a value that indicates if the token is expired
    const {exp} = this.getProfile();
    if (exp) {
      const expinMili = exp * 1000;
      if (expinMili < Date.now()){
        return true} else {return false}
      }
      return false;
      }

  getToken(): string {
    // TODO: return the token
    const loggedUser = localStorage.getItem('id_token') || '';
    return loggedUser;
  }

  login(idToken: string) {
    // TODO: set the token to localStorage
    // TODO: redirect to the home page
    localStorage.setItem('id_token', idToken);
    location.assign('/')
  }

  logout() {
    // TODO: remove the token from localStorage
    // TODO: redirect to the login page
    localStorage.removeItem('id_token')
    location.assign('/');
  }
}

export default new AuthService();
