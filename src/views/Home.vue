<template>
    <div class="container welcome">
        <header class="card-header">
            <p class="card-header-title msgcolor">MNB-Chat</p>
        </header>

        <div class="card-content">
            <div class="content">
                <form @submit.prevent="enterChat">
                    <div class="field">
                        <label class="label">Tu nombre:</label>
                        <div class="control">
                            <input v-model="name" class="input is-primary is-medium" type="text" minlength="2" maxlength="16" placeholder="Mi nombre">
                        </div>
                    </div>
                    <button class="button is-primary is-fullwidth is-medium" type="submit">Ingresar al chat</button>
                    <p v-if="feedback" class="help is-danger"> {{feedback}} </p>
                </form>
            </div>
        </div>

        <footer class="card-footer">
            <small style="text-align: center" >Simple chat con firebase y VueJS</small>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data(){
        return {
            name: null,
            feedback: null
        }
    }
    ,
    methods: {
        enterChat(){
            if( this.name )
                this.$router.push({name: 'Chat', params: {name: this.name} })
            else
                this.feedback = "Ingresa tu nombre 😉";
        }
    }
}
</script>

<style>
.welcome{
    padding-top: 7em;
}
p{
    text-align: center
}
</style>
