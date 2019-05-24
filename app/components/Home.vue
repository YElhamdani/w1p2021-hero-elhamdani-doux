<template>
  <div class="big-header">
    <audio src="../assets/audio/music.mp3" autoplay loop ref="audio"></audio>
    <h1 style="font-size: 35px">HETIC SURVIVOR</h1>
    <br />
    <div class="buttons">
    <router-link class="button" to="/game/1">Jouer</router-link>
    <router-link class="button" to="/rules">Comment jouer ?</router-link>
    </div>
    <a class="credit" href="/credit" to="/page">Crédits</a>
  </div>
</template>

<script>
export default {
  //data() {
    //return {
      //message: 'Hello Hetic'
    //};
  //}
};
</script>
