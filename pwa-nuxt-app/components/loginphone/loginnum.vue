<template>
  <div>
    <v-form ref="form" v-model="valid" class="form-login" lazy-validation>
      <span >login with phone number</span>
      <v-text-field
      class="mt-5"
        v-model="form.mobile"
        :rules="numRules"
        label="mobile number"
        outlined
        dense
        required
      />
      <v-btn :disabled="!valid" @click="validate" color="primary" class="mr-4">
        send Code
      </v-btn>
  
    </v-form>

    <v-form ref="form2" v-if="showfrom2" class="form-login" lazy-validation>
      <v-text-field v-model="form2.code" label="please insert code " outlined dense required />
      <v-btn :disabled="!valid" @click="login" color="primary" class="mr-4">
        login
      </v-btn>
    </v-form>
  </div>
</template>

<script>
const Cookie = process.client ? require('js-cookie') : undefined
export default {
  middleware: 'notAuthenticated',
  data: () => ({
    valid: false,
    showfrom2: false,
    form: { mobile: '' },
    form2:{mobile:'',code:''},
    code: '',
    numRules: [
      v => !!v || 'Required.',
      v => v.length >= 11 || 'Min 8 characters'
    ]
  }),
  mounted(){
  },
  methods: {

    async  validate () {
  try {
    const response = await this.$api.post( '/api/user/otp-create',this.form);
   
    if (response.data.success == true) 
        this.showfrom2 = true
    
  } catch (error) {
    console.error(error);
  }
  },
    login () {
        this.form2.mobile = this.form.mobile  
        this.$auth.loginWith('local', { data: this.form2 }).then(response => {
                console.log("response server");
                 var data = this.$auth.$storage._state
                 var bearertoken =Object.values(data)[0].split('Bearer ')[1] 
                 this.$api.setHeader('token', bearertoken)
                //  this.$auth.$storage.setUniversal('token', bearertoken)
                this.$router.push('/dashboard')    
                console.log("response server");
            })
    }

  }
}

</script>
<style lang="scss">
  @import "loginnum"

</style>
