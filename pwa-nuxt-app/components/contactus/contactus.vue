<template>
<div class="contactus-wrapper">
    <div  class="contactus">
        <h1>Contact Us</h1>
  <v-form ref="form" v-model="valid" lazy-validation>
 
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>
       <v-text-field
      v-model="message"
      label="message"
      required
    ></v-text-field>
    <v-btn
    rounded
    class="contactus-btn"
    color="primary"
      :disabled="!valid"
      @click="submit"
    >
      Send
    </v-btn>
  </v-form>
</div>
<span id="terms"></span>
</div>

</template>
<script>
 

  export default {
    data: () => ({
      valid: true,
      email: '',
      message:'',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
   
    }),

    methods: {
      submit () {
        if (this.$refs.form.validate()) {
          // Native form submission is not yet supported
          console.log(this.$refs.form);
          
        //   axios.post('/api/submit', {
        //     name: this.name,
        //     email: this.email,
        //     select: this.select,
        //     checkbox: this.checkbox
        //   })
        }
      },
    
    }
  }
</script>
<style lang="scss">
@import './contactus.scss';
</style>