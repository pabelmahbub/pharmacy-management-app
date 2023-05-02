<template>
  <h2>Login</h2>
  <div class="login-page">
    <div class="login-card">
        <div class="text-center">
            <img src="/img/lock1.webp" class="login-card__icon"/>
            <h2>User Login</h2>
        </div>

        <form action="#" @submit.prevent="handleSubmit">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" v-model="formData.email"  required/>

            <label>Password</label>
            <input type="password" placeholder="Enter your password" v-model="formData.password" required/>

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
</template>

<script>
export default {
    data: () =>({
      formData: {
          email: "",
          password:""
      }
    }),

  methods: {
    handleSubmit(){
        console.log('Hello', this.formData);
        if(!this.formData.email){
            alert("Email field can not be empty!");
            //TODO: show error message on Toast
            return;
        }
        if(this.formData.password.length < 6){
            alert("Password should be six digit or more");
            //TODO: show error message on Toast
            return;
        }

        //TODO: call api
    }
  }
}
</script>

<style>

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