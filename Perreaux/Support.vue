<template>
  <div class="page-support" id="page-wrapper">
    <div class="container support-container top-padding" id="support-container">
      <div class="row">
        <div class="col-sm-12 col-md-6 support-info">
          <div class="support-heading">
            <h1>Support</h1>
          </div>
          <div class="support-details" v-html="supportPage.blurb">
          </div>
          <div class="support-button">
            <router-link :to="'/contact'">
              <button>Contact</button>
            </router-link>
          </div>
        </div>
        <div class="col-sm-12 col-md-6 support-image-container">
          <img
            src="/images/support-page/support-page-shape-graphic-01.svg"
            class="support-shape-1"
            alt="Shape 1"
          />
          <img
            src="/images/support-page/support-page-shape-graphic-02.svg"
            class="support-shape-2"
            alt="Shape 2"
          />
          <img
            src="/images/support-page/support-page-header-amp.png"
            class="support-amp-internals"
            alt="Internals Amp"
          />
        </div>
      </div>
    </div>
    <side-nav
      class="sideNavDisplay"
      :navItems="{
        '#support-container': 'Support',
        '#drivers-container': 'Drivers',
        '#service-request': 'Service Request',
        '#product-archive': 'Product Archive',
        '#warranty-registration': 'Warranty Registration',
        '#product-range': 'Product Range',
      }"
    ></side-nav>

    <div
      class="container support-download-container top-padding"
      id="drivers-container"
    >
      <div class="row">
        <div class="col-md-6">
          <div class="drivers-container">
            <h2>Drivers</h2>
            <div class="document-container">
              <a
                href="/pdfs/support-pdfs/drivers/perreaux-driver-installation-instructions.pdf"
              >
                <div class="item">
                  <div class="item-details">
                    <span>USB Audio Driver Installation</span>
                    <br />
                    <p>
                      Please follow these instructions to download and install
                      the Perreaux Audiant<br />
                      USB Audio drivers for Windows 7, 8 &amp; 10.
                    </p>
                  </div>
                  <div class="item-image">
                    <img
                      src="/images/support-page/pdf-icon.svg"
                      alt="Download PDF"
                      width="50px"
                      height="auto"
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div class="audiant-manuals-container">
            <h2>
              Audiant Manuals <br />
              &amp; Brochures
            </h2>
            <div class="document-container">
              <a
                href="/pdfs/support-pdfs/audient-manuals/perreaux_brochure_audiant_80i1.pdf"
              >
                <div class="item">
                  <div class="item-details">
                    <div class="item-title">Brochure for Audiant 80i</div>
                    <p>2015 PDF 933 KB</p>
                  </div>
                  <div class="item-image">
                    <img
                      src="/images/support-page/pdf-icon.svg"
                      alt="Download PDF"
                      width="45px"
                      height="auto"
                    />
                  </div>
                </div>
              </a>

              <a
                href="/public/pdfs/support-pdfs/audient-manuals/perreaux_manual_audiant_80i1.pdf"
              >
                <div class="item">
                  <div class="item-details">
                    <div class="item-title">Brochure for Audiant 80i (alt)</div>
                    <p>2015 PDF 933 KB</p>
                  </div>
                  <div class="item-image">
                    <img
                      src="/images/support-page/pdf-icon.svg"
                      alt="Download PDF"
                      width="45px"
                      height="auto"
                    />
                  </div>
                </div>
              </a>

              <a
                href="/pdfs/support-pdfs/audient-manuals/perreaux_brochure_audiant_dp32_usb_dac_preamplifier1.pdf"
              >
                <div class="item">
                  <div class="item-details">
                    <div class="item-title">Brochure for Audiant DP32</div>
                    <p>2015 PDF 265 KB</p>
                  </div>
                  <div class="item-image">
                    <img
                      src="/images/support-page/pdf-icon.svg"
                      alt="Download PDF"
                      width="45px"
                      height="auto"
                    />
                  </div>
                </div>
              </a>

              <a
                href="/pdfs/support-pdfs/audient-manuals/perreaux_manual_audiant_dp32_usb_dac_preamplifier1.pdf"
              >
                <div class="item">
                  <div class="item-details">
                    <div class="item-title">Manual for Audiant DP32</div>
                    <p>2015 PDF 712 KB</p>
                  </div>
                  <div class="item-image">
                    <img
                      src="/images/support-page/pdf-icon.svg"
                      alt="Download PDF"
                      width="45px"
                      height="auto"
                    />
                  </div>
                </div>
              </a>

              <a
                href="/pdfs/support-pdfs/audient-manuals/perreaux_brochure_audiant_100p_stereo_power_amplifier1.pdf"
              >
                <div class="item">
                  <div class="item-details">
                    <div class="item-title">Brochure for Audiant 100p</div>
                    <p>2015 PDF 218 KB</p>
                  </div>
                  <div class="item-image">
                    <img
                      src="/images/support-page/pdf-icon.svg"
                      alt="Download PDF"
                      width="45px"
                      height="auto"
                    />
                  </div>
                </div>
              </a>

              <a
                href="/pdfs/support-pdfs/audient-manuals/perreaux_manual_audiant_100p_stereo_power_amplifier1.pdf"
              >
                <div class="item">
                  <div class="item-details">
                    <div class="item-title">Manual for Audiant 100p</div>
                    <p>2015 PDF 511 KB</p>
                  </div>
                  <div class="item-image">
                    <img
                      src="/images/support-page/pdf-icon.svg"
                      alt="Download PDF"
                      width="45px"
                      height="auto"
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="eloquence-manuals-container">
            <h2>
              Éloquence Manuals<br />
              &amp; Brochures
            </h2>

            <div class="document-container">
              <a
                href="/pdfs/support-pdfs/eloquence-manuals/perreaux_brochure_eloquence_150i1.pdf"
              >
                <div class="item">
                  <div class="item-details">
                    <div class="item-title">Brochure for éloquence 150i</div>
                    <p>2015 PDF 1953 KB</p>
                  </div>
                  <div class="item-image">
                    <img
                      src="/images/support-page/pdf-icon.svg"
                      alt="Download PDF"
                      width="45px"
                      height="auto"
                    />
                  </div>
                </div>
              </a>

              <a
                href="/pdfs/support-pdfs/eloquence-manuals/perreaux_brochure_eloquence_250i1.pdf"
              >
                <div class="item">
                  <div class="item-details">
                    <div class="item-title">Brochure for éloquence 250i</div>
                    <p>2015 PDF 1950 KB</p>
                  </div>
                  <div class="item-image">
                    <img
                      src="/images/support-page/pdf-icon.svg"
                      alt="Download PDF"
                      width="45px"
                      height="auto"
                    />
                  </div>
                </div>
              </a>

              <a
                href="/pdfs/support-pdfs/eloquence-manuals/perreaux_manual_eloquence_150i1.pdf"
              >
                <div class="item">
                  <div class="item-details">
                    <div class="item-title">Manual for éloquence 150i</div>
                    <p>2015 PDF 2600 KB</p>
                  </div>
                  <div class="item-image">
                    <img
                      src="/images/support-page/pdf-icon.svg"
                      alt="Download PDF"
                      width="45px"
                      height="auto"
                    />
                  </div>
                </div>
              </a>

              <a
                href="/pdfs/support-pdfs/eloquence-manuals/perreaux_manual_eloquence_250i1.pdf"
              >
                <div class="item">
                  <div class="item-details">
                    <div class="item-title">Manual for éloquence 250i</div>
                    <p>2015 PDF 3327 KB</p>
                  </div>
                  <div class="item-image">
                    <img
                      src="/images/support-page/pdf-icon.svg"
                      alt="Download PDF"
                      width="45px"
                      height="auto"
                    />
                  </div>
                </div>
              </a>

              <a
                href="/pdfs/support-pdfs/eloquence-manuals/perreaux_manual_eloquence_module-phono1.pdf"
              >
                <div class="item">
                  <div class="item-details">
                    <div class="item-title">
                      Manual for éloquence Module - Phono
                    </div>
                    <p>2015 PDF 917 KB</p>
                  </div>
                  <div class="item-image">
                    <img
                      src="/images/support-page/pdf-icon.svg"
                      alt="Download PDF"
                      width="45px"
                      height="auto"
                    />
                  </div>
                </div>
              </a>

              <a
                href="/pdfs/support-pdfs/eloquence-manuals/perreaux_manual_eloquence_module-dac1.pdf"
              >
                <div class="item">
                  <div class="item-details">
                    <div class="item-title">
                      Manual for éloquence Module - DAC
                    </div>
                    <p>2015 PDF 1468 KB</p>
                  </div>
                  <div class="item-image">
                    <img
                      src="/images/support-page/pdf-icon.svg"
                      alt="Download PDF"
                      width="45px"
                      height="auto"
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div class="audiant-manuals-container">
            <h2>
              Prisma Manuals <br />
              &amp; Brochures
            </h2>

            <div class="document-container">
              <a
                href="/pdfs/support-pdfs/prisma-manuals/perreaux_brochure_prisma_350.pdf"
              >
                <div class="item">
                  <div class="item-details">
                    <div class="item-title">Brochure for Prisma 350</div>
                    <p>2015 PDF 324 KB</p>
                  </div>
                  <div class="item-image">
                    <img
                      src="/images/support-page/pdf-icon.svg"
                      alt="Download PDF"
                      width="45px"
                      height="auto"
                    />
                  </div>
                </div>
              </a>

              <a
                href="/pdfs/support-pdfs/prisma-manuals/perreaux_manual_prisma_3503.pdf"
              >
                <div class="item">
                  <div class="item-details">
                    <div class="item-title">Manual for Prisma 350</div>
                    <p>2015 PDF 714 KB</p>
                  </div>
                  <div class="item-image">
                    <img
                      src="/images/support-page/pdf-icon.svg"
                      alt="Download PDF"
                      width="45px"
                      height="auto"
                    />
                  </div>
                </div>
              </a>

              <a
                href="/pdfs/support-pdfs/prisma-manuals/perreaux_brochure_prisma_sm6-mkii1.pdf"
              >
                <div class="item">
                  <div class="item-details">
                    <div class="item-title">Brochure for Prisma SM6-MkII</div>
                    <p>2015 PDF 386 KB</p>
                  </div>
                  <div class="item-image">
                    <img
                      src="/images/support-page/pdf-icon.svg"
                      alt="Download PDF"
                      width="45px"
                      height="auto"
                    />
                  </div>
                </div>
              </a>

              <a
                href="/pdfs/support-pdfs/prisma-manuals/perreaux_manual_prisma_sm6-mkii1.pdf"
              >
                <div class="item">
                  <div class="item-details">
                    <div class="item-title">Manual for Prisma SM6-MkII</div>
                    <p>2015 PDF 668 KB</p>
                  </div>
                  <div class="item-image">
                    <img
                      src="/images/support-page/pdf-icon.svg"
                      alt="Download PDF"
                      width="45px"
                      height="auto"
                    />
                  </div>
                </div>
              </a>

              <a
                href="/pdfs/support-pdfs/prisma-manuals/perreaux_manual_prisma_7501.pdf"
              >
                <div class="item">
                  <div class="item-details">
                    <div class="item-title">Manual for Prisma 750</div>
                    <p>2015 PDF 659 KB</p>
                  </div>
                  <div class="item-image">
                    <img
                      src="/images/support-page/pdf-icon.svg"
                      alt="Download PDF"
                      width="45px"
                      height="auto"
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- SERVICE REQUEST -->
    <div
      class="container warranty-container top-padding"
      style="margin-bottom: 100px"
      id="service-request"
    >
      <div class="row">
        <div class="col-md-4">
          <div class="warranty-heading">
            <h2>Service Request</h2>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <form
            method="post"
            action="/support"
            @submit.prevent="postStream('')"
          >
            <div class="form-row">
              <div class="form-group col-md-6 form-offset">
                <div class="heading-label">
                  <h3>About Your Product</h3>
                </div>
                <label
                  for="modelNumber"
                  class="form-control-label"
                  aria-label="Model Number"
                ></label>
                <input
                  type="tel"
                  required="true"
                  class="form-control"
                  id="modelNumberService"
                  placeholder="Model Number *"
                  v-model="inputServiceRequest['modelNumber']"
                />

                <label
                  for="serialNumber"
                  class="form-control-label"
                  aria-label="Serial Number"
                ></label>
                <input
                  type="text"
                  required="true"
                  class="form-control"
                  id="serialNumberService"
                  placeholder="Serial Number *"
                  v-model="inputServiceRequest['serialNumber']"
                />

                <label
                  for="unitPurchase"
                  class="form-control-label"
                  aria-label="Unit Purchase"
                ></label>
                <input
                  type="text"
                  required="true"
                  class="form-control"
                  id="unitPurchaseService"
                  placeholder="Unit Purchased From *"
                  v-model="inputServiceRequest['unitPurchase']"
                />

                <label
                  for="date"
                  class="form-control-label"
                  aria-label="Date Purchased"
                ></label>
                <input
                  type="date"
                  class="form-control"
                  id="dealerService"
                  value="${new Date()}"
                  placeholder="Date Purchased * --/--/--"
                  v-model="inputServiceRequest['date']"
                />

                <label
                  for="invoiceNumber"
                  class="form-control-label"
                  aria-label="Invoice Number"
                ></label>
                <input
                  type="text"
                  required="true"
                  class="form-control"
                  id="invoiceNumberService"
                  placeholder="Sales Invoice Number *"
                  v-model="inputServiceRequest['invoiceNumber']"
                />

                <!-- ENTER TEXT HERE -->
                <div class="heading-label-special">
                  <h2>
                    Description of Fault <br />
                    or Technical Enquiry
                  </h2>
                </div>
                <label
                  for="enquiry"
                  class="form-control-label"
                  aria-label="Enquiry"
                ></label>
                <textarea
                  required="true"
                  class="form-control"
                  rows="13"
                  id="enquiryService"
                  v-model="inputServiceRequest['enquiry']"
                ></textarea>
                <div class="extra-info-text">
                  <p>Give us as much information as possible</p>
                </div>
              </div>
              <div class="form-group form-offset-2 col-md-6">
                <div class="heading-label">
                  <h3>About You</h3>
                </div>
                <label
                  for="name"
                  class="form-control-label"
                  aria-label="Name"
                ></label>
                <input
                  type="text"
                  class="form-control"
                  id="nameService"
                  placeholder="Name *"
                  v-model="inputServiceRequest['name']"
                />

                <label
                  for="address"
                  class="form-control-label"
                  aria-label="Street Address"
                ></label>
                <input
                  type="text"
                  class="form-control"
                  id="addressService"
                  placeholder="Street Address"
                  v-model="inputServiceRequest['address']"
                />

                <label
                  for="city"
                  class="form-control-label"
                  aria-label="City"
                ></label>
                <input
                  type="text"
                  class="form-control"
                  id="cityService"
                  placeholder="City"
                  v-model="inputServiceRequest['city']"
                />

                <label
                  for="province"
                  class="form-control-label"
                  aria-label="Province"
                ></label>
                <input
                  type="text"
                  class="form-control"
                  id="provinceService"
                  placeholder="State/Province"
                  v-model="inputServiceRequest['province']"
                />

                <label
                  for="postCode"
                  class="form-control-label"
                  aria-label="Post Code"
                ></label>
                <input
                  type="text"
                  class="form-control"
                  id="postCodeService"
                  placeholder="Zip/Postal Code"
                  v-model="inputServiceRequest['postCode']"
                />

                <label
                  for="country"
                  class="form-control-label"
                  aria-label="Country"
                ></label>
                <input
                  type="text"
                  class="form-control"
                  id="countryService"
                  placeholder="Country"
                  v-model="inputServiceRequest['country']"
                />
                <label
                  for="homePhone"
                  class="form-control-label"
                  aria-label="Home Phone"
                ></label>
                <input
                  type="text"
                  class="form-control"
                  id="homePhoneService"
                  placeholder="Home Phone"
                  v-model="inputServiceRequest['homePhone']"
                />

                <label
                  for="email"
                  class="form-control-label"
                  aria-label="Email"
                ></label>
                <input
                  type="text"
                  class="form-control"
                  id="emailService"
                  placeholder="Email *"
                  v-model="inputServiceRequest['email']"
                />
                <button type="submit" class="form-button form-button-position">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!--SUPPORT BANNER-->

    <div class="container-fluid home-banner-container top-padding">
      <div class="row">
        <div class="col-md-10 col-lg-9 no-padding">
          <div class="banner-container">
            <img
              src="/images/support-page/perreaux-macro-internal-image.png"
              alt="Interior Image"
            />
          </div>
        </div>
      </div>
    </div>

    <!--PRODUCT ARCHIVE-->

    <div class="container archive-container top-padding" id="product-archive">
      <div class="row">
        <div class="col-md-3">
          <div class="archive-heading">
            <h2>Product Archive</h2>
          </div>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-md-3">
          <div
            class="archive-nav-item archive-gold"
            @click="toggleActive('manuals')"
            :class="{ 'archive-nav-gold': this.activeType === 'manuals' }"
          >
            User Manuals
          </div>
        </div>
        <div class="col-md-3">
          <div
            class="archive-nav-item archive-red"
            @click="toggleActive('specifications')"
            :class="{ 'archive-nav-red': this.activeType === 'specifications' }"
          >
            Specification Sheets
          </div>
        </div>
        <div class="col-md-3">
          <div
            class="archive-nav-item archive-green"
            @click="toggleActive('brochures')"
            :class="{ 'archive-nav-green': this.activeType === 'brochures' }"
          >
            Product Brochures
          </div>
        </div>
      </div>
      <div class="row no-gutters">
        <div
          class="col-md-12 archive-col-colour"
          :class="{
            'archive-nav-gold': this.activeType === 'manuals',
            'archive-nav-red': this.activeType === 'specifications',
            'archive-nav-green': this.activeType === 'brochures',
          }"
        >
          <div class="archive-filter-container">
            <label for="cars">SORT BY:</label>
            <select name="cars" id="cars" v-model="selectedFilter">
              <option value="alpha">Alpha</option>
              <option value="date">Date</option>
              <option value="size">File Size</option>
            </select>
          </div>
        </div>
      </div>

      <div class="row no-gutters">
        <div
          class="col-md-12 archive-col-colour"
          :class="{
            'archive-nav-gold': this.activeType == 'specifications',
            'archive-nav-red': this.activeType == 'specifications',
            'archive-nav-green': this.activeType == 'brochures',
          }"
        >
          <div class="archive-content-container">
            <div
              class="product-archive-item"
              v-for="(pdfs, index) in sortedSupport"
              :key="pdfs + index"
            >
              <a
                style="min-width: 100%"
                :href="pdfs.url"
                v-if="pdfs.category === activeType"
              >
                <div
                  class="row h-100 align-items-center product-archive-item-row"
                  style="border-bottom: 1px solid #a0a6ad"
                >
                  <div class="col-6 col-md-6">
                    <div class="product-archive-item-title">
                      {{ pdfs.title }}
                    </div>
                  </div>
                  <div
                    class="col-3 col-md-3"
                    style="
                      border-left: 1px solid #a0a6ad;
                      border-right: 1px solid #a0a6ad;
                    "
                  >
                    <div class="product-archive-item-date">
                      {{ pdfs.date }}
                    </div>
                  </div>
                  <div class="col-3 col-md-3">
                    <div class="product-archive-item-file-size">
                      {{ pdfs.fileSize }}
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="container warranty-container top-padding"
      style="margin-bottom: 100px"
      id="warranty-registration"
    >
      <div class="row">
        <div class="col-md-4">
          <div class="warranty-heading">
            <h2>Warranty Registration</h2>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <form
            method="post"
            action="/support"
            @submit.prevent="postStream('inputWarrantyRegistration')"
          >
            <div class="form-row">
              <div class="form-group form-offset col-md-6">
                <div class="heading-label">
                  <h3>Customer Details</h3>
                </div>
                <label
                  for="name"
                  class="form-control-label"
                  aria-label="Full Name"
                ></label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Full Name *"
                  v-model="inputWarrantyRegistration['name']"
                />

                <label
                  for="phone"
                  class="form-control-label"
                  aria-label="Phone"
                ></label>
                <input
                  type="tel"
                  class="form-control"
                  id="phone"
                  placeholder="Phone *"
                  v-model="inputWarrantyRegistration['phone']"
                />

                <label
                  for="email"
                  class="form-control-label"
                  aria-label="Email"
                ></label>
                <input
                  type="email"
                  required="true"
                  class="form-control"
                  id="email"
                  placeholder="Email *"
                  v-model="inputWarrantyRegistration['email']"
                />

                <label
                  for="address"
                  class="form-control-label"
                  aria-label="Street Address"
                ></label>
                <input
                  type="text"
                  class="form-control"
                  id="address"
                  placeholder="Street Address *"
                  v-model="inputWarrantyRegistration['address']"
                />

                <label
                  for="city"
                  class="form-control-label"
                  aria-label="City"
                ></label>
                <input
                  type="text"
                  class="form-control"
                  id="city"
                  placeholder="City *"
                  v-model="inputWarrantyRegistration['city']"
                />

                <label
                  for="postCode"
                  class="form-control-label"
                  aria-label="Post Code"
                ></label>
                <input
                  type="text"
                  class="form-control"
                  id="postCode"
                  placeholder="Zip/Postal Code *"
                  v-model="inputWarrantyRegistration['postCode']"
                />
                <label
                  for="province"
                  class="form-control-label"
                  aria-label="Province"
                ></label>
                <input
                  type="text"
                  class="form-control"
                  id="province"
                  placeholder="State/Province *"
                  v-model="inputWarrantyRegistration['province']"
                />

                <label
                  for="country"
                  class="form-control-label"
                  aria-label="Country"
                ></label>
                <input
                  type="text"
                  class="form-control"
                  id="country"
                  placeholder="Country *"
                  v-model="inputWarrantyRegistration['country']"
                />
              </div>
              <div class="form-group col-md-6 form-offset-2">
                <div class="heading-label">
                  <h3>Product Information</h3>
                </div>
                <label
                  for="modelNumber"
                  class="form-control-label"
                  aria-label="Model Number"
                ></label>
                <input
                  type="tel"
                  required="true"
                  class="form-control"
                  id="modelNumber"
                  placeholder="Model Number *"
                  v-model="inputWarrantyRegistration['modelNumber']"
                />

                <label
                  for="serialNumber"
                  class="form-control-label"
                  aria-label="Serial Number"
                ></label>
                <input
                  type="text"
                  required="true"
                  class="form-control"
                  id="serialNumber"
                  placeholder="Serial Number *"
                  v-model="inputWarrantyRegistration['serialNumber']"
                />

                <label
                  for="unitPurchase"
                  class="form-control-label"
                  aria-label="Unit Purchase"
                ></label>
                <input
                  type="text"
                  required="true"
                  class="form-control"
                  id="unitPurchase"
                  placeholder="Unit Purchase *"
                  v-model="inputWarrantyRegistration['unitPurchase']"
                />

                <label
                  for="dealer"
                  class="form-control-label"
                  aria-label="Dealer"
                ></label>
                <input
                  type="text"
                  class="form-control"
                  id="dealer"
                  placeholder="Perreaux Authorised Dealer *"
                  v-model="inputWarrantyRegistration['dealer']"
                />

                <label
                  for="datePurchased"
                  class="form-control-label"
                  aria-label="Date Purchased"
                ></label>
                <input
                  type="text"
                  class="form-control"
                  id="datePurchased"
                  placeholder="Date Purchased *"
                  v-model="inputWarrantyRegistration['datePurchased']"
                />

                <label
                  for="invoiceNumber"
                  class="form-control-label"
                  aria-label="Invoice Number"
                ></label>
                <input
                  type="text"
                  required="true"
                  class="form-control"
                  id="invoiceNumber"
                  placeholder="Sales Invoice Number *"
                  v-model="inputWarrantyRegistration['invoiceNumber']"
                />

                <button type="submit" class="form-button form-button-position">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <home-landing class="top-padding"></home-landing>
    
  </div>
</template>
<script>
import Modal from "../components/modal.vue";
import LatestProduct from "../components/LatestProduct.vue";
import SpecsInfo from "../components/SpecsInfo.vue";
import ProductDetails from "../components/ProductDetails.vue";
import HomeLanding from "../components/HomeLanding.vue";
import SideNav from "../components/SideNav.vue";

// Form prossesing imports
import axios from "axios";
import swal from "sweetalert2";

import { mapState } from "vuex";
import { processMeta } from "../utils/meta";
export default {
  components: {
    Modal,
    LatestProduct,
    HomeLanding,
    ProductDetails,
    SpecsInfo,
    SideNav,
  },
  data: () => ({
    pageName: "support",
    isperreauxModalVisible: false,
    // Registration variables
    inputWarrantyRegistration: {},
    inputServiceRequest: {},
    errors: {},
    loading: false,
    name: "form-errors",
    //---------------
    activeType: "manuals",
    selectedFilter: "alpha",
  }),
  asyncData(store) {
    return Promise.all([
      store.dispatch("loadCollectionPages", "productArchive"),
      store.dispatch("loadSecondCollectionPage", "support"),
    ]);
  },
  metaInfo() {
    return processMeta({
      title: this.supportPage.title,
    });
  },
  computed: {
    ...mapState({
      support: "pageData",
      supportPage: "secondPageData",
    }),

    sortedSupport() {
      if (this.selectedFilter == "alpha") {
        return this.support.slice().sort((a, b) => (a.title > b.title ? 1 : -1));
      } else if (this.selectedFilter === "date") {
        return this.support.slice().sort((a, b) => a.date - b.date);
      } else if (this.selectedFilter === "size") {
        return this.support .slice().sort((a, b) => +a.fileSize.split(/\s/g)[1] - +b.fileSize.split(/\s/g)[1]);
      }
      return this.support;
    },
  },
  methods: {
    showperreauxModal() {
      this.isperreauxModalVisible = true;
    },
    closeperreauxModal() {
      this.isperreauxModalVisible = false;
    },
    toggleActive(input) {
      this.activeType = input;
    },
    //Only chooses a route if two forms are present in page.
    //If you want to add more routes then rewrite as a switch statment
    postStream(formObject) {
      try {
        return formObject === "inputWarrantyRegistration"
          ? this.sendPayload("/warranty", this.inputWarrantyRegistration)
          : this.sendPayload("/service", this.inputServiceRequest);
      } catch (e) {
        console.error(e);
      }
    },

    clearErrors() {
      this.errors = {};
    },
    clearForm() {
      this.input = {};
    },
    sendPayload(postRoute, formObject) {
      return axios
        .post(postRoute, formObject)
        .then((response) => {
          this.clearForm();
          swal.fire({
            icon: "success",
            title: "Thank you!",
            text: "We will respond to your enquiry as soon as we can",
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

  mounted() {
    this.clearErrors();
    this.clearForm();
  },
};
</script>
