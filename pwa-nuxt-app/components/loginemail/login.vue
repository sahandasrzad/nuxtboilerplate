<template>
  <v-form ref="form" v-model="valid" class="form-login" lazy-validation>
    <v-text-field
      v-model="form.email"
      :rules="emailRules"
      label="Email"
      outlined
      dense
      required
    />

    <v-text-field
      v-model="form.password"
      :rules="passRules"
      label="password"
      outlined
      dense
      required
    />

    <v-btn :disabled="!valid" @click="validate" color="success" class="mr-4">
      Login
    </v-btn>

    <v-btn @click="reset" color="error" class="mr-4">
      Reset Form
    </v-btn>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    form: {
      email: '',
      password: ''
    },
    passRules: [
      v => !!v || 'Required.',
      v => v.length >= 5 || 'Min 8 characters'
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ]

  }),

  methods: {
    validate () {
      if (this.$refs.form.validate()) {

      }
    },
    reset () {
      this.$refs.form.reset()
    }

  }
}

</script>
<style lang="scss">
  @import "login"

</style>
