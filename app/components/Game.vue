<template>
  <div class="big-header" >
    <p>{{ first }}</p>
    <p>{{ second }}</p>
    <br />
    <ul ref="msgList" class="msg-list">

    </ul>
    <br>
    <br>
    <div class="btn-container">
      <router-link class="button" :to="actionA">{{ btnA }}
      </router-link>
      <router-link class="button" :to="actionB">{{ btnB }}
      </router-link>
    </div>
  </div>
</template>

<script>
import json from '../data.json'

export default {
  computed : {
    id(){
      return this.$route.params.id;
    },
    btnA(){
      return json[this.id].btnA;
    },
    btnB(){
      return json[this.id].btnB;
    },
    actionA(){
      return json[this.id].actionA;
    },   
    actionB(){
      return json[this.id].actionB;
    },
    first(){
      const id = this.$route.params.id;
      const step = json[id];
      return step.first;
    },
     second(){
      const id = this.$route.params.id;
      const step = json[id];
      return step.second;
    },
  },
};
</script>