<template>
    <span id="imagebox">
        <img v-bind:src="url">
        <button id="btn" class="btn" type="submit" v-on:click="delcard"></button>
    </span>
</template>

<script>
export default {
    name: 'SignCard',
    props:{
        imageUrl: undefined,
        cardList: [],
        index: undefined,
    },
    component:{
    },
    data() {
        return {
            url:undefined
        };
    },

    mounted() {
        if(this.imageUrl){
            this.url = require("@/assets/images/cards/"+this.imageUrl+".jpg");
        }
    },
    
    methods: {
        delcard: function (e) {
            console.log(this.index)
            this.cardList.splice(this.index,1)
            console.log(this.cardList)
        }
    },
};
</script>

<style lang="scss" scoped>
    #imagebox{
        position : relative;
    }
    button.btn {
        background: url( "@/assets/images/cards/closecard.png" ) no-repeat;
        position: absolute;
        top: -80px;
        left : 300px; 
        width: 50px;
    }
</style>