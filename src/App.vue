<template>
  <Login />
  <!-- <div class="toasts"> -->
      <TransitionGroup name="slide-left" tag="div" class="toasts">
        <TheToast v-for="(toast,i) in toasts" :key="i" 
              :toastType="toast.type" 
              :message="toast.message"
          />
       </TransitionGroup>
  <!-- </div> -->
  <p style="background-color:red;width:100px;height:100px">Modal Show</p>

  <TheModal heading="I am mOdal"/>
</template>

<script>
import Login from './components/Login.vue';
import TheToast from './components/TheToast.vue';

export default {
  data:()=> ({
    toasts:[
      // {type:"Success", message:'Done successfully'},
      // {type:"Error", message:'Something went wrong'}
    ]
  }),
  components: {
    Login,
    TheToast,
  },
  mounted(){
   this.$eventBus.on("toast", (data)=> {
   //console.log(data)
  this.toasts.push(data)
  this.removeOneToast()
  })
  },
  methods:{
    removeOneToast(){
      setTimeout(() =>{
        this.toasts.shift();
      },2000)
    }
  }
  
}
</script>

<style>

.toasts {
  position:absolute;
  top:0;
  right:0;
  z-index:9999;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  overflow-x: hidden;
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.5s ease;
}
.slide-left-enter-from,
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(80px);
}

</style>
