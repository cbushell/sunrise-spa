<style src="./DetailsSection.scss" lang="scss" scoped></style>
<i18n src="./DetailsSection.txt"></i18n>
<script src="./DetailsSection.js"></script>

<template>
  <!-- <div v-if="product && attributeTranslation"
       class="row">
    <div class="col-sm-12">
      <div data-test="panel-group-pdp"
           class="panel-group panel-group-pdp"
           id="accordion-product-info"
           role="tablist"
           aria-multiselectable="true">
        <div class="panel panel-default">
          <div class="panel-heading"
               role="tab"
               id="headingProductDetails">
            <h4 class="panel-title product-accordion-title text-uppercase">
              <a data-test="product-attributes-accordion"
                 id="pdp-product-details-toggle"
                 class="collapsed pdp-accord-toggle"
                 data-toggle="collapse"
                 data-parent="#accordion-product-info"
                 href="#collapseProductDetails"
                 aria-expanded="false"
                 aria-controls="collapseProductDetails"
                 @click="openAccordion">
                {{ $t('productDetails') }}
                <img class="accordion-plus"
                     src="../../../assets/img/plus79.png"
                     alt="accordion content">
              </a>
            </h4>
          </div>
          <div id="collapseProductDetails"
               class="panel-collapse collapse"
               role="tabpanel"
               aria-labelledby="headingProductDetails">
            <div class="panel-body panel-body-pdp">
              <ul class="product-features-list">
                <li v-for="attribute in productAttributes"
                    data-test="product-attributes-list"
                    :key="attribute.name">
                  <span class="attribute-name">
                    {{ attribute.name }}:
                  </span>
                  <span>
                    {{ attribute.label || attribute.value }}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="panel panel-default">
          <div class="panel-heading"
               role="tab"
               id="headingDelivery">
            <h4 class="panel-title product-accordion-title text-uppercase">
              <a id="pdp-delivery-returns-toggle"
                 class="collapsed pdp-accord-toggle"
                 data-toggle="collapse"
                 data-parent="#accordion-product-info"
                 href="#collapseDelivery"
                 aria-expanded="false true"
                 aria-controls="collapseDelivery"
                 @click="openAccordion">
                {{ $t('deliveryReturns') }}
                <img class="accordion-plus"
                     src="../../../assets/img/plus79.png"
                     alt="accordion content" />
              </a>
            </h4>
          </div>
          <div id="collapseDelivery"
               class="panel-collapse collapse"
               role="tabpanel"
               aria-labelledby="headingDelivery">
            <div class="panel-body panel-body-pdp">
              <ul class="product-delivery-list">
                <!-- {{#each deliveryRates.list}}
                <li>
                  <span>{{name}}:</span> {{price}}{{#if freeAbove}} (FREE for orders above {{freeAbove}}){{/if}}
                  {{#if description}}. {{description}}.{{/if}}
                </li>
                {{/each}}
                <li>{{ $t('freeReturns') }}</li>
                <li>{{ $t('moreDeliveryInfo') }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <div class="description-review-wrapper" v-if="product">
    <div class="panel-group" id="accordion1">
      <div class="panel pro-dec-accordion">
        <div class="panel-heading">
          <h4 class="panel-title">
            <a href="#"
              @click.prevent="toggle(0)"
              :class="{collapsed:!expanded[0]}"
              data-test="product-attributes-accordion"
            >
              {{$t('productDetails')}}
            </a>
          </h4>
        </div>
        <div data-parent="#accordion1" id="pro-dec-accordion1"
          class="product-description-wrapper panel-collapse collapse"
          :class="{show:expanded[0]}"
        >
          <div class="panel-body">
            <ul class="product-features-list">
              <li v-for="attribute in productAttributes"
                  data-test="product-attributes-list"
                  :key="attribute.name">
                <span class="attribute-name">
                  {{ attribute.name }}:
                </span>
                <span>
                  {{ attribute.label || attribute.value }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="panel pro-dec-accordion">
        <div class="panel-heading">
          <h4 class="panel-title">
            <a href="#"
              @click.prevent="toggle(1)"
              :class="{collapsed:!expanded[1]}"
            >
              {{$t('deliveryReturns')}}
            </a>
          </h4>
        </div>
        <div data-parent="#accordion1" id="pro-dec-accordion2"
          class="product-description-wrapper panel-collapse collapse"
          :class="{show:expanded[1]}"
        >
          <div class="panel-body">
            <ul class="product-delivery-list">
              <li>{{ $t('freeReturns') }}</li>
              <li>{{ $t('moreDeliveryInfo') }}</li>
            </ul>
        </div>
        </div>
      </div>
    </div>
  </div>

</template>
