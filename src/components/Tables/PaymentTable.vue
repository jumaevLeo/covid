<template>
  <div>
    <md-table
      v-model="searched"
      md-sort="firstName"
      md-sort-order="asc"
      md-card
      :table-header-color="tableHeaderColor"
    >
      <md-table-toolbar>
        <div class="md-toolbar-section-start">
          <h1 class="md-title">Users</h1>
        </div>

        <md-field md-clearable class="md-toolbar-section-end">
          <md-input
            placeholder="Search by name..."
            v-model="search"
            @input="searchOnTable"
          />
        </md-field>
      </md-table-toolbar>
      <md-table-empty-state
        md-label="No users found"
        :md-description="
          `No user found for this '${search}' query. Try a different search term or create a new user.`
        "
      >
      </md-table-empty-state>
      <md-table-row
        slot="md-table-row"
        slot-scope="{ item, index }"
        :key="item.id"
      >
        <md-table-cell md-label="№">{{ index+1 }}</md-table-cell>
        <md-table-cell md-label="Ismi">{{ item.firstName }}</md-table-cell>
        <md-table-cell md-label="Familyasi">{{ item.lastName }}</md-table-cell>
        <md-table-cell md-label="Telefon raqami">{{
          item.phoneNumber
        }}</md-table-cell>
        <md-table-cell md-label="Manzili">{{ item.address }}</md-table-cell>
        <md-table-cell md-label="Fani">{{
          scienceName(item.science.id)
        }}</md-table-cell>
        <md-table-cell
          ><i class="fas fa-edit" @click="editTeacher(item.id)"></i
        ></md-table-cell>
        <md-table-cell
          ><i class="fas fa-trash-alt" @click="showDelete(item.id)"></i
        ></md-table-cell>
      </md-table-row>
    </md-table>
    <div class="d-flex align-items-center justify-content-between">
      <md-dialog :md-active.sync="showDialog" class="p-2">
        <md-dialog-title>Yangi o'qituvchi qo'shish</md-dialog-title>
        <b-form>
          <div class="px-4">
            <b-row>
              <b-col>
                <md-field>
                  <label style="font-size: 15px;">Ismi:</label>
                  <md-input
                    v-model="param.firstName"
                    placeholder="Ismini kiriting"
                  ></md-input>
                </md-field>
              </b-col>
              <b-col>
                <md-field>
                  <label style="font-size: 15px;">Familyasi:</label>
                  <md-input
                    v-model="param.lastName"
                    placeholder="Familyasini kiriting"
                  ></md-input>
                </md-field>
              </b-col>
              <b-col>
                <md-field>
                  <label style="font-size: 15px;">Mutaxassisligi:</label>
                  <md-select v-model="param.scienceId" style="font-size: 12px;">
                    <md-option
                      v-for="item in science"
                      v-bind:key="item.id"
                      :value="item.id"
                    >
                      {{ item.nameUz }}
                    </md-option>
                  </md-select>
                </md-field>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <md-field>
                  <label style="font-size: 15px">Telefon raqami:</label>
                  <md-input
                    v-model="param.phoneNumber"
                    placeholder="Telefon raqamini kiriting"
                  ></md-input>
                </md-field>
              </b-col>
              <b-col>
                <md-field>
                  <label style="font-size: 15px">Paroli:</label>
                  <md-input
                    v-model="param.password"
                    placeholder="Parolni kiriting"
                  ></md-input>
                </md-field>
              </b-col>
              <b-col>
                <md-field>
                  <label style="font-size: 15px">Manzili:</label>
                  <md-input
                    v-model="param.address"
                    placeholder="Manzilini kiriting"
                  ></md-input>
                </md-field>
              </b-col>
            </b-row>
          </div>
          <md-dialog-actions class="mt-3">
            <md-button class="md-danger" @click="showDialog = false"
              >Chiqish</md-button
            >
            <md-button
              type="submit"
              class="md-success"
              @click="saveTeacher(param.id)"
              >Saqlash</md-button
            >
          </md-dialog-actions>
        </b-form>
      </md-dialog>

      <md-button class="md-raised md-success" @click="showDialog = true"
        >O'qituvchi qo'shish</md-button
      >
      <b-pagination class="mt-3"
              v-model="currentPage"
              :total-rows="rows"
              :per-page="1"
              @change="onPagination"
      ></b-pagination>
    </div>
    <div>
      <md-dialog class="modal1" :md-active.sync="show">
        <h3 class="text-center">O'chirishni xoxlaysizmi?</h3>
        <md-dialog-actions>
          <md-button class="md-danger" @click="show = false">Yo'q</md-button>
          <md-button
            type="submit"
            class="md-success"
            @click="deleteTeacher(param.id)"
            >Ha</md-button
          >
        </md-dialog-actions>
      </md-dialog>
    </div>
  </div>
</template>

<script>
const toLower = text => {
  return text.toString().toLowerCase();
};
const searchByName = (items, term) => {
  if (term) {
    return items.filter(item =>
      toLower(item.firstName).includes(toLower(term))
    );
  }

  return items;
};
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import axios from "../../http-common";
export default {
  name: "teacher-table",
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
      teachers: [],
      showDialog: false,
      param: {},
      show: false,
      science: [],
      search: null,
      searched: [],
      perPage: 4,
      currentPage: 1,
      totalPages: 0
    };
  },

  mounted() {
    this.getTeacher(this.currentPage - 1, 3);
  },
  computed: {
    rows() {
      return this.totalPages;
    },
  },

  methods: {
    getScience() {
      axios.get("/catalogs").then(res => {
        this.science = res.data;
      });
    },
    getTeacher(page, size) {
      axios.get("/orders?page=" + page + "&size=" + size).then(res => {
        this.teachers = res.data.object
        this.searched = this.teachers;
        this.totalPages = res.data.totalPages;
        this.getScience();
      });
    },
    saveTeacher(id) {
      if (id) {
        axios.put("/teacher/" + id, this.param).then(res => {
          this.getTeacher();
          this.showDialog = false;
        });
      } else {
        this.showDialog = false;
        axios.post("/orders/add", this.param).then(res => {
          if (res.status === 200 || res.status === 201) {
            this.getTeacher();
          }
        });
      }
    },
    editTeacher(id) {
      let item = this.teachers.find(item => item.id === id);
      this.param.id = id;
      this.param.firstName = item.firstName;
      this.param.lastName = item.lastName;
      this.param.phoneNumber = item.phoneNumber;
      this.param.address = item.address;
      this.param.scienceId = item.science.id;
      this.showDialog = true;
    },
    deleteTeacher(id) {
      let item = this.teachers.find(item => item.id === id);
      axios.delete("/orders/" + id).then(res => {
        if (res.status === 200 || res.status === 201) {
          this.show = false;
          this.getTeacher();
        }
      });
    },
    showDelete(id) {
      this.param.id = id;
      this.show = true;
    },
    scienceName(id) {
      console.log(this.science.find(u => u.id === id));
      return this.science.find(u => u.id === id)["nameUz"];
    },

    searchOnTable() {
      this.searched = searchByName(this.teachers, this.search);
    },
    onPagination(pagination) {
      this.getTeacher(pagination - 1, 3);
    }
  }
};
</script>
<style>
.md-dialog {
  width: 800px;
}
.modal1 {
  width: 350px;
}
</style>
