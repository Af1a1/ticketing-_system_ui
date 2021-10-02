<template>
  <v-container style="padding: 0;" fluid>
    <div v-if="loading" class="text-center">
      <v-progress-circular
        class="my-auto"
        :size="50"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </div>

    <v-row v-else no-gutters style="height: 100vh">
      <v-col cols="6" align-self="center">
        <div style="height: 400px; width: 400px" class="mx-auto">
          <h1 class="mb-5 grey--text text--darken-2">
            Hello! <br />
            Welcome Back
          </h1>
          <v-text-field
            label="Email"
            color="primary"
            v-model="email"
            outlined
            dense
          ></v-text-field>
          <v-text-field
            label="Password"
            color="primary"
            outlined
            v-model="password"
            type="password"
            dense
          ></v-text-field>
          <v-btn width="100%" color="primary" @click="login">Login</v-btn>
          <p class="font-weight-light mt-5">
            Don't have an account ? <a href="/#/register">Create account</a>
          </p>
        </div>
      </v-col>
      <v-col cols="6" align-self="center">
        <v-img
          :src="require('../assets/buststop.svg')"
          class="my-auto"
          contain
          height="450"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import auth from '../auth';

export default {
  name: 'Login',

  data() {
    return {
      email: '',
      password: '',
      loading: false,
    };
  },
  methods: {
    login() {
      this.loading = true;
      const credentials = {
        email: this.email,
        password: this.password,
      };
      auth.login(credentials).then((res) => {
        this.loading = false;
        this.$router.push('/dashboard');
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
