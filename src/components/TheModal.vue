<template>
    <Teleport to="body">
  <div class="the-modal" v-show = "modalValue">
    <div class="the-modal__container">
        <div class="the-modal__header d-flex" >
            <div>
                {{ heading }}
            </div>                        
            <div class="the-modal__close" @click = 'closeModal()'>
                X
            </div>
        </div>
    </div>
  </div>            
</Teleport>
</template>

<script>
export default {
   props: {
    heading:{
        type: String,
        default: 'Default Modal'
    },
    modalValue:{
        type: Boolean,
        default: false
    }

   },
   methods:{
    closeModal(){
        this.$emit("update:modalValue", false);
    }
   }
}
</script>

<style>

.the-modal {
    position: fixed;
    top: 0;
    bottom:0;
    left: 0;
    right:0;
    background-color: rgba(0,0,0,0.6);
    z-index: 999999;
    display: flex;
    justify-content: center;
    align-items: center;
}

.the-modal__container{
    width:445px;
    min-height: 222px;
    background-color: rgb(235,235,235);
    border-radius: 10px;
    box-shadow: 0 0 14px 5px rgb(0 0 0 /20%);
}

.the-modal__container--lg{
    width:555px
}
.the-modal__header{
    font-size: 22px;
    font-weight: bold;
    justify-content: space-between;
    color:var(--brand-color);
}

.the-modal__close:hover{
    color:red
}

.the-modal__body{
    padding:44px;
    padding-top:22px
}

</style>