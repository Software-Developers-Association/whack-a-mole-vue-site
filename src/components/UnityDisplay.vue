<template>
  <div>
      <unity src="Build/WebGL.json" width="1000" height="600" unityLoader="Build/UnityLoader.js"></unity>  
  </div>
</template>

<script>
import Unity from 'vue-unity-webgl'

export default {
  name: 'UnityDisplay',
  components: {
    Unity
  }
}
</script>

<style>
@media screen and (max-width: 640px) {
   #unity-container {
      display: none;
   } 
}
#unity-container {
  margin: 0 auto !important; 
}
</style>
