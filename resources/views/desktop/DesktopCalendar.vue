<script>
  import Calendar from '../../components/calendar/Calendar.vue';

  export default {
  props: {},
  components: { Calendar },
  setup() {
    return { }
  }
}

function getWindowSize() {
  let w = document.documentElement.clientWidth;
  // console.log(w);

  const navLinks = document.getElementsByClassName('linkText');

  if(w < 660) {
    for(let i = 0; i < navLinks.length; i++) {
      navLinks.item(i).innerHTML = "";
    } 
  } else {
    if(navLinks.length === 4){
      navLinks.item(0).innerHTML = "Calendar";
      navLinks.item(1).innerHTML = "Update";
      navLinks.item(2).innerHTML = "Clients";
      navLinks.item(3).innerHTML = "Log Out";
    }else if(navLinks.length > 1){
      navLinks.item(0).innerHTML ="Calendar";
      navLinks.item(1).innerHTML ="Reports";
      navLinks.item(2).innerHTML ="Updates Log";
      navLinks.item(3).innerHTML ="Drivers";
      navLinks.item(4).innerHTML ="Clients";
      navLinks.item(5).innerHTML ="Log Out";
    }
  }
}

window.addEventListener('resize', getWindowSize)

window.onload = function() {
  getWindowSize();
};

</script>

<template>
  <div class="text-center">
    <Calendar/>
  </div>
</template>

<style scoped>

::-webkit-scrollbar {
  width: 0px;
}

</style>
