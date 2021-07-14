<template>
  <div>
    <md-table v-model="science" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item, index }">
        <md-table-cell md-label="№">{{ index + 1 }}</md-table-cell>
        <md-table-cell md-label="Fan nomi">{{ item.nameUz }}</md-table-cell>
        <md-table-cell md-label="Narxi">{{ item.price }} so'm</md-table-cell>
        <md-table-cell md-label="Davomiyligi"
          >{{ item.courseDuration }} oy</md-table-cell
        >
        <md-table-cell
          ><i class="fas fa-edit" @click="editScience(item.id)"></i
        ></md-table-cell>
        <md-table-cell><i class="fas fa-trash-alt" @click="showDelete(item.id)"></i></md-table-cell>
      </md-table-row>
    </md-table>
    <div>
      <md-dialog :md-active.sync="showDialog">
        <md-dialog-title>Yangi fan qo'shish</md-dialog-title>
        <b-form>
          <div class="px-4">
            <label>Fan nomi:</label>
            <b-form-input
              v-model="param.nameUz"
              placeholder="Fan nomini kiriting"
            ></b-form-input>
            <label class="mt-4">Narxi:</label>
            <b-form-input
              v-model="param.price"
              placeholder="Fan narxini kiriting"
            ></b-form-input>
            <label class="mt-4">Davomiyligi:</label>
            <b-form-input
              v-model="param.courseDuration"
              placeholder="Fan davomiyligini kiriting"
            ></b-form-input>
          </div>
          <md-dialog-actions>
            <md-button class="md-danger" @click="showDialog = false"
              >Chiqish</md-button
            >
            <md-button type="submit" class="md-success" @click="saveScience(param.id)"
              >Saqlash</md-button
            >
          </md-dialog-actions>
        </b-form>
      </md-dialog>

      <md-button class="md-raised md-success" @click="showDialog = true"
        >Fan qo'shish</md-button
      >
    </div>
    <div>
      <md-dialog class="modal1" :md-active.sync="show">
        <h3 class="text-center">O'chirishni xoxlaysizmi?</h3>
        <md-dialog-actions>
          <md-button class="md-danger" @click="show = false">Yo'q</md-button>
          <md-button type="submit" class="md-success" @click="deleteScience(param.id)">Ha</md-button>
        </md-dialog-actions>
      </md-dialog>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import axios from "../../http-common";
export default {
  name: "ordered-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      modalShow: false,
      selected: [],
      science: [],
      showDialog: false,
      param: {
        nameUz: null,
        price: null,
        courseDuration: null
      },
      show: false
    };
  },
  mounted() {
    this.getScience();
  },

  methods: {
    getScience() {
      axios.get("/catalogs").then(res => {
        this.science = res.data;
      });
    },
    saveScience(id) {
      if(id){
        axios.put("/catalogs/" + id, this.param).then(res => {
            this.getScience();
        });
      } else {
        this.showDialog = false;
        axios.post("/catalogs/add", this.param).then(res => {
          if (res.status === 200 || res.status === 201) {
            this.getScience();
          }
        });
      }
    },
    editScience(id) {
      let item = this.science.find(item => item.id === id);
      this.param.id=id;
      this.param.nameUz = item.nameUz;
      this.param.price = item.price;
      this.param.courseDuration = item.courseDuration;
      this.showDialog = true;
    },
    deleteScience(id) {
      let item = this.science.find(item => item.id === id);
      axios.delete("/catalogs/" + id).then(res => {
        if (res.status === 200 || res.status === 201) {
          this.show=false;
          this.getScience();
        }
      });
    },
    showDelete(id) {
      this.param.id = id;
      this.show = true;
    }
  }
};
</script>
<style>
.md-dialog {
   width: 700px;
 }
.modal1 {
  width: 350px;
}
</style>
