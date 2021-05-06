<template>
  <div class="page-home">
    <div class="container-fluid">
      <div class="hero-container">

      <div class="page-container">
        <div class="logo">
          <img src="/images/chilli_dhaba_logo_white.svg" alt="chilli dhaba logo" />
        </div>
        <div class="row button-container">
          <div class="col-6 left-button">
            <a href="https://orders.chillidhaba.nz">
              <div class="order-button">
                <span v-show="false">Order / view menu</span>
                <!-- <img src="/images/order-menu-button.svg" alt="order and menu button" /> -->
              </div>
            </a>
          </div>
          <div class="col-6 right-button" @click="showContactModal">
            <a href="#">
              <div class="contact-button">
                <span v-show="false">Contact Us</span>
                <!-- <img src="/images/contact-button.svg" alt="contact button" /> -->
              </div>
            </a>
          </div>
          <!-- <div class="col-12">
              <div class="more-arrow" @click="scrollMeTo('menu')">
                <span v-show="false">More content</span> -->
                <!-- <img src="/images/arrow-button.svg" alt="Scroll for more"> -->
              <!-- </div>
          </div> -->
          <modal v-show="isContactModalVisible" @close="closeContactModal">
            <h2 slot="header">Contact Us</h2>
            <div slot="body" class="px-4 py-4">
              <div class="col-md-12 contact-form-container">
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
                    ></label>
                    <input
                      type="text"
                      id="name"
                      class="form-control"
                      placeholder="NAME *"
                      v-model="input['name']"
                    />
                    <form-errors :errors="errors" for="name"></form-errors>
                  </div>

                  <!-- phone -->
                  <div class="form-group" style="width: 48%; float: left">
                    <label
                      for="phone"
                      class="form-control-label"
                      aria-label="Phone"
                    ></label>
                    <input
                      type="tel"
                      id="phone"
                      class="form-control"
                      placeholder="PHONE"
                      v-model="input['phone']"
                    />
                    <form-errors :errors="errors" for="phone"></form-errors>
                  </div>

                  <!-- Email -->
                  <div class="form-group" style="clear: both">
                    <label
                      for="email"
                      class="form-control-label"
                      aria-label="Email"
                    ></label>
                    <input
                      type="email"
                      id="email"
                      class="form-control"
                      placeholder="EMAIL *"
                      v-model="input['email']"
                    />
                    <form-errors :errors="errors" for="email"></form-errors>
                  </div>

                  <!-- Details -->
                  <div class="form-group">
                    <label
                      for="enquiry"
                      class="form-control-label"
                      aria-label="enquiry"
                    ></label>
                    <textarea
                      class="form-control"
                      id="enquiry"
                      cols="30"
                      rows="4"
                      placeholder="ENQUIRY *"
                      v-model="input['enquiry']"
                    ></textarea>
                    <form-errors :errors="errors" for="enquiry"></form-errors>
                  </div>
                  <br />

                  <!-- Recaptcha - see app.blade.php for binding key to window, then passing to vue data -->
                  <div class="form-group recap">
                    <label
                      for="g-recaptcha"
                      class="form-control-label"
                      aria-label="g-recaptcha"
                    ></label>
                    <div
                      class="g-recaptcha"
                      id="recaptcha-container"
                      :data-sitekey="recap"
                      style="
                        transform: scale(0.77);
                        -webkit-transform: scale(0.77);
                        transform-origin: 0 0;
                        -webkit-transform-origin: 0 0;
                      "
                    >
                      >
                    </div>
                    <form-errors
                      :errors="errors"
                      for="g-recaptcha-response"
                    ></form-errors>
                  </div>
                  <br />

                  <!-- Submission -->
                  <div class="form-group block-links">
                    <button
                      class="btn btn-primary submit-button form-btn"
                      type="submit"
                      :disabled="thinking"
                    >
                      Enquire Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </modal>
        </div>
      </div>
      </div>
      <div class="container-fluid content-big-container">
        <div class="container content-container" id="menu" style="color: black">
          <div class="row">
            <div class="col-md-12">
              <div class="heading-text">
                <p>You're here, so it must be time to get spicy and bring the heat back to your home!</p>

                <p>Why cook when you can have Chilli Dhaba's authentic Indian dishes delivered
                   straight from our St Kilda kitchens, to your front door.</p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="menu-heading">
                <h1>Menu</h1>
              </div>
            </div>
          </div>
          <div class="row options-row">
            <div class="col-md-6 col-sm-12">
              <!-- MEAL OPTIONS AVAILABLE -->
              <div class="menu-available-container">
                <div class="available-heading">
                  <h2>Meals Available in:</h2>
                </div>

                <div class="available-options">
                  <div class="available-option-vegan">
                    <div class="available-image-container">
                      <img
                        src="/images/smybols/vegan-symbol.svg"
                        alt="Vegan Meal Symbol"
                      />
                    </div>
                    <div class="available-description">
                      <span>Vegan</span>
                    </div>
                  </div>

                  <div class="available-option-gluten-free">
                    <div class="available-image-container">
                      <img
                        src="/images/smybols/gluten-free-symbol.svg"
                        alt="Vegan Meal Symbol"
                      />
                    </div>
                    <div class="available-description">
                      <span>Gluten free</span>
                    </div>
                  </div>

                  <div class="available-option-dairy-free">
                    <div class="available-image-container">
                      <img
                        src="/images/smybols/dairy-free-symbol.svg"
                        alt="Vegan Meal Symbol"
                      />
                    </div>
                    <div class="available-description">
                      <span>Dairy free</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="menu-spice-options-container">
                <!-- SPICE HEADINGS -->
                <div class="spice-heading">
                  <h2>All curries available in:</h2>
                </div>
                <div class="spice-options">
                  <div class="spice-option-mild">
                    <div class="spice-image-container">
                      <img
                        src="/images/smybols/mild-spice.svg"
                        alt="Vegan Meal Symbol"
                      />
                    </div>
                    <div class="spice-description">
                      <span>Mild</span>
                    </div>
                  </div>

                  <div class="spice-option-medium">
                    <div class="spice-image-container">
                      <img
                        src="/images/smybols/medium-spice.svg"
                        alt="Vegan Meal Symbol"
                      />
                    </div>
                    <div class="spice-description">
                      <span>Medium</span>
                    </div>
                  </div>

                  <div class="spice-option-hot">
                    <div class="spice-image-container">
                      <img
                        src="/images/smybols/hot-spice.svg"
                        alt="Vegan Meal Symbol"
                      />
                    </div>
                    <div class="spice-description">
                      <span>Hot</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="menu-container">
                <div class="menu-heading-container">
                  <h2>Starters</h2>
                </div>
                <div class="menu-content-container">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="menu-container-1">
                        <!-- menu ITEMS START HERE -->
                        <div class="menu-item">
                          <div class="menu-content">
                            <div class="menu-content-heading">
                              <div class="menu-item-heading">
                                <h3>Vegetable Samosa</h3>
                              </div>
                              <div class="menu-content-options">
                                <img
                                  src="/images/smybols/vegan-symbol.svg"
                                  alt="Vegan Meal Symbol"
                                />
                                <img
                                  src="/images/smybols/gluten-free-symbol.svg"
                                  alt="Vegan Meal Symbol"
                                />
                                <img
                                  src="/images/smybols/dairy-free-symbol.svg"
                                  alt="Vegan Meal Symbol"
                                />
                              </div>
                              <div class="menu-price">
                                <span>6</span>
                              </div>
                            </div>

                            <div class="menu-content-description">
                              <p>
                                Deep fried flaky pastry, filled with mashed
                                potatoes, peas and Indian spices.
                                <i>2 per portion.</i>
                              </p>
                            </div>
                          </div>
                        </div>

                 
                        <div class="menu-item">
                          <div class="menu-content">
                            <div class="menu-content-heading">
                              <div class="menu-item-heading">
                                <h3>Onion Bhajis</h3>
                              </div>
                              <div class="menu-content-options">
                                <img
                                  src="/images/smybols/vegan-symbol.svg"
                                  alt="Vegan Meal Symbol"
                                />
                                <img
                                  src="/images/smybols/gluten-free-symbol.svg"
                                  alt="Vegan Meal Symbol"
                                />
                                <img
                                  src="/images/smybols/dairy-free-symbol.svg"
                                  alt="Vegan Meal Symbol"
                                />
                              </div>
                              <div class="menu-price">
                                <span>5.5</span>
                              </div>
                            </div>

                            <div class="menu-content-description">
                              <p>
                                Sliced onions in a homemade chickpea and rice
                                flour batter and deep fried to crispy golden
                                yumminess.
                                <i>3 per portion.</i>
                              </p>
                            </div>
                          </div>
                        </div>

                        <div class="menu-item">
                          <div class="menu-content">
                            <div class="menu-content-heading">
                              <div class="menu-item-heading">
                                <h3>Vegetable Pakoras</h3>
                              </div>
                              <div class="menu-content-options">
                                <img
                                  src="/images/smybols/vegan-symbol.svg"
                                  alt="Vegan Meal Symbol"
                                />
                                <img
                                  src="/images/smybols/gluten-free-symbol.svg"
                                  alt="Vegan Meal Symbol"
                                />
                                <img
                                  src="/images/smybols/dairy-free-symbol.svg"
                                  alt="Vegan Meal Symbol"
                                />
                              </div>
                              <div class="menu-price">
                                <span>5.5</span>
                              </div>
                            </div>

                            <div class="menu-content-description">
                              <p>
                                Spinach, onion, potato in a homemade chickpea
                                and rice flour batter, deep fried.
                                <i>3 per portion.</i>
                              </p>
                            </div>
                          </div>
                        </div>

                        <div class="menu-item">
                          <div class="menu-content">
                            <div class="menu-content-heading">
                              <div class="menu-item-heading">
                                <h3>Paneer Tikki</h3>
                              </div>
                              <div class="menu-content-options">
                                <!-- <img
                                  src="/images/smybols/vegan-symbol.svg"
                                  alt="Vegan Meal Symbol"
                                />
                                <img
                                  src="/images/smybols/gluten-free-symbol.svg"
                                  alt="Vegan Meal Symbol"
                                />
                                <img
                                  src="/images/smybols/dairy-free-symbol.svg"
                                  alt="Vegan Meal Symbol"
                                /> -->
                              </div>
                              <div class="menu-price">
                                <span>10</span>
                              </div>
                            </div>

                            <div class="menu-content-description">
                              <p>
                                Homemade paneer and potato, mixed with our fresh
                                herbs and Indian spices. Crumbed and deep fried.
                                <i>5 per portion.</i>
                              </p>
                            </div>
                          </div>
                        </div>

                        <div class="menu-item">
                          <div class="menu-content">
                            <div class="menu-content-heading">
                              <div class="menu-item-heading">
                                <h3>Chicken Tikka</h3>
                              </div>
                              <div class="menu-content-options">
                                <!-- <img
                                  src="/images/smybols/vegan-symbol.svg"
                                  alt="Vegan Meal "
                                /> -->
                                <img
                                  src="/images/smybols/gluten-free-symbol.svg"
                                  alt=""
                                />
                                <!-- <img
                                  src="/images/smybols/dairy-free-symbol.svg"
                                  alt="Vegan Meal Symbol"
                                /> -->
                              </div>
                              <div class="menu-price">
                                <span>14</span>
                              </div>
                            </div>

                            <div class="menu-content-description">
                              <p>
                                Succulent boneless chicken in our homemade
                                yoghurt based marinade, cooked in the tandoor.
                                <i>5 per portion.</i>
                              </p>
                            </div>
                          </div>
                        </div>

                        <div class="menu-item">
                          <div class="menu-content">
                            <div class="menu-content-heading">
                              <div class="menu-item-heading">
                                <h3>Tandoori prawns</h3>
                              </div>
                              <div class="menu-content-options">
                                <!-- <img
                                  src="/images/smybols/vegan-symbol.svg"
                                  alt="Vegan Meal Symbol"
                                />
                                <img
                                  src="/images/smybols/gluten-free-symbol.svg"
                                  alt="Vegan Meal Symbol"
                                />
                                <img
                                  src="/images/smybols/dairy-free-symbol.svg"
                                  alt="Vegan Meal Symbol"
                                /> -->
                              </div>
                              <div class="menu-price">
                                <span>15</span>
                              </div>
                            </div>

                            <div class="menu-content-description"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="menu-container-1 menu-container-2">
                        <div class="menu-item">
                          <div class="menu-content">
                            <div class="menu-content-heading">
                              <div class="menu-item-heading">
                                <h3>Tandoori Chicken</h3>
                              </div>
                              <div class="menu-content-options">
                                <!-- <img
                                  src="/images/smybols/vegan-symbol.svg"
                                  alt="Vegan Meal Symbol"
                                /> -->
                                <img
                                  src="/images/smybols/gluten-free-symbol.svg"
                                  alt="Vegan Meal Symbol"
                                />
                                <!-- <img
                                  src="/images/smybols/dairy-free-symbol.svg"
                                  alt="Vegan Meal Symbol"
                                /> -->
                              </div>
                              <div class="menu-price">
                                <span>HALF 12 / FULL 18</span>
                              </div>
                            </div>

                            <div class="menu-content-description">
                              <p>
                                Chicken on the bone in our homemade yoghurt
                                based marinade, cooked in the tandoor to
                                perfection.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div class="menu-item">
                          <div class="menu-content">
                            <div class="menu-content-heading">
                              <div class="menu-item-heading">
                                <h3>Lamb Lollipops</h3>
                              </div>
                              <div class="menu-content-options">
                                <!-- <img
                                  src="/images/smybols/vegan-symbol.svg"
                                  alt="Vegan Meal Symbol"
                                /> -->
                                <img
                                  src="/images/smybols/gluten-free-symbol.svg"
                                  alt="Gluten Free"
                                />
                                <!-- <img
                                  src="/images/smybols/dairy-free-symbol.svg"
                                  alt="Dairy Free"
                                /> -->
                              </div>
                              <div class="menu-price">
                                <span>16</span>
                              </div>
                            </div>
                            <div class="menu-content-description">
                              <p>
                                Lamb chops marinated overnight in our secret
                                marinade and cooked in the tandoor.
                                <i>4 per portion.</i>
                              </p>
                            </div>
                          </div>
                        </div>

                        <div class="menu-item">
                          <div class="menu-content">
                            <div class="menu-content-heading">
                              <div class="menu-item-heading">
                                <h3>Lamb Tikka</h3>
                              </div>
                              <div class="menu-content-options">
                                <!-- <img
                                  src="/images/smybols/vegan-symbol.svg"
                                  alt="Vegan Meal"
                                /> -->
                                <img
                                  src="/images/smybols/gluten-free-symbol.svg"
                                  alt="Gluten Free"
                                />
                                <!-- <img
                                  src="/images/smybols/dairy-free-symbol.svg"
                                  alt="Dairy Free"
                                /> -->
                              </div>
                              <div class="menu-price">
                                <span>15</span>
                              </div>
                            </div>

                            <div class="menu-content-description">
                              <p>
                                Tender lamb pieces cooked in our secret
                                marinade, cooked in the tandoor.
                                <i>5 per portion.</i>
                              </p>
                            </div>
                          </div>
                        </div>

                        <div class="menu-item">
                          <div class="menu-content">
                            <div class="menu-content-heading">
                              <div class="menu-item-heading">
                                <h3>Platter for Two</h3>
                              </div>
                              <div class="menu-content-options">
                                <!-- <img
                                  src="/images/smybols/vegan-symbol.svg"
                                  alt="Vegan Meal Symbol"
                                />
                                <img
                                  src="/images/smybols/gluten-free-symbol.svg"
                                  alt="Vegan Meal Symbol"
                                />
                                <img
                                  src="/images/smybols/dairy-free-symbol.svg"
                                  alt="Vegan Meal Symbol"
                                /> -->
                              </div>
                              <div class="menu-price">
                                <span>22</span>
                              </div>
                            </div>

                            <div class="menu-content-description">
                              <p>
                                Crunchy samosas, scrumptious onion bhajis, lamb
                                lollipops, lamb tikka and chicken tikka.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div class="menu-item">
                          <div class="menu-content">
                            <div class="menu-content-heading">
                              <div class="menu-item-heading">
                                <h3>Vegetarian Platter for Two</h3>
                              </div>
                              <div class="menu-content-options">
                                <!-- <img
                                  src="/images/smybols/vegan-symbol.svg"
                                  alt="Vegan Meal Symbol"
                                />
                                <img
                                  src="/images/smybols/gluten-free-symbol.svg"
                                  alt="Vegan Meal Symbol"
                                />
                                <img
                                  src="/images/smybols/dairy-free-symbol.svg"
                                  alt="Vegan Meal Symbol"
                                /> -->
                              </div>
                              <div class="menu-price">
                                <span>18</span>
                              </div>
                            </div>

                            <div class="menu-content-description">
                              <p>
                                Crunchy samosas, yummy pakoras, scrumptious
                                onion bhajis, paneer tikki and masala pappad.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="menu-container">
                <div class="menu-heading-container">
                  <h2>Mains</h2>
                </div>
                <div class="menu-content-container">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="menu-container-1">
                        <div class="mains-description">
                          All mains come served with one portion of soft,
                          steaming basmati rice.
                        </div>
                        <div class="menu-item">
                          <div class="menu-content">
                            <div class="menu-content-heading">
                              <div class="menu-item-heading">
                                <h3>Butter Chicken</h3>
                              </div>
                              <div class="menu-content-options">
                                <!-- <img
                                  src="/images/smybols/vegan-symbol.svg"
                                  alt="Vegan Meal"
                                /> -->
                                <img
                                  src="/images/smybols/gluten-free-symbol.svg"
                                  alt="Gluten Free"
                                />
                                <!-- <img
                                  src="/images/smybols/dairy-free-symbol.svg"
                                  alt="Dairy Free"
                                /> -->
                              </div>
                              <div class="menu-price">
                                <span>16.5</span>
                              </div>
                            </div>

                            <div class="menu-content-description">
                              <p>
                                The classic family favourite. Tandoori chicken
                                in a creamy sauce. Topped off with nuts.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div class="menu-item">
                          <div class="menu-content">
                            <div class="menu-content-heading">
                              <div class="menu-item-heading">
                                <h3>Kadai</h3>
                              </div>
                              <div class="menu-content-options">
                                <!-- <img
                                  src="/images/smybols/vegan-symbol.svg"
                                  alt="Vegan Meal"
                                /> -->
                                <img
                                  src="/images/smybols/gluten-free-symbol.svg"
                                  alt="Gluten Free"
                                />
                                <!-- <img
                                  src="/images/smybols/dairy-free-symbol.svg"
                                  alt="Dairy Free"
                                /> -->
                              </div>
                              <div class="menu-price">
                                <span></span>
                              </div>
                            </div>

                            <div class="menu-content-description">
                              <p>
                                A delicious dish known for its spicy and unique
                                flavour. Meat or vegetable cooked in our
                                colourful homemade capsicum curry.
                              </p>
                            </div>
                            <div class="menu-content-list-options">
                              <div class="menu-content-list-item">
                                <div class="food-type">Chicken</div>
                                <div class="food-price"><span>17</span></div>
                              </div>
                              <div class="menu-content-list-item">
                                <div class="food-type">Lamb</div>
                                <div class="food-price"><span>18</span></div>
                              </div>
                              <div class="menu-content-list-item">
                                <div class="food-type">Prawns</div>
                                <div class="food-price"><span>19</span></div>
                              </div>
                              <div class="menu-content-list-item">
                                <div class="food-type">Vegetable</div>
                                <div class="food-price"><span>15</span></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="menu-item">
                          <div class="menu-content">
                            <div class="menu-content-heading">
                              <div class="menu-item-heading">
                                <h3>Bhuna</h3>
                              </div>
                              <div class="menu-content-options">
                                <!-- <img
                                  src="/images/smybols/vegan-symbol.svg"
                                  alt="Vegan Meal"
                                /> -->
                                <img
                                  src="/images/smybols/gluten-free-symbol.svg"
                                  alt="Gluten Free"
                                />
                                <!-- <img
                                  src="/images/smybols/dairy-free-symbol.svg"
                                  alt="Dairy Free"
                                /> -->
                              </div>
                              <div class="menu-price">
                                <span></span>
                              </div>
                            </div>

                            <div class="menu-content-description">
                              <p>
                                A spectacular dish, made frying our special
                                spices together on high heat to create a rich,
                                intense flavoured dish.
                              </p>
                            </div>
                            <div class="menu-content-list-options">
                              <div class="menu-content-list-item">
                                <div class="food-type">Chicken</div>
                                <div class="food-price"><span>16.5</span></div>
                              </div>
                              <div class="menu-content-list-item">
                                <div class="food-type">Lamb</div>
                                <div class="food-price"><span>17.5</span></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="menu-item">
                          <div class="menu-content">
                            <div class="menu-content-heading">
                              <div class="menu-item-heading">
                                <h3>Jalfrezi</h3>
                              </div>
                              <div class="menu-content-options">
                                <!-- <img
                                  src="/images/smybols/vegan-symbol.svg"
                                  alt="Vegan Meal"
                                /> -->
                                <img
                                  src="/images/smybols/gluten-free-symbol.svg"
                                  alt="Gluten Free"
                                />
                                <!-- <img
                                  src="/images/smybols/dairy-free-symbol.svg"
                                  alt="Dairy Free"
                                /> -->
                              </div>
                              <div class="menu-price">
                                <span></span>
                              </div>
                            </div>

                            <div class="menu-content-description">
                              <p>
                                A coconut cream based curry loaded with spices
                                and capsicum. A must try!
                              </p>
                            </div>
                            <div class="menu-content-list-options">
                              <div class="menu-content-list-item">
                                <div class="food-type">Chicken</div>
                                <div class="food-price"><span>16.5</span></div>
                              </div>
                              <div class="menu-content-list-item">
                                <div class="food-type">Lamb</div>
                                <div class="food-price"><span>17.5</span></div>
                              </div>
                              <div class="menu-content-list-item">
                                <div class="food-type">Prawns</div>
                                <div class="food-price"><span>19</span></div>
                              </div>
                              <div class="menu-content-list-item">
                                <div class="food-type">Vegetarian</div>
                                <div class="food-price"><span>15</span></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="menu-container-1 menu-container-2">
                        <div class="menu-item">
                          <div class="menu-content">
                            <div class="menu-content-heading">
                              <div class="menu-item-heading">
                                <h3>Chettinad</h3>
                              </div>
                              <div class="menu-content-options">
                                <!-- <img
                                  src="/images/smybols/vegan-symbol.svg"
                                  alt="Vegan Meal"
                                /> -->
                                <img
                                  src="/images/smybols/gluten-free-symbol.svg"
                                  alt="Gluten Free"
                                />
                                <!-- <img
                                  src="/images/smybols/dairy-free-symbol.svg"
                                  alt="Dairy Free"
                                /> -->
                              </div>
                              <div class="menu-price">
                                <span></span>
                              </div>
                            </div>

                            <div class="menu-content-description">
                              <p>
                                One for the chilli fans! A spicy curry with
                                coconut, curry leaves and spices.
                              </p>
                            </div>
                            <div class="menu-content-list-options">
                              <div class="menu-content-list-item">
                                <div class="food-type">Chicken</div>
                                <div class="food-price"><span>17</span></div>
                              </div>
                              <div class="menu-content-list-item">
                                <div class="food-type">Lamb</div>
                                <div class="food-price"><span>18</span></div>
                              </div>
                              <div class="menu-content-list-item">
                                <div class="food-type">Prawns</div>
                                <div class="food-price"><span>19</span></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="menu-item">
                          <div class="menu-content">
                            <div class="menu-content-heading">
                              <div class="menu-item-heading">
                                <h3>Korma</h3>
                              </div>
                              <div class="menu-content-options">
                                <!-- <img
                                  src="/images/smybols/vegan-symbol.svg"
                                  alt="Vegan Meal"
                                /> -->
                                <img
                                  src="/images/smybols/gluten-free-symbol.svg"
                                  alt="Gluten Free"
                                />
                                <!-- <img
                                  src="/images/smybols/dairy-free-symbol.svg"
                                  alt="Dairy Free"
                                /> -->
                              </div>
                              <div class="menu-price">
                                <span></span>
                              </div>
                            </div>

                            <div class="menu-content-description">
                              <p>
                                A simple yet luxurious curry. Cream based and
                                topped with almonds.
                              </p>
                            </div>
                            <div class="menu-content-list-options">
                              <div class="menu-content-list-item">
                                <div class="food-type">Chicken</div>
                                <div class="food-price"><span>16.5</span></div>
                              </div>
                              <div class="menu-content-list-item">
                                <div class="food-type">Lamb</div>
                                <div class="food-price"><span>17.5</span></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="menu-item">
                          <div class="menu-content">
                            <div class="menu-content-heading">
                              <div class="menu-item-heading">
                                <h3>Tikka Masala</h3>
                              </div>
                              <div class="menu-content-options">
                                <!-- <img
                                  src="/images/smybols/vegan-symbol.svg"
                                  alt="Vegan Meal"
                                /> -->
                                <img
                                  src="/images/smybols/gluten-free-symbol.svg"
                                  alt="Gluten Free"
                                />
                                <!-- <img
                                  src="/images/smybols/dairy-free-symbol.svg"
                                  alt="Dairy Free"
                                /> -->
                              </div>
                              <div class="menu-price">
                                <span></span>
                              </div>
                            </div>

                            <div class="menu-content-description">
                              <p>
                                Another simple yet flavourful curry. Yoghurt
                                based with deliciously cooked onions.
                              </p>
                            </div>
                            <div class="menu-content-list-options">
                              <div class="menu-content-list-item">
                                <div class="food-type">Chicken</div>
                                <div class="food-price"><span>17</span></div>
                              </div>
                              <div class="menu-content-list-item">
                                <div class="food-type">Lamb</div>
                                <div class="food-price"><span>18</span></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="menu-item">
                          <div class="menu-content">
                            <div class="menu-content-heading">
                              <div class="menu-item-heading">
                                <h3>Lamb Rogan Josh</h3>
                              </div>
                              <div class="menu-content-options">
                                <!-- <img
                                  src="/images/smybols/vegan-symbol.svg"
                                  alt="Vegan Meal"
                                /> -->
                                <!-- <img
                                  src="/images/smybols/gluten-free-symbol.svg"
                                  alt="Gluten Free"
                                /> -->
                                <!-- <img
                                  src="/images/smybols/dairy-free-symbol.svg"
                                  alt="Dairy Free"
                                /> -->
                              </div>
                              <div class="menu-price">
                                <span>17.5</span>
                              </div>
                            </div>

                            <div class="menu-content-description">
                              <p>
                                Slow cooked lamb in a lovely mixture of herbs
                                and spices.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div class="menu-item">
                          <div class="menu-content">
                            <div class="menu-content-heading">
                              <div class="menu-item-heading">
                                <h3>Saag</h3>
                              </div>
                              <div class="menu-content-options">
                                <!-- <img
                                  src="/images/smybols/vegan-symbol.svg"
                                  alt="Vegan Meal"
                                /> -->
                                <img
                                  src="/images/smybols/gluten-free-symbol.svg"
                                  alt="Gluten Free"
                                />
                                <!-- <img
                                  src="/images/smybols/dairy-free-symbol.svg"
                                  alt="Dairy Free"
                                /> -->
                              </div>
                              <div class="menu-price">
                                <span></span>
                              </div>
                            </div>

                            <div class="menu-content-description">
                              <p>
                                Made with fresh spinach, this is one
                                mouthwatering curry! Cream and spices make up
                                the curry base.
                              </p>
                            </div>
                            <div class="menu-content-list-options">
                              <div class="menu-content-list-item">
                                <div class="food-type">Chicken</div>
                                <div class="food-price"><span>16.5</span></div>
                              </div>
                              <div class="menu-content-list-item">
                                <div class="food-type">Lamb</div>
                                <div class="food-price"><span>17.5</span></div>
                              </div>
                              <div class="menu-content-list-item">
                                <div class="food-type">Prawns</div>
                                <div class="food-price"><span>19</span></div>
                              </div>
                              <div class="menu-content-list-item">
                                <div class="food-type">
                                  Paneer (Vegetarian) (Indian cottage cheese)
                                </div>
                                <div class="food-price"><span>14.5</span></div>
                              </div>
                              <div class="menu-content-list-item">
                                <div class="food-type">Potato (Vegetarian)</div>
                                <div class="food-price"><span>13.5</span></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="menu-container">
                <div class="menu-heading-container">
                  <h2>Vegetarian</h2>
                </div>
                <div class="menu-content-container">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="menu-container-1">
                        <div class="menu-item">
                          <div class="menu-content">
                            <div class="menu-content-heading">
                              <div class="menu-item-heading">
                                <h3>Malai kofta</h3>
                              </div>
                              <div class="menu-content-options">
                                <!-- <img
                                  src="/images/smybols/vegan-symbol.svg"
                                  alt="Vegan Meal"
                                /> -->
                                <!-- <img
                                  src="/images/smybols/gluten-free-symbol.svg"
                                  alt="Gluten Free"
                                /> -->
                                <!-- <img
                                  src="/images/smybols/dairy-free-symbol.svg"
                                  alt="Dairy Free"
                                /> -->
                              </div>
                              <div class="menu-price">
                                <span>14.5</span>
                              </div>
                            </div>

                            <div class="menu-content-description">
                              <p>
                                Deep fried paneer (Indian cottage cheese) and
                                potato balls in a creamy sauce topped with
                                cashew nuts.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div class="menu-item">
                          <div class="menu-content">
                            <div class="menu-content-heading">
                              <div class="menu-item-heading">
                                <h3>Paneer Makhini</h3>
                              </div>
                              <div class="menu-content-options">
                                <!-- <img
                                  src="/images/smybols/vegan-symbol.svg"
                                  alt="Vegan Meal"
                                /> -->
                                <img
                                  src="/images/smybols/gluten-free-symbol.svg"
                                  alt="Gluten Free"
                                />
                                <!-- <img
                                  src="/images/smybols/dairy-free-symbol.svg"
                                  alt="Dairy Free"
                                /> -->
                              </div>
                              <div class="menu-price">
                                <span>14.5</span>
                              </div>
                            </div>

                            <div class="menu-content-description">
                              <p>
                                Paneer (Indian cottage cheese) in a creamy sauce
                                and topped off with nuts. The vegetarian version
                                of theclassic Butter Chicken.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div class="menu-item">
                          <div class="menu-content">
                            <div class="menu-content-heading">
                              <div class="menu-item-heading">
                                <h3>Aloo Gobi</h3>
                              </div>
                              <div class="menu-content-options">
                                <img
                                  src="/images/smybols/vegan-symbol.svg"
                                  alt="Vegan Meal"
                                />
                                <img
                                  src="/images/smybols/gluten-free-symbol.svg"
                                  alt="Gluten Free"
                                />
                                <img
                                  src="/images/smybols/dairy-free-symbol.svg"
                                  alt="Dairy Free"
                                />
                              </div>
                              <div class="menu-price">
                                <span>13.5</span>
                              </div>
                            </div>

                            <div class="menu-content-description">
                              <p>
                                A dry dish of potato and cauliflower with
                                onions, ginger and garlic.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="menu-container-1 menu-container-2">
                        <div class="menu-item">
                          <div class="menu-content">
                            <div class="menu-content-heading">
                              <div class="menu-item-heading">
                                <h3>Aloo Jeera (Cumin)</h3>
                              </div>
                              <div class="menu-content-options">
                                <img
                                  src="/images/smybols/vegan-symbol.svg"
                                  alt="Vegan Meal"
                                />
                                <img
                                  src="/images/smybols/gluten-free-symbol.svg"
                                  alt="Gluten Free"
                                />
                                <img
                                  src="/images/smybols/dairy-free-symbol.svg"
                                  alt="Dairy Free"
                                />
                              </div>
                              <div class="menu-price">
                                <span>13.5</span>
                              </div>
                            </div>

                            <div class="menu-content-description">
                              <p>
                                Exactly what it sounds like, this delicious dish
                                is made of potato and cumin.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div class="menu-item">
                          <div class="menu-content">
                            <div class="menu-content-heading">
                              <div class="menu-item-heading">
                                <h3>Kumbh Mattar</h3>
                              </div>
                              <div class="menu-content-options">
                                <!-- <img
                                  src="/images/smybols/vegan-symbol.svg"
                                  alt="Vegan Meal"
                                /> -->
                                <img
                                  src="/images/smybols/gluten-free-symbol.svg"
                                  alt="Gluten Free"
                                />
                                <!-- <img
                                  src="/images/smybols/dairy-free-symbol.svg"
                                  alt="Dairy Free"
                                /> -->
                              </div>
                              <div class="menu-price">
                                <span>15</span>
                              </div>
                            </div>

                            <div class="menu-content-description">
                              <p>Mushroom and peas in a creamy tomato base.</p>
                            </div>
                          </div>
                        </div>

                        <div class="menu-item">
                          <div class="menu-content">
                            <div class="menu-content-heading">
                              <div class="menu-item-heading">
                                <h3>Daal Taka Tak</h3>
                              </div>
                              <div class="menu-content-options">
                                <img
                                  src="/images/smybols/vegan-symbol.svg"
                                  alt="Vegan Meal"
                                />
                                <img
                                  src="/images/smybols/gluten-free-symbol.svg"
                                  alt="Gluten Free"
                                />
                                <img
                                  src="/images/smybols/dairy-free-symbol.svg"
                                  alt="Dairy Free"
                                />
                              </div>
                              <div class="menu-price">
                                <span>13.5</span>
                              </div>
                            </div>

                            <div class="menu-content-description">
                              <p>
                                Also known as ‘Tarka Dal’, soft lentils in a
                                turmeric based curry.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div class="menu-item">
                          <div class="menu-content">
                            <div class="menu-content-heading">
                              <div class="menu-item-heading">
                                <h3>Channa Masala</h3>
                              </div>
                              <div class="menu-content-options">
                                <img
                                  src="/images/smybols/vegan-symbol.svg"
                                  alt="Vegan Meal"
                                />
                                <img
                                  src="/images/smybols/gluten-free-symbol.svg"
                                  alt="Gluten Free"
                                />
                                <img
                                  src="/images/smybols/dairy-free-symbol.svg"
                                  alt="Dairy Free"
                                />
                              </div>
                              <div class="menu-price">
                                <span>14</span>
                              </div>
                            </div>

                            <div class="menu-content-description">
                              <p>Chickpeas! In a spicy masala.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="menu-container">
                <div class="menu-heading-container">
                  <h2>Family Meals</h2>
                </div>
                <div class="menu-content-container">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="menu-container-1">
                        <div class="menu-item">
                          <div class="menu-content">
                            <div class="menu-content-heading">
                              <div class="menu-item-heading">
                                <h3>butter chicken bucket and rice</h3>
                              </div>
                              <div class="menu-content-options">
                                <!-- <img
                                  src="/images/smybols/vegan-symbol.svg"
                                  alt="Vegan Meal"
                                /> -->
                                <!-- <img
                                  src="/images/smybols/gluten-free-symbol.svg"
                                  alt="Gluten Free"
                                /> -->
                                <!-- <img
                                  src="/images/smybols/dairy-free-symbol.svg"
                                  alt="Dairy Free"
                                /> -->
                              </div>
                              <div class="menu-price">
                                <span>59</span>
                              </div>
                            </div>

                            <div class="menu-content-description">
                              <p>
                                <i>Suitable for 3 to 4 people</i>
                              </p>
                            </div>
                          </div>
                        </div>

                        <div class="menu-item">
                          <div class="menu-content">
                            <div class="menu-content-heading">
                              <div class="menu-item-heading">
                                <h3>Biriyanis for the family</h3>
                              </div>
                              <div class="menu-content-options">
                                <!-- <img
                                  src="/images/smybols/vegan-symbol.svg"
                                  alt="Vegan Meal"
                                /> -->
                                <!-- <img
                                  src="/images/smybols/gluten-free-symbol.svg"
                                  alt="Gluten Free"
                                /> -->
                                <!-- <img
                                  src="/images/smybols/dairy-free-symbol.svg"
                                  alt="Dairy Free"
                                /> -->
                              </div>
                              <div class="menu-price">
                                <span>65</span>
                              </div>
                            </div>

                            <div class="menu-content-description">
                              <p>
                                <i
                                  >Suitable for 4 to 5 people (Chicken, Lamb,
                                  Prawn)</i
                                >
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="menu-container-1 menu-container-2">
                        <div class="menu-item">
                          <div class="menu-content">
                            <div class="menu-content-heading">
                              <div class="menu-item-heading">
                                <h3>Chilli Dhaba Feast</h3>
                              </div>
                              <div class="menu-content-options">
                                <!-- <img
                                  src="/images/smybols/vegan-symbol.svg"
                                  alt="Vegan Meal"
                                /> -->
                                <!-- <img
                                  src="/images/smybols/gluten-free-symbol.svg"
                                  alt="Gluten Free"
                                /> -->
                                <!-- <img
                                  src="/images/smybols/dairy-free-symbol.svg"
                                  alt="Dairy Free"
                                /> -->
                              </div>
                              <div class="menu-price">
                                <span>49</span>
                              </div>
                            </div>

                            <div class="menu-content-description">
                              <p>
                                One portion onion bhaji, one butter chicken, one
                                lamb rogan josh, one aloo saag, three portions
                                rice, three naan, raita and papad. <br />
                                <i> Suitable for 3 to 4 people</i>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="menu-container">
                <div class="menu-heading-container">
                  <h2>Naan</h2>
                </div>
                <div class="menu-content-container">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="menu-container-1">
                        <div class="menu-item">
                          <div class="menu-content">
                            <div class="menu-content-heading">
                              <div class="menu-item-heading">
                                <h3>Naan Basket</h3>
                              </div>
                              <div class="menu-content-options">
                                <!-- <img
                                  src="/images/smybols/vegan-symbol.svg"
                                  alt="Vegan Meal"
                                /> -->
                                <!-- <img
                                  src="/images/smybols/gluten-free-symbol.svg"
                                  alt="Gluten Free"
                                /> -->
                                <!-- <img
                                  src="/images/smybols/dairy-free-symbol.svg"
                                  alt="Dairy Free"
                                /> -->
                              </div>
                              <div class="menu-price">
                                <span>20</span>
                              </div>
                            </div>

                            <div class="menu-content-description">
                              <p>
                                A mix of our classic favourites. (2x plain, 2x
                                garlic, 2x cheese)
                                <i>Suitable for 4 to 6 people.</i>
                              </p>
                            </div>
                          </div>
                        </div>

                        <div class="menu-item">
                          <div class="menu-content">
                            <div class="menu-content-heading">
                              <div class="menu-item-heading">
                                <h3>Plain</h3>
                              </div>
                              <div class="menu-content-options">
                                <!-- <img
                                  src="/images/smybols/vegan-symbol.svg"
                                  alt="Vegan Meal"
                                /> -->
                                <!-- <img
                                  src="/images/smybols/gluten-free-symbol.svg"
                                  alt="Gluten Free"
                                /> -->
                                <!-- <img
                                  src="/images/smybols/dairy-free-symbol.svg"
                                  alt="Dairy Free"
                                /> -->
                              </div>
                              <div class="menu-price">
                                <span>3</span>
                              </div>
                            </div>

                            <div class="menu-content-description">
                              <!-- <p>
                                Tender lamb pieces cooked in our secret marinade, 
                                cooked in the tandoor.
                                <i>5 per portion.</i>
                              </p> -->
                            </div>
                          </div>
                        </div>

                        <div class="menu-item">
                          <div class="menu-content">
                            <div class="menu-content-heading">
                              <div class="menu-item-heading">
                                <h3>Garlic</h3>
                              </div>
                              <div class="menu-content-options">
                                <!-- <img
                                  src="/images/smybols/vegan-symbol.svg"
                                  alt="Vegan Meal"
                                /> -->
                                <!-- <img
                                  src="/images/smybols/gluten-free-symbol.svg"
                                  alt="Gluten Free"
                                /> -->
                                <!-- <img
                                  src="/images/smybols/dairy-free-symbol.svg"
                                  alt="Dairy Free"
                                /> -->
                              </div>
                              <div class="menu-price">
                                <span>3.5</span>
                              </div>
                            </div>
                            <div class="menu-content-description">
                              <!-- <p>
                                Tender lamb pieces cooked in our secret marinade, 
                                cooked in the tandoor.
                                <i>5 per portion.</i>
                              </p> -->
                            </div>
                          </div>
                        </div>

                        <div class="menu-item">
                          <div class="menu-content">
                            <div class="menu-content-heading">
                              <div class="menu-item-heading">
                                <h3>Cheese</h3>
                              </div>
                              <div class="menu-content-options">
                                <!-- <img
                                  src="/images/smybols/vegan-symbol.svg"
                                  alt="Vegan Meal"
                                /> -->
                                <!-- <img
                                  src="/images/smybols/gluten-free-symbol.svg"
                                  alt="Gluten Free"
                                /> -->
                                <!-- <img
                                  src="/images/smybols/dairy-free-symbol.svg"
                                  alt="Dairy Free"
                                /> -->
                              </div>
                              <div class="menu-price">
                                <span>5</span>
                              </div>
                            </div>

                            <div class="menu-content-description">
                              <p>
                                <!-- Tender lamb pieces cooked in our secret marinade, 
                                cooked in the tandoor.
                                <i>5 per portion.</i> -->
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="menu-container-1 menu-container-2">
                        <div class="menu-item">
                          <div class="menu-content">
                            <div class="menu-content-heading">
                              <div class="menu-item-heading">
                                <h3>Chicken</h3>
                              </div>
                              <div class="menu-content-options">
                                <!-- <img
                                  src="/images/smybols/vegan-symbol.svg"
                                  alt="Vegan Meal"
                                /> -->
                                <!-- <img
                                  src="/images/smybols/gluten-free-symbol.svg"
                                  alt="Gluten Free"
                                /> -->
                                <!-- <img
                                  src="/images/smybols/dairy-free-symbol.svg"
                                  alt="Dairy Free"
                                /> -->
                              </div>
                              <div class="menu-price">
                                <span>5</span>
                              </div>
                            </div>

                            <div class="menu-content-description">
                              <p>Stuffed with chopped chicken tikka.</p>
                            </div>
                          </div>
                        </div>

                        <div class="menu-item">
                          <div class="menu-content">
                            <div class="menu-content-heading">
                              <div class="menu-item-heading">
                                <h3>Kashmiri</h3>
                              </div>
                              <div class="menu-content-options">
                                <!-- <img
                                  src="/images/smybols/vegan-symbol.svg"
                                  alt="Vegan Meal"
                                /> -->
                                <!-- <img
                                  src="/images/smybols/gluten-free-symbol.svg"
                                  alt="Gluten Free"
                                /> -->
                                <!-- <img
                                  src="/images/smybols/dairy-free-symbol.svg"
                                  alt="Dairy Free"
                                /> -->
                              </div>
                              <div class="menu-price">
                                <span>5</span>
                              </div>
                            </div>

                            <div class="menu-content-description">
                              <p>Stuffed with nuts and coconut.</p>
                            </div>
                          </div>
                        </div>

                        <div class="menu-item">
                          <div class="menu-content">
                            <div class="menu-content-heading">
                              <div class="menu-item-heading">
                                <h3>Chilli Cheese naan</h3>
                              </div>
                              <div class="menu-content-options">
                                <!-- <img
                                  src="/images/smybols/vegan-symbol.svg"
                                  alt="Vegan Meal"
                                /> -->
                                <!-- <img
                                  src="/images/smybols/gluten-free-symbol.svg"
                                  alt="Gluten Free"
                                /> -->
                                <!-- <img
                                  src="/images/smybols/dairy-free-symbol.svg"
                                  alt="Dairy Free"
                                /> -->
                              </div>
                              <div class="menu-price">
                                <span>6</span>
                              </div>
                            </div>

                            <div class="menu-content-description">
                              <!-- <p>
                                Tender lamb pieces cooked in our secret marinade, 
                                cooked in the tandoor.
                                <i>5 per portion.</i>
                              </p> -->
                            </div>
                          </div>
                        </div>

                        <div class="menu-item">
                          <div class="menu-content">
                            <div class="menu-content-heading">
                              <div class="menu-item-heading">
                                <h3>Tandoori Roti</h3>
                              </div>
                              <div class="menu-content-options">
                                <!-- <img
                                  src="/images/smybols/vegan-symbol.svg"
                                  alt="Vegan Meal"
                                /> -->
                                <!-- <img
                                  src="/images/smybols/gluten-free-symbol.svg"
                                  alt="Gluten Free"
                                /> -->
                                <!-- <img
                                  src="/images/smybols/dairy-free-symbol.svg"
                                  alt="Dairy Free"
                                /> -->
                              </div>
                              <div class="menu-price">
                                <span>3</span>
                              </div>
                            </div>

                            <div class="menu-content-description">
                              <p>
                                The healthier version of naan. Indian style
                                bread made from wholemeal flour.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="menu-container">
                <div class="menu-heading-container">
                  <h2>Rice</h2>
                </div>
                <div class="menu-content-container">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="menu-container-1">
                        <div class="menu-item">
                          <div class="menu-content">
                            <div class="menu-content-heading">
                              <div class="menu-item-heading">
                                <h3>Biryanis</h3>
                              </div>
                              <div class="menu-content-options">
                                <!-- <img
                                  src="/images/smybols/vegan-symbol.svg"
                                  alt="Vegan Meal"
                                /> -->
                                <!-- <img
                                  src="/images/smybols/gluten-free-symbol.svg"
                                  alt="Gluten Free"
                                /> -->
                                <!-- <img
                                  src="/images/smybols/dairy-free-symbol.svg"
                                  alt="Dairy Free"
                                /> -->
                              </div>
                              <div class="menu-price">
                                <span></span>
                              </div>
                            </div>
                            <div class="menu-content-description">
                              <p>
                                A whole meal by itself. Rice and curry cooked
                                together in herbs and spices.
                              </p>
                            </div>
                            <div class="menu-content-list-options">
                              <div class="menu-content-list-item">
                                <div class="food-type">Chicken</div>
                                <div class="food-price"><span>17</span></div>
                              </div>
                              <div class="menu-content-list-item">
                                <div class="food-type">Lamb</div>
                                <div class="food-price"><span>18</span></div>
                              </div>
                              <div class="menu-content-list-item">
                                <div class="food-type">Prawn</div>
                                <div class="food-price"><span>19</span></div>
                              </div>
                              <div class="menu-content-list-item">
                                <div class="food-type">Vegetarian</div>
                                <div class="food-price"><span>15</span></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="menu-container-1 menu-container-2">
                        <div class="menu-item">
                          <div class="menu-content">
                            <div class="menu-content-heading">
                              <div class="menu-item-heading">
                                <h3>Plain Rice</h3>
                              </div>
                              <div class="menu-content-options">
                                <!-- <img
                                  src="/images/smybols/vegan-symbol.svg"
                                  alt="Vegan Meal"
                                /> -->
                                <!-- <img
                                  src="/images/smybols/gluten-free-symbol.svg"
                                  alt="Gluten Free"
                                /> -->
                                <!-- <img
                                  src="/images/smybols/dairy-free-symbol.svg"
                                  alt="Dairy Free"
                                /> -->
                              </div>
                              <div class="menu-price">
                                <span>3.5</span>
                              </div>
                            </div>
                            <div class="menu-content-description">
                              <!-- <p>
                                Tender lamb pieces cooked in our secret marinade, 
                                cooked in the tandoor.
                                <i>5 per portion.</i>
                              </p> -->
                            </div>
                          </div>
                        </div>

                        <div class="menu-item">
                          <div class="menu-content">
                            <div class="menu-content-heading">
                              <div class="menu-item-heading">
                                <h3>Jeera Rice</h3>
                              </div>
                              <div class="menu-content-options">
                                <!-- <img
                                  src="/images/smybols/vegan-symbol.svg"
                                  alt="Vegan Meal"
                                /> -->
                                <!-- <img
                                  src="/images/smybols/gluten-free-symbol.svg"
                                  alt="Gluten Free"
                                /> -->
                                <!-- <img
                                  src="/images/smybols/dairy-free-symbol.svg"
                                  alt="Dairy Free"
                                /> -->
                              </div>
                              <div class="menu-price">
                                <span>5.5</span>
                              </div>
                            </div>
                            <div class="menu-content-description">
                              <!-- <p>
                                Tender lamb pieces cooked in our secret marinade, 
                                cooked in the tandoor.
                                <i>5 per portion.</i>
                              </p> -->
                            </div>
                          </div>
                        </div>

                        <div class="menu-item">
                          <div class="menu-content">
                            <div class="menu-content-heading">
                              <div class="menu-item-heading">
                                <h3>Peas Pilav</h3>
                              </div>
                              <div class="menu-content-options">
                                <!-- <img
                                  src="/images/smybols/vegan-symbol.svg"
                                  alt="Vegan Meal"
                                /> -->
                                <!-- <img
                                  src="/images/smybols/gluten-free-symbol.svg"
                                  alt="Gluten Free"
                                /> -->
                                <!-- <img
                                  src="/images/smybols/dairy-free-symbol.svg"
                                  alt="Dairy Free"
                                /> -->
                              </div>
                              <div class="menu-price">
                                <span>5.5</span>
                              </div>
                            </div>
                            <div class="menu-content-description">
                              <!-- <p>
                                Tender lamb pieces cooked in our secret marinade, 
                                cooked in the tandoor.
                                <i>5 per portion.</i>
                              </p> -->
                            </div>
                          </div>
                        </div>

                        <div class="menu-item">
                          <div class="menu-content">
                            <div class="menu-content-heading">
                              <div class="menu-item-heading">
                                <h3>Mushroom Pilav</h3>
                              </div>
                              <div class="menu-content-options">
                                <!-- <img
                                  src="/images/smybols/vegan-symbol.svg"
                                  alt="Vegan Meal"
                                /> -->
                                <!-- <img
                                  src="/images/smybols/gluten-free-symbol.svg"
                                  alt="Gluten Free"
                                /> -->
                                <!-- <img
                                  src="/images/smybols/dairy-free-symbol.svg"
                                  alt="Dairy Free"
                                /> -->
                              </div>
                              <div class="menu-price">
                                <span>8</span>
                              </div>
                            </div>
                            <div class="menu-content-description">
                              <!-- <p>
                                Tender lamb pieces cooked in our secret marinade, 
                                cooked in the tandoor.
                                <i>5 per portion.</i>
                              </p> -->
                            </div>
                          </div>
                        </div>

                        <div class="menu-item">
                          <div class="menu-content">
                            <div class="menu-content-heading">
                              <div class="menu-item-heading">
                                <h3>Chicken Pilav</h3>
                              </div>
                              <div class="menu-content-options">
                                <!-- <img
                                  src="/images/smybols/vegan-symbol.svg"
                                  alt="Vegan Meal"
                                /> -->
                                <!-- <img
                                  src="/images/smybols/gluten-free-symbol.svg"
                                  alt="Gluten Free"
                                /> -->
                                <!-- <img
                                  src="/images/smybols/dairy-free-symbol.svg"
                                  alt="Dairy Free"
                                /> -->
                              </div>
                              <div class="menu-price">
                                <span>10</span>
                              </div>
                            </div>
                            <div class="menu-content-description">
                              <!-- <p>
                                Tender lamb pieces cooked in our secret marinade, 
                                cooked in the tandoor.
                                <i>5 per portion.</i>
                              </p> -->
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="menu-container">
                <div class="menu-heading-container">
                  <h2>Extras</h2>
                </div>
                <div class="menu-content-container">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="menu-container-1">
                        <div class="menu-item">
                          <div class="menu-content">
                            <div class="menu-content-heading">
                              <div class="menu-item-heading">
                                <h3>Raita</h3>
                              </div>
                              <div class="menu-content-options">
                                <!-- <img
                                  src="/images/smybols/vegan-symbol.svg"
                                  alt="Vegan Meal"
                                /> -->
                                <!-- <img
                                  src="/images/smybols/gluten-free-symbol.svg"
                                  alt="Gluten Free"
                                /> -->
                                <!-- <img
                                  src="/images/smybols/dairy-free-symbol.svg"
                                  alt="Dairy Free"
                                /> -->
                              </div>
                              <div class="menu-price">
                                <span>3.5</span>
                              </div>
                            </div>

                            <div class="menu-content-description">
                              <!-- <p>
                                Tender lamb pieces cooked in our secret marinade, 
                                cooked in the tandoor.
                                <i>5 per portion.</i>
                              </p> -->
                            </div>
                          </div>
                        </div>

                        <div class="menu-item">
                          <div class="menu-content">
                            <div class="menu-content-heading">
                              <div class="menu-item-heading">
                                <h3>Mago Chutney</h3>
                              </div>
                              <div class="menu-content-options">
                                <!-- <img
                                  src="/images/smybols/vegan-symbol.svg"
                                  alt="Vegan Meal"
                                /> -->
                                <!-- <img
                                  src="/images/smybols/gluten-free-symbol.svg"
                                  alt="Gluten Free"
                                /> -->
                                <!-- <img
                                  src="/images/smybols/dairy-free-symbol.svg"
                                  alt="Dairy Free"
                                /> -->
                              </div>
                              <div class="menu-price">
                                <span>3.5</span>
                              </div>
                            </div>

                            <div class="menu-content-description">
                              <!-- <p>
                                Tender lamb pieces cooked in our secret marinade, 
                                cooked in the tandoor.
                                <i>5 per portion.</i>
                              </p> -->
                            </div>
                          </div>
                        </div>

                        <div class="menu-item">
                          <div class="menu-content">
                            <div class="menu-content-heading">
                              <div class="menu-item-heading">
                                <h3>Vegetable Pickle</h3>
                              </div>
                              <div class="menu-content-options">
                                <!-- <img
                                  src="/images/smybols/vegan-symbol.svg"
                                  alt="Vegan Meal"
                                /> -->
                                <!-- <img
                                  src="/images/smybols/gluten-free-symbol.svg"
                                  alt="Gluten Free"
                                /> -->
                                <!-- <img
                                  src="/images/smybols/dairy-free-symbol.svg"
                                  alt="Dairy Free"
                                /> -->
                              </div>
                              <div class="menu-price">
                                <span>3.5</span>
                              </div>
                            </div>

                            <div class="menu-content-description">
                              <p>
                                <!-- Tender lamb pieces cooked in our secret marinade, 
                                cooked in the tandoor.
                                <i>5 per portion.</i> -->
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="menu-container-1 menu-container-2">
                        <div class="menu-item">
                          <div class="menu-content">
                            <div class="menu-content-heading">
                              <div class="menu-item-heading">
                                <h3>Papad</h3>
                              </div>
                              <div class="menu-content-options">
                                <!-- <img
                                  src="/images/smybols/vegan-symbol.svg"
                                  alt="Vegan Meal"
                                /> -->
                                <!-- <img
                                  src="/images/smybols/gluten-free-symbol.svg"
                                  alt="Gluten Free"
                                /> -->
                                <!-- <img
                                  src="/images/smybols/dairy-free-symbol.svg"
                                  alt="Dairy Free"
                                /> -->
                              </div>
                              <div class="menu-price">
                                <span></span>
                              </div>
                            </div>
                            <div class="menu-content-description">
                              <!-- <p>
                                Tender lamb pieces cooked in our secret marinade, 
                                cooked in the tandoor.
                                <i>5 per portion.</i>
                              </p> -->
                            </div>
                            <div class="menu-content-list-options">
                              <div class="menu-content-list-item">
                                <div class="food-type" style="font-weight: 900">
                                  <b>2 PIECES</b>
                                </div>
                                <div class="food-price"><span>1</span></div>
                              </div>
                              <div class="menu-content-list-item">
                                <div class="food-type" style="font-weight: 900">
                                  <b>12 PIECES</b>
                                </div>
                                <div class="food-price"><span>5</span></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="menu-item">
                          <div class="menu-content">
                            <div class="menu-content-heading">
                              <div class="menu-item-heading">
                                <h3>Mango Lassi</h3>
                              </div>
                              <div class="menu-content-options">
                                <img
                                  src="/images/smybols/gluten-free-symbol.svg"
                                  alt="Gluten Free"
                                />
                              </div>
                              <div class="menu-price">
                                <span>5.5</span>
                              </div>
                            </div>

                            <div class="menu-content-description">
                              <p>
                                Homemade yogurt and mango drink. A must try!
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

            <div class="row" style="padding-bottom:100px;">
              <div class="col-md-4 col-sm-12">
                <div class="menu-footer-buttons">
                  <div class="footer-order-container">
                    <a href="https://orders.chillidhaba.nz">
                    <img src="/images/order-button-2.svg" alt="Order">
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-12">
                <div class="menu-footer-buttons">
                  <div class="footer-cart-container">
                    <a href=".">
                      <img src="/images/chilli-cart.svg" alt="Home">
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-12">
                <div class="menu-footer-buttons">
                  <div class="footer-contact-container" @click="showContactModal">
                      <img src="/images/contact-button-2.svg" alt="Contact">
                </div>
                </div>
              </div>
            </div>

          </div>
      </div>
    </div>

    <!--FOOTER-->
    <div class="footer-container container">
      <div class="row">
        <div class="col-md-2">
        </div>
        <div class="col-md-2">
          <h3>Address</h3>
          <p>
            146 Victoria Rd,
            <br />St Kilda, Dunedin
          </p>
        </div>

        <div class="col-md-2">
          <h3>Tuesday - Sunday</h3>
          <p>11:30am - 2:30pm<br />5:00pm - 8:30pm</p>
        </div>

        <div class="col-md-2">
          <h3>Find us at</h3>
          <a :href="'tel:' + contactPhone" style="margin-bottom: 0"
            >PH: {{ contactPhone }}</a
          >
          <div class="social">
            <a href="https://www.facebook.com/chillidhaba">
              <img src="/images/facebook_logo.svg" alt="facebook logo" />
              @ChilliDhaba
            </a>
          </div>
        </div>

        <div class="col-md-2">
          <a :href="menuUrl"> <p class="menu-button">Download Menu</p></a>
        </div>
      </div>
    </div>
    <div class="footer-container-mobile container">
      <div class="row">
        <div class="col-6 details">
          <h3>Tuesday - Sunday</h3>
          <p>11:30am - 2:30pm<br />5:00pm - 8:30pm</p>
        </div>
        <div class="col-6 details">
          <h3>Address</h3>
          <p>
            146 Victoria Rd,
            <br />St Kilda, Dunedin
          </p>
        </div>
        <div class="col-6 details">
          <h3>Find us at</h3>
          <a :href="'tel:' + contactPhone" style="margin-bottom: 0"
            >PH: {{ contactPhone }}</a
          >
          <div class="social">
            <img src="/images/facebook_logo.svg" alt="facebook logo" />
            <a href="https://www.facebook.com">@ChilliDhaba</a>
          </div>
        </div>
        <div class="col-6 details">
          <a :href="menuUrl"> <p class="menu-button">Download Menu</p></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Modal from "../components/modal.vue";
import { mapState } from "vuex";
import { processMeta } from "../utils/meta";
import axios from "axios";
import swal from "sweetalert2";
import FormErrors from "../components/FormErrors.vue";

export default {
  components: { Modal, FormErrors },

  data: () => ({
    pageName: "Home",
    isContactModalVisible: false,
    errors: {},
    input: {},
    thinking: false,
    recap: null,
    recaptchaResponse: "",
    // data currently hard-coded kept here so that there is no risk of it being changed
    // leaving the metadata in an invalid state. Metadata also reads from these properties:
    menuUrl: "/menu/chilli-dhaba-menu.pdf",
    pageLocation: "https://chillidhaba.nz",
    contactPhone: "03 456 2615",
    image: "/images/chilli_dhaba_logo.svg",
  }),

  asyncData(store) {
    return store.dispatch('loadCollectionPages', 'menu');
  },

  metaInfo() {
    return processMeta({
      title: "Chilli Dhaba",
      description:
        "Your new favourite Indian takeaway is in St Kilda, Dunedin. Authentic Indian dishes for pick up or delivery. Phone or order online now, and spice up your life!",
      schema: {
        "@type": "Restaurant",
        "@id": "https://st-kilda.chillidhaba.nz",
        name: "Chilli Dhaba",
        address: {
          "@type": "PostalAddress",
          streetAddress: "146 Victoria Rd, St Kilda",
          addressLocality: "Dunedin",
          addressRegion: "Otago",
          postalCode: "9012",
          addressCountry: "NZ",
        },
        servesCuisine: "Indian",
        menu: this.pageLocation + this.menuUrl,
        url: this.pageLocation,
        image: this.pageLocation + this.image,
        priceRange: "$",
        telephone: this.contactPhone,
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "11:30",
            closes: "14:30",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "17:00",
            closes: "20:30",
          },
        ],
        geo: {
          "@type": "GeoCoordinates",
          latitude: -45.907712,
          longitude: 170.498808,
        },
      },
    });
  },
  mounted() {
    this.recap = window.recaptchaKey;
    this.clearErrors();
    this.setInput();
    if (window.hasRecaptcha) {
      setTimeout(this.setupRecaptcha, 1);
    } else {
      window.recaptchaCallback = () => {
        window.hasRecaptcha = true;
        this.setupRecaptcha();
      };
    }
  },
  computed: {
    ...mapState({
      homepage: 'pageData'
    })
  },

  methods: {

    scrollMeTo(refName) {
      var element = document.getElementById(refName);
      element.scrollIntoView({behavior: "smooth"},1003)
    },
    showContactModal() {
      this.isContactModalVisible = true;
    },
    closeContactModal() {
      this.isContactModalVisible = false;
    },
    setupRecaptcha() {
      grecaptcha.render("recaptcha-container", {
        siteKey: this.recap,
        callback: (r) => this.recaptchaCallback(r),
      });
    },
    recaptchaCallback(result) {
      this.recaptchaResponse = result;
    },
    setInput() {
      this.$refs.form.reset();
      this.input = {
        name: "",
        email: "",
        phone: "",
        enquiry: "",
        "g-recaptcha-response": "",
      };
    },
    clearErrors() {
      this.errors = {};
    },
    sendPayload() {
      this.input["g-recaptcha-response"] = this.recaptchaResponse;
      return axios
        .post("/contact", this.input)
        .then((response) => {
          this.clearErrors();

          swal.fire({
            type: "success",
            title: "Thanks!",
            text: "Thanks for your enquiry, we will be in touch shortly.",
          });
          grecaptcha.reset();
          this.setInput();
        })
        .catch((error) => {
          let response = error.response;

          this.clearErrors();

          if (response.status === 422) {
            this.errors = response.data.errors;

            return swal.fire({
              type: "warning",
              title: "Whoops!",
              text:
                "There was something wrong with your input, please check your fields",
            });
          }

          return swal.fire({
            type: "error",
            title: "Oh No!",
            text: "Something went wrong, please try again.",
          });
        });
    },
  },
  watch: {
    $route() {
      this.clearErrors();
      this.setInput();
    },
  },
};
</script>
