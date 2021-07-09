<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card class="md-card-plain">
          <md-card-header data-background-color="green">
            <h4 class="title">O'quvchilar</h4>
          </md-card-header>
          <md-card-content>
            <pupil-table></pupil-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { PupilTable } from "@/components";

export default {
  components: {
    PupilTable
  }
};
</script>
