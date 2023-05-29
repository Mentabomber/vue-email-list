const { createApp } = Vue;

createApp({
    data(){
        return{
            rngEmail: "",
            emails: []
        }
    },
    methods:{
        // emailGenerator(){

        //     for (let index = 0; index < 10; index++) {
               
        //         this.emails.push(this.rngEmail);
                
        //     }

        // }
    },
    mounted(){
        // console.log("l'email è: ", this.emails);
        for (let index = 0; index < 10; index++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(
                risposta => {

                    
                        this.rngEmail = risposta.data.response;
                        console.log(this.rngEmail);
                        this.emails.push(this.rngEmail);
                        
                    }

        );
        }}

    
}).mount('#app')