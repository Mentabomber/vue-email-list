const { createApp } = Vue;

createApp({
    data(){
        return{

            email: "",
        }
    },
    mounted(){
        console.log("l'email è: ", this.email);
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(
                risposta => {
                    this.email = risposta.data.response;
                }

        
        
        );

    }
    // methods:{
    // }
    
}).mount('#app')