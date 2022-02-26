<template>
  <md-card class="md-card-stats">
    <md-card-header style="margin-top: 20px;background-color: #fff !important;border-radius: 60%;">
      <slot name="header" data-background-color="dataBackgroundColor"></slot>
    </md-card-header>

    <md-card-content>
      <slot name="content"></slot>
    </md-card-content>

    <md-card-actions md-alignment="left">
      <slot name="footer"></slot>
    </md-card-actions>
  </md-card>
</template>
<script>
export default {
  name: "stats-card",
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  }
};
</script>