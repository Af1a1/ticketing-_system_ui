import axios from 'axios';

const AUTH_KEY = 'app-user-token';

declare const window: any;

export default {
  TOKEN_KEY: AUTH_KEY,
  authenticated: false,
  user: {
    name: '',
    token: '',
    userType: null,
    id: null,
  },

  login(credentials: any) {
    const url = 'http://localhost:5000/api/v1/auth/login';

    return axios.post(url, credentials).then((response) => {
      if (response.data && response.data.success) {
        this.setAuth(response.data);
      }
      return response;
    });
  },
  logout() {
    localStorage.clear();
  },

  setAuth(data: any): void {
    this.user.token = data.token;
    this.user.name = data.user.name;
    this.user.userType = data.user.role;
    this.user.id = data.user.id;

    window.localStorage.setItem(AUTH_KEY, JSON.stringify(this.user));
  },
  updateAuth(data: any): void {
    if (!data) {
      return;
    }

    this.user.token = data.token;
    this.user.userType = data.userType;
    this.user.id = data.id;
    this.user.name = data.name;
  },
  checkAuth(): boolean {
    const authJson = window.localStorage.getItem(AUTH_KEY) as any;
    const authData = JSON.parse(authJson);
    this.updateAuth(authData);
    if (authData && authData.token) {
      this.authenticated = true;
    } else {
      this.authenticated = false;
    }
    return this.authenticated;
  },
  getAuthToken(): string {
    return 'Bearer ' + this.user.token;
  },
};
