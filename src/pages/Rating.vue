<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card class="md-card-plain">
          <md-card-header data-background-color="green">
            <h4 class="title">O'qituvchilar</h4>
          </md-card-header>
          <md-card-content>
            <teacher-table></teacher-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { TeacherTable } from "@/components";

export default {
  components: {
    TeacherTable
  }
};
</script>
