<template>
  <div class="page-contact">
    <div class="container top contact-form-container" id="contact-form">
      <div class="row">
        <div class="col-md-6 contact-form-details">
          <div class="contact-heading">
            <h1>Contact</h1>
          </div>
          <div class="contact-heading-description" v-for="(contactInfo, index) in contactPage" :key="contactInfo + index">
            <div v-html="contactInfo.title"></div>
          </div>
          <form
            method="post"
            action="/contact"
            ref="form"
            @submit.prevent="sendPayload"
          >
            <div class="row">
              <div class="col-md-12"></div>
            </div>
            <!-- Full Name -->
            <div class="form-group">
              <label
                for="name"
                class="form-control-label"
                aria-label="Full Name"
                style="display: none;"
              ></label>
              <input
                type="text"
                id="name"
                class="form-control"
                placeholder="Full Name"
                v-model="input['name']"
              />
              <form-errors :errors="errors" for="name"></form-errors>
            </div>

            <!-- Email -->
            <div class="form-group" style="clear: both">
              <label
                for="email"
                class="form-control-label"
                aria-label="Email"
                style="display: none;"
              ></label>
              <input
                type="email"
                id="email"
                class="form-control"
                placeholder="Email"
                v-model="input['email']"
              />
              <form-errors :errors="errors" for="email"></form-errors>
            </div>

            <!-- Subject -->
            <div class="form-group" style="width: 100%; float: left">
              <label
                for="subject"
                class="form-control-label"
                aria-label="Subject"
                style="display: none;"
              ></label>
              <input
                type="text"
                id="subject"
                class="form-control"
                placeholder="Subject"
                v-model="input['subject']"
              />
              <form-errors :errors="errors" for="subject"></form-errors>
            </div>

            <!-- Enquiry -->
            <div class="form-group">
              <label
                for="enquiry"
                class="form-control-label"
                aria-label="enquiry"
                style="display: none;"
              ></label>
              <textarea
                class="form-control"
                id="enquiry"
                cols="30"
                rows="7"
                placeholder="Enquiry"
                v-model="input['enquiry']"
              ></textarea>
              <form-errors :errors="errors" for="enquiry"></form-errors>
            </div>

            <!-- Product Number-->
            <div class="form-group">
              <label
                for="product-number"
                class="form-control-label"
                aria-label="product-number"
                style="display: none;"
              ></label>
              <input
                class="form-control"
                id="product-number"
                placeholder="Product Number"
                v-model="input['product-number']"
              />
              <form-errors :errors="errors" for="enquiry"></form-errors>
            </div>

            <!-- Submission -->
            <div class="form-group block-links">
              <button
                class=" submit-button "
                type="submit"
                :disabled="thinking"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div class="col-md-6 contact-details">
          <div class="contact-image-container">
            <img src="/images/contact-page/contact-header-shape-graphic.svg" alt="Contact Decor">
          </div>
        </div>
      </div>
    </div>

        <side-nav class="sideNavDisplay" :navItems="{
            '#contact-form': 'Contact Form',
            '#location-finder': 'Location Finder',
            '#map-scroll': 'Map',
            '#product-range': 'Product Range',
        }"></side-nav>

    <div class="container dealers-container" id="location-finder">
      <div class="row">
        <div class="col-md-6">
          <h2 style="border-bottom: 1px solid black">Location</h2>
          <div class="location-container">
            <div class="item-search">
              <input type="text" v-model="searchText" placeholder="Search..">
            </div>
            <div class="country-container">
              <div class="country-location" v-for="location in filteredLocations" :key="location.value" @click="selectDealership(location.dealership)">
              {{ location.country }}
              </div>
            </div>

          </div>
        </div>
        <div class="col-md-6">
          <h2 style="border-bottom: 1px solid black">Dealer</h2>
          <div class="location-container" style="overflow:scroll;">
            <div class="item-location" v-for="(dealer, index) in selectedDealership" :key="dealer + index" @click="displayLocation(dealer.dealLocation.lat, dealer.dealLocation.lng), scrollMeTo('map')">

              <div v-if=" dealer.specialHeading !== ''" class="item-location-special-message">
                {{dealer.specialHeading}}
              </div>

              <div v-if=" dealer.name !== ''" class="item-location-name">
                {{dealer.name}}
              </div>
              <div v-if="dealer.dealerType !== ''" class="item-location-dealer-type">
                {{dealer.dealerType}}
              </div>
              <div v-if="dealer.website !== ''" class="item-location-website">
                <a :href="dealer.website"> <b>Website:</b> {{dealer.website}} </a>
              </div>
              <div v-if="dealer.email !== ''" class="item-location-email">
                <a :href="'mailto:' + dealer.email"> <b>Email:</b> {{dealer.email}} </a>
              </div> 
              <div v-if="dealer.address !== ''" class="item-location-address">
                <b>Address:</b> {{dealer.address}}
              </div> 
              <div v-if="dealer.phone !== ''" class="item-location-phone">
                <a :href="'tel:' + dealer.phone"> <b>Phone: </b> {{dealer.phone}} </a> 
              </div>
              <div v-if="dealer.fax !== ''" class="item-location-fax">
                <a :href="'tel:' + dealer.fax"> <b>Fax: </b> {{dealer.fax}} </a> 
              </div>           
             
             
              </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div v-html="details">

    </div> -->

    <div ref="map" class="container gmaps-container" id="map-scroll" >
      <div class="row no-gutter">
        <div class="col-4">
          <div class="maps-heading" >
            <h2>Map</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="maps-container" style="text-align:center;display:flex; flex">
            <gmap :dealers="dealers" :clickedLocation="clickedLocation" id="map"></gmap>
          </div>
        </div>
        <!-- <gmap></gmap> -->
      </div>
    </div>

    <home-landing class="top-padding"></home-landing>

  </div>
</template>

<script>
import gmap from "../components/Maps.vue";
import axios from "axios";
import FormErrors from "../components/FormErrors.vue";
import swal from "sweetalert2";
import HomeLanding from "../components/HomeLanding.vue";
import SideNav from "../components/SideNav.vue";
import { processMeta } from "../utils/meta";
import { mapState } from "vuex";

export default {
  components: { FormErrors, gmap, HomeLanding, SideNav },

  data: () => ({
    errors: {},
    input: {},
    thinking: false,
    recap: null,
    recaptchaResponse: "",
    pageName: "contact",
    contact: null,
    thinking: false,
    selected: [1],
    selectedDealership: null,
    searchText: '',
    dealers: [],
    clickedLocation: []
  }),

  asyncData(store) {
    return Promise.all([
      store.dispatch('loadCollectionKeyed', 'location'),
      store.dispatch('loadCollectionKeyed', 'contact')
    ])
  },

  metaInfo() {
    return processMeta({
      title: 'Contact',
      description: "Get in touch",
    });
  },

  mounted() {
    this.clearErrors();
    this.setInput();
    this.setDealers();
    this.selectedDealership = this.locations[0].dealership;
  },

  methods: {
    recaptchaCallback(result) {
      this.recaptchaResponse = result;
    },

    displayLocation(p1, p2){
      if(this.clickedLocation.length < 2){
        this.clickedLocation.push(p1, p2);
      }else{
        this.clickedLocation = [];
        this.clickedLocation.push(p1, p2);
      }
    },
    scrollMeTo(refName) {
        const element = this.$refs[refName];
        element.scrollIntoView({ behavior: "smooth" });
    },

    selectDealership(dealership) {
      this.selectedDealership = dealership;
    },
    setInput() {
      this.$refs.form.reset();
      this.input = {};
    },
    clearErrors() {
      this.errors = {};
    },
    setDealers(){
      for(const list in this.locations){
        for(const local in this.locations[list].dealership){
          if(this.locations[list].dealership[local].dealLocation != ""){
            let tempArray = [];
            tempArray.push(this.locations[list].dealership[local].name);
            tempArray.push(this.locations[list].dealership[local].dealLocation.lng);
            tempArray.push(this.locations[list].dealership[local].dealLocation.lat); 
            this.dealers.push(tempArray);
          }
        }
      }
      return;
    },
    sendPayload() {
      return axios
        .post("/contact", this.input)
        .then((response) => {
          this.clearErrors();
          swal.fire({
            icon: "success",
            title: "Thanks!",
            text: "Thanks for your enquiry, we will be in touch shortly.",
          });
          this.setInput();
        })
        .catch((error) => {
          let response = error.response;

          this.clearErrors();

          if (response.status === 422) {
            this.errors = response.data.errors;

            return swal.fire({
              icon: "warning",
              title: "Whoops!",
              text:
                "There was something wrong with your input, please check your fields",
            });
          }
          return swal({
            icon: "error",
            title: "Oh No!",
            text: "Something went wrong, please try again.",
          });
        });
    },
  },

  computed: {
    ...mapState({
      locations: s=>s.keyedData.location,
      contactPage: s=>s.keyedData.contact
    }),
    filteredLocations() {
      return this.locations.filter(l => l.country.toLowerCase().includes(this.searchText.toLowerCase()));
    }
  },

  watch: {
    $route() {
      this.clearErrors();
      this.setInput();
    },
  },
};
</script>