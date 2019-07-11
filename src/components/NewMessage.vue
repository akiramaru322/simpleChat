<template>
    <form class="frm" @submit.prevent="addMessage">
        <div class="frm">
            <div class="flex">
                <div style="width: 80%">
                    <input v-model="newMessage" class="input is-primary is-rounded" minlength="2" maxlength="62" type="text">
                </div>
                <div style="width: 20%">
                    <button type="submit" class="is-primary button is-rounded frm">Enviar</button>
                </div>
            </div>
        </div>
        <sup v-if="feedback" class="help is-danger" style="text-align: center"> {{feedback}} </sup>
    </form>
</template>

<script>
import db from '../firebase/init.js'
export default {
    name: 'NewMessage',
    props: ['name'],
    data() {
        return {
            newMessage: null,
            feedback: null
        }
    }
    ,
    methods: {
        addMessage(){
            if( this.newMessage ){
                db
                .collection('messages')
                .add({
                    content: this.newMessage,
                    name: this.name,
                    timestamp: Date.now()
                })
                .catch( e => {
                    console.error(e)
                });
                this.newMessage = null;
                this.feedback = null
            }
            else
            {
                this.feedback = 'Ingresa tu mensaje.'
            }
        }
    }
}
</script>

<style>
.frm{
    width: 100%;
    padding-top: .5em
}
.flex{
    display: flex
}
</style>
