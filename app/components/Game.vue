<template>
  <div class="big-header" :class="addScene">
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
};
</script>