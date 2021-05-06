<template>
  <div class="container-fluid call-to-action-container">
    <div class="call-to-action-wave">
      <img
        class="wave-img"
        src="/images/waves/officecrew-wave-light-blue-01.svg"
      />
      <div class="call-to-action-fill-in"></div>
      <div class="paperclip2" v-if="paperclip">
        <img src="/images/utils/icon-paper-clip-02.svg" />
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="call-to-action-details">
            <h2>Book your free consultation</h2>
            <p>
              Please click below to book a free consultation for your business
            </p>
            <button class="default-button" @click="showForm()">Book now</button>
          </div>
        </div>
      </div>
    </div>
    <model v-show="formVisible" @close="hideForm()">
      <h2 slot="contact-form-heading">Contact Us</h2>
      <div slot="body">
        <form class="former" action="POST" @submit.prevent="sendPayload">
          <div class="form-inline">
            <div class="form-inline-group">
              <label for="name" class="form-control-label">Name *</label>
              <input type="text" id="name" v-model="input['name']" required />
            </div>
            <div class="form-inline-group">
              <label for="company" class="form-control-label">Company *</label>
              <input
                type="text"
                id="company"
                v-model="input['company']"
                required
              />
            </div>
          </div>
          <div class="form-group">
            <label for="email" class="form-control-label">Email *</label>
            <input type="email" id="email" v-model="input['email']" required />
          </div>
          <div class="form-group">
            <label for="info" class="form-control-label"
              >how did you find out about us?</label
            >
            <input type="text" id="info" v-model="input['info']" />
          </div>
          <div class="form-group">
            <label for="enquiry" class="form-control-label">Message *</label>
            <textarea
              cols="40"
              rows="5"
              id="enquiry"
              v-model="input['enquiry']"
            >
            </textarea>
          </div>
          <button type="submit" class="form-submit-button">Submit</button>
        </form>
        <div class="special-message">
          <!-- * Required field -->
        </div>
      </div>
    </model>
  </div>
</template>

<script>
import Model from "../components/modal.vue";
import axios from "axios";
import swal from "sweetalert2";

export default {
  props: ["paperclip"],

  components: { Model },

  data: () => ({
    formVisible: false,
    input: {},
    errors: {},
  }),

  mounted() {
    this.clearInput();
  },

  methods: {
    showForm() {
      this.formVisible = true;
      console.log(this.formVisible);
    },
    hideForm() {
      this.formVisible = false;
      console.log(this.formVisible);
    },
    clearInput() {
      this.input = {};
    },
    sendPayload() {
      return axios
        .post("/contact", this.input)
        .then((response) => {
          this.clearInput();
          swal.fire({
            icon: "success",
            type: "success",
            title: "Thanks!",
            text: "Thanks for your response!",
          });
        })
        .catch((error) => {
          let response = error.response;
          if (response.status === 422) {
            return swal.fire({
              icon: "warning",
              type: "warning",
              title: "Whoops!",
              text:
                "There was something wrong with your input, please check your fields",
            });
          } else {
            return swal.fire({
              icon: "error",
              type: "warning",
              title: "Whoops!",
              text: "Something went wrong! Error Status: " + response.status,
            });
          }
        });
    },
  },
};
</script>
