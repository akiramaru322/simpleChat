<template>
    <div class="container">
        <header class="card-header">
            <u><span class="card-header-title msgname">Usuario:&nbsp;{{name}}</span></u>
        </header>

        <div class="card-content msgbox flex">
            <ul class="overflow" v-chat-scroll>
                <li v-for="message in messages" :key="message.id" class="flex">
                    <div class="msgStyle" >
                        <div>
                            <span class="msgname">{{message.name}}:&nbsp;</span>
                            <span class="msg">{{message.content}}</span>
                        </div>
                        <div>
                            <small>{{message.timestamp}} </small>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        <footer class="card-footer">
            <NewMessage :name="name" />
        </footer>
    </div>
</template>

<script>
import NewMessage from '../components/NewMessage.vue'
import db from '../firebase/init'
import moment from 'moment'

export default {
    name: 'Chat',
    props: ['name'],
    components: {
        NewMessage
    }
    ,
    data() {
        return{
            messages: []
        }
    }
    ,
    created(){
        const ref = db.collection('messages').orderBy('timestamp');
        ref.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if (change.type === 'added')
                {
                    const doc = change.doc;
                    this.messages.push({
                        id: doc.id,
                        name: doc.data().name,
                        content: doc.data().content,
                        timestamp: moment(doc.data().timestamp).format('lll')
                    })
                }
            })
        })
    }
}
</script>

<style>
    .msgbox{
        margin-top: 0px;
        margin-bottom: 0px;
        height: 31em;
    }
    .flex{
        display: flex;
    }
    .overflow{
        overflow: auto;
    }
    .msgStyle{
        background:hsl(171, 100%, 41%);
        border-radius: 1em;
        color: white;
        padding: 5px 10px;
        margin: 1px;
        max-width: 97%;
        word-break: break-all;
        word-break: break-word;          
    }
    .msgname{
        font-size: 1.3em
    }
    .msg{
        color:hsl(0, 0%, 21%);
        font-size: 1.2em;
    }
</style>
