<template>
     <button class="btn">know more</button>
</template>
<script>
export default{
    props:['title']
}
</script>
<style  scoped>

.btn {
  background: transparent;
  color: white;
  border-width: 1px;
  border-style: solid;
  border-image: linear-gradient(to top, darkblue, white) 1;
 margin: 2% 0;
  padding: 2%;
  transition: all 0.9s ease-in-out;
}
.btn:hover {
  cursor: pointer;
  padding: 2%;
  font-size: 18px;
  letter-spacing: 1.2px;
}
</style>