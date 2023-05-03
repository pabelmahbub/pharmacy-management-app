<template>
        
  <div class="login-page">
    <div class="login-card">

        <div class="box" :class="{'box--right': movedToRight}">

        </div>

        <button @click="movedToRight = false">Move the box1</button>
        <button @click="movedToRight = true">Move the box2</button>
        
        <button @click = "addModal=true" style="background-color:red">Show modal in Login</button>

        <div class="text-center">
            <img src="/img/lock1.webp" class="login-card__icon"/>
            <h2>User Login</h2>
        </div>

        <form action="#" @submit.prevent="handleSubmit">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" v-model="formData.email"  ref="email" required/>

            <label>Password</label>
            <input type="password" placeholder="Enter your password" v-model="formData.password" ref="password" required/>

            <button type="submit">Login</button>

            <div class="d-flex">
                <div>
                <label>
                    <input type="checkbox"/>
                    Remember Me
                </label>
                </div>

                <div>
                    <a href="#">Forgot Password</a>
                </div>
            </div>

        </form>
    </div>
   
  </div>


  <TheModal v-model = "addModal">
  </TheModal>

    

</template>

<script>

import TheModal from './TheModal.vue';
export default {
    data: () =>({
      addModal: false,
      formData: {
          email: "",
          password:""
      },
      movedToRight: true,
     
    }),
components:{
   TheModal,
},
inheritAttrs: false,
  methods: {
    handleSubmit(){
        console.log('Hello', this.formData);
        if(!this.formData.email){
            //alert("Email field can not be empty!");
            //TODO: show error message on Toast
            this.$eventBus.emit('toast', {type: "Error", message:"Password must be 6 characters long"});
            this.$refs.email.focus();
            return;
        }
        if(this.formData.password.length < 6){
            //alert("Password should be six digit or more");
            //TODO: show error message on Toast
            this.$eventBus.emit('toast', {type: "Error", message:"Password must be 6 characters long"});
            this.$refs.password.focus();
            return;
        }

        //TODO: call api
    }
  },
  addNew(){
    console.log('added new')
  }
  

}
</script>

<style>
.box {
    width:55px;
    height: 55px;
    background-color: green;
    margin-bottom: 22px;
    transition: margin-left .5s;
}

.box--right {
    margin-left: 230px;
}

.login-page {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(253, 253, 252);
}

.login-card {
    width: 380px;
    min-height: 200px;
    box-shadow: 0px 2px 9px 4px #dfdfdf;
    background-color: #fff;
    border-radius: 3px;
    padding: 44px 33px
}

.login-card input[type="email"],
.login-card input[type="password"]{
    width:100%
}

.login-card__icon {
    max-width: 77px;
}
</style>