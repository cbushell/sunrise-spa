<i18n src="./PageStoreLocator.txt"></i18n>
<script src="./PageStoreLocator.js" />
<template>
  <div class="store-finder-wrapper">
    <div class="container">
      <div class="store-finder-title">
        <span class="store-finder-title-text">{{ $t('title') }}</span>
      </div>

      <div class="store-location-wrapper">
        <div class="map">
          <div id="map">
            <gmap-map
              :center="center"
              :zoom="12"
              style="width:100%;  height: 100%;">
              <gmap-marker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                @click="center=m.position">
              </gmap-marker>
            </gmap-map>
          </div>
        </div>

        <div>
          <div id='googlePlaceBar'>
            <h2>Search near a location</h2>
            <div id='place-radius'>
              <gmap-autocomplete @place_changed="setPlace"/>
              <v-select
                id='radius'
                v-model="searchRadius"
                :options="radiusOptions"
                :reduce="option => option.distance"
                :clearable=false @input="setRadius"
              ></v-select>
            </div>
          </div>

          <div class="addresses">
            <h2 class='pad-left'>Stores</h2>
            <ul class="list" v-if="channels && channels.results && channels.results.length > 0">
              <li v-for="channel in channels.results"
                :key="channel.id" class="item address address--active"
                @click="click(channel)">
                <div
                  class="item-link"
                >
                  <span class="distance">
                    <span
                      class="gm-computed-distance"
                      :data-coord-lat="channel.geoLocation.coordinates[1]"
                      :data-coord-lng="channel.geoLocation.coordinates[0]"
                    ></span>
                    <strong class="title">
                      {{channel.name}}
                    </strong>
                  </span>
                  <b class="price"> </b>
                  <div class="info">
                    <div class="info-title"> Address: </div>
                    <div class="info-content">
                      {{ channel.address.streetNumber}}
                      {{channel.address.streetName}}
                      <br>
                      {{channel.address.city}},
                      {{channel.address.postalCode}}
                    </div>
                    <div class="info-title"> Opening hours: </div>
                    <div class="info-content">{{ openingHours(channel) }}</div>
                    <div class="info-content store-distance">{{ distance(channel) }} mi away</div>
                    <!-- <div class="info-content"> Mo-Fr. 10:00AM - 8:00PMSa. 9:00AM - 6:00PM </div> -->
                  </div>
                  <div class="box-footer">
                    <!-- start catalog/product-availability.hbs -->
                    <div class="status"> </div> <!-- end catalog/product-availability.hbs -->
                    <div class="action" v-if="!isSelected(channel)">
                        <input
                          type="hidden"
                          :value="channel.id">
                        <button
                          v-on:click="setStore"
                          class="btn btn-standard"
                          :value="channel.id"
                        >
                          Select This Store
                        </button>
                    </div>
                    <div class="store-selected action" v-else>Selected</div>
                  </div>
                </div>
              </li>
            </ul>
            <div class="no-stores-found" v-else>No stores found.  Try increasing your search radius.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
