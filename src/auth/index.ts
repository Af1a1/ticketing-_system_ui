import axios from 'axios';

const AUTH_KEY = 'app-user-token';

declare const window: any;

export default {
  TOKEN_KEY: AUTH_KEY,
  authenticated: false,
  passenger: {
    id:null,
    name: null,
    nic: null,
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
    console.log("🚀 ~ file: index.ts ~ line 31 ~ setAuth ~ data", data)
    this.passenger.name = data.data.passenger.name;
    this.passenger.nic = data.data.passenger.nic;
    this.passenger.id = data.data.passenger.id;

    window.localStorage.setItem('name', this.passenger.name);
    window.localStorage.setItem('nic', this.passenger.nic);
    window.localStorage.setItem('id', this.passenger.id);
    window.localStorage.setItem('isLoggedIn', true);
    
  },
  updateAuth(data: any): void {
    if (!data) {
      return;
    }
    this.passenger.name = data.passenger.name;
    this.passenger.nic = data.passenger.nic;
    this.passenger.id = data.passenger.id;
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
  // getAuthToken(): string {
  //   return 'Bearer ' + this.passenger.token;
  // },
};
