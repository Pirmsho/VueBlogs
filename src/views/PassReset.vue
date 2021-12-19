<template>
  <div class="reset-password">
    <Modal
      v-if="modalActive"
      :modalMessage="modalMessage"
      v-on:close-modal="closeModal"
    />
    <Loading v-if="loading" />
    <div class="form-wrap">
      <form class="reset">
        <p class="login-register">
          Back to
          <router-link class="router-link" :to="{ name: 'Login' }"
            >Login</router-link
          >
        </p>
        <h2>Reset Password</h2>
        <p>Forgot your password? Enter your email to reset it!</p>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="Email" v-model="email" />
            <email class="icon" />
          </div>
        </div>
        <button @click.prevent="resetPassword">Reset Password</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import Modal from "../components/Modal.vue";
import Loading from "../components/Loading.vue";
import email from "../assets/Icons/envelope-regular.svg";
export default {
  name: "ForgotPassword",
  components: {
    Modal,
    Loading,
    email,
  },
  data() {
    return {
      email: "",
      modalActive: false,
      modalMessage: "",
      loading: null,
    };
  },
  methods: {
    closeModal() {
      this.modalActive = !this.modalActive;
      this.email = "";
    },
    resetPassword() {
      this.loading = true;
      firebase
        .auth()
        .sendPasswordResetEmail(this.email)
        .then(() => {
          this.modalMessage =
            "If Your Account Exists, You Will Receive An Email";
          this.loading = false;
          this.modalActive = true;
        })
        .catch((err) => {
          this.modalMessage = err.message;
          this.loading = false;
          this.modalActive = true;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.reset-password {
  position: relative;
  .form-wrap {
    .reset {
      h2 {
        margin-bottom: 8px;
      }
      p {
        text-align: center;
        margin-bottom: 32px;
      }
    }
  }
}
</style>