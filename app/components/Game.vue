<template>
  <div class="big-header" >
    <h1></h1>
    <br />
    <ul ref="msgList" class="msg-list">
      <transition-group name="list">
        <li class="message" :class="{'user-choice': isUserChoice(msg) }" v-for="msg in storagedMsg" :key="msg">{{msg}}</li>
      </transition-group>
    </ul>
    <br>
    <br>
    <div class="btn-container">
      <router-link class="button" :to="actionA">{{btnA}}
        <button class="in-button" v-on:click="addChoiceOnTable(btnA)"></button>
      </router-link>
      <router-link class="button" :to="actionB">{{btnB}}
        <button class="in-button" v-on:click="addChoiceOnTable(btnB)"></button>
      </router-link>
    </div>
  </div>
</template>

<script>
import json from '../data.json'

export default {
  data(){
    return {
      msgTable : [],
      storagedMsg : null,
      memoTable : [], // table to set the local storage 
      test : true,

    }
  },
  computed : {
    id(){
      return this.$route.params.id;
    },
    messages(){
      return json[this.id].messages
    },
    btnA(){
      return json[this.id].btnA
    },
    actionA(){
      setTimeout(() => {      
        this.addMsgOnTable();
        setTimeout(() => {
        }, 200);
      }, 50);
      return json[this.id].actionA
    },
    btnB(){
      return json[this.id].btnB
    },
    actionB(){
      return json[this.id].actionB
    },
  },

  methods : {
    addMsgOnTable(){ // Add each messages of the new step, based on the id in data.json file 
        if (this.id == 1) {
          localStorage.clear();
        }     
        let stepMsgList = json[this.id].messages
        Object.keys(stepMsgList).forEach(item => {
          if (!this.msgTable.includes(stepMsgList[item])) { // if the message still does not exist 
            this.msgTable.push(stepMsgList[item]);
          }
        });
        
        if (JSON.parse(localStorage.getItem('msg'))) {
          this.memoTable = JSON.parse(localStorage.getItem('msg'));
        };
        this.msgTable.forEach(msg =>{
          if (this.id == 1 || !this.memoTable.includes(msg)) {
            this.memoTable.push(msg);
          }
        });
        localStorage.setItem('msg',(JSON.stringify(this.memoTable))); // get each msgTable msg to push them on local storage  UTILISER MAP OU REDUCE 
      
        
        this.storagedMsg = (JSON.parse(localStorage.getItem('msg'))); // add all local storage to an other table to show them on the list 

    },

    isUserChoice(text){ // This function is used to see if the message pushed on the list is a button value
      let msg = text;
      let regex = /^ /;  // regex to see if the parameter start width a space character (all button values start widh a space) 
      return regex.test(msg);
    }
  },
};
</script>