<template>
  <div>
    <div class="center">
      <div class="login-form">
        <div id="disabledWrapper">
          <form id="loginForm" action="" method="post">
            <b-form-group has-error>
              <img alt="LBFE logo" src="../assets/little_brothers_upper_michigan_logo.png" />
              <br />
              <h2 class="text-center">Welcome to Little Brothers!</h2>
              <h4 class="text-center">Login to get started</h4>
              <br />

              <label for="Username"><strong>Username</strong></label>
              <b-form-input placeholder="Username" required="required"></b-form-input>
              <div class="invalid-feedback"></div>
            </b-form-group>

            <div class="form-group has-error">
              <label for="Password"><strong>Password</strong></label>
              <b-form-input placeholder="Password" required="required"></b-form-input>
              <div class="invalid-feedback"></div>
            </div>
            <b-form-group has-error> </b-form-group>

            <b-form-group>
              <ButtonBlock buttonBlockText="Log in" />
            </b-form-group>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ButtonBlock from '../components/ButtonBlock.vue';

export default {
  name: 'LoginCard',
  components: {
    ButtonBlock
  },

};
</script>

<style lang="scss" scoped>
h2 {
  padding-top: 0;
}

.btn-watermelon {
  color: #fff;
  background-color: #FF3B3F;
  border-color: #FF3B3F;
}

.btn-watermelon:hover {
    color: #fff;
    background-color: #c93033;
    border-color: #c93033;
}

.btn-watermelon:focus {
  box-shadow: 0 0 0 0.2rem rgb(255 65 83 / 50%) !important;
}

.btn-watermelon:active {
  background-color: #c93033 !important;
  border-color: #c93033 !important;
}



.login-form {
  width: 340px;
  margin: 50px auto;
}

/* Align MTU logo to center */
.login-form img {
  display: block;
  width: 70%;
  height: auto;

  margin-left: auto;
  margin-right: auto;
  background: #f7f7f7;
  float: center;
}
.login-form form {
  margin-bottom: 15px;
  background: #f7f7f7;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  padding: 30px;
}
.login-form h2 {
  margin: 0 0 15px;
}
.form-control,
.btn {
  min-height: 38px;
  border-radius: 2px;
}
.btn {
  font-size: 15px;
  font-weight: bold;
}

.center {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

label {
  margin-bottom: 0.1em;
  float: left;
}

.disabled {
  pointer-events: none;
  background-color: #bbb;
  opacity: 0.5;
  margin-bottom: -200px;
}
.disabledWrapper {
  position: relative;
  cursor: not-allowed;
}

.invalid-feedback {
  display: block !important;
}
</style>
