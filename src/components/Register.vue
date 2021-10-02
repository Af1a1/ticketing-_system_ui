<template>
  <v-container style="padding: 0;" fluid>
    <v-row no-gutters style="height: 100vh">
      <v-col cols="6" align-self="center">
        <div style="height: 400px; width: 400px" class="mx-auto">
          <h1 class="mb-5 grey--text text--darken-2">
            Hello! <br />
            Create Your Account
          </h1>
          <v-text-field
            label="Name"
            color="primary"
            outlined
            dense
          ></v-text-field>
          <v-text-field
            label="Email"
            color="primary"
            outlined
            dense
          ></v-text-field>
          <v-text-field
            label="Password"
            color="primary"
            outlined
            type="password"
            dense
          ></v-text-field>
          <v-btn width="100%" color="primary">Register</v-btn>
          <p class="font-weight-light mt-5">
            Already have an account <a href="/#/">login here</a>
          </p>
        </div>
      </v-col>
      <v-col cols="6" align-self="center">
        <v-img
          :src="require('../assets/loginimage.svg')"
          class="my-auto"
          contain
          height="450"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import restAdapter from '../restAdapter';
export default {
  name: 'Register',
};
</script>

<style lang="scss" scoped></style>
