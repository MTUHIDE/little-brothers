<script>
export default {};

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
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <h1>Welcome {{ $store.state.driverName }}!</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <router-link tag="button" to="/driver/calendar" class="btn btn-primary btn-lg">Calendar</router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <router-link tag="button" to="/driver/update" class="btn btn-primary btn-lg">Update</router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <router-link tag="button" to="/driver/prev-updates" class="btn btn-primary btn-lg">Previous Updates</router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <router-link tag="button" to="/driver/about" class="btn btn-primary btn-lg">About</router-link>
      </div>
      <div class="col-md-12">
        <router-link tag="button" to="/" class="btn btn-danger btn-lg">Logout</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin-top: 64px;
}
.row {
  margin-top: 32px;
}
</style>
