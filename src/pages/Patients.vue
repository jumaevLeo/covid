<template>
  <div class="overflow-auto" style="padding: 50px;">
    <div class="table_header"><b><i>Buyurtmalar</i></b></div>
    <div style="background-color: #fff;padding: 5px 25px;">
      <p class="mt-3" align="left" style="color: #00D1B2"><b><i>{{ currentPage }} - sahifa</i></b></p>

      <b-table
          hover
          :current-page="currentPage"
          :items="items"
          :per-page="perPage"
          small
          class="order_Table"
      >

        <template #cell(id)="data">
          <b style="color: black;"><i>{{ data.value }}</i></b>
        </template>

        <template #cell(FIO)="data">
          <b class="text-info"><i>{{ data.value }}</i></b>
        </template>

        <template #cell(narxi)="data">
          <b style="color: black;"><i>{{ data.value }}</i></b>
        </template>

        <template #cell(buyurtma_holati)="data">
          <span :style="changeColor(data.value)">
            {{ data.value==2 ? 'Yetkazilgan' : data.value==1 ? 'Kutilmoqda' : 'Rad etilgan'}}
          </span>
        </template>
      </b-table>

    </div>
    <b-pagination class="pgnt" v-model="currentPage" :total-rows="rows" align="center" :per-page="perPage"></b-pagination>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        perPage: 10,
        currentPage: 1,
        items: [
          {id:1,buyurtma_nomi: 'Pishloqli pitsa',FIO:'John Doe',address: 'Yunusobod tumani',buyurtma_holati: 2, telefon:'+998936524565', narxi:'35.000 so`m' },
          {id:2,buyurtma_nomi: 'Tovuqli pitsa',FIO:'Jane Doe',address: 'Chilonzor tumani',buyurtma_holati: 0, telefon:'+998900112907', narxi:'25.000 so`m'  },
          {id:3,buyurtma_nomi: 'Karamli pitsa',FIO:'Rubin Kincade',address: 'Yakkasaroy tumani',buyurtma_holati: 1, telefon:'+998936524565', narxi:'45.000 so`m'  },
          {id:4,buyurtma_nomi: 'Hamburger',FIO:'Shirley Partridge',address: 'Shayhontoxur tumani',buyurtma_holati: 2, telefon:'+998900112907', narxi:'55.000 so`m'  },
          {id:5,buyurtma_nomi: 'Pishloqli pitsa',FIO:'John Doe',address: 'Yunusobod tumani',buyurtma_holati: 1, telefon:'+998936524565', narxi:'35.000 so`m' },
          {id:6,buyurtma_nomi: 'Pishloqli pitsa',FIO:'John Doe',address: 'Yunusobod tumani',buyurtma_holati: 2, telefon:'+998936524565', narxi:'35.000 so`m' },
          {id:7,buyurtma_nomi: 'Pishloqli pitsa',FIO:'John Doe',address: 'Yunusobod tumani',buyurtma_holati: 2, telefon:'+998936524565', narxi:'35.000 so`m' },
          {id:8,buyurtma_nomi: 'Pishloqli pitsa',FIO:'John Doe',address: 'Yunusobod tumani',buyurtma_holati: 2, telefon:'+998936524565', narxi:'35.000 so`m' },
          {id:9,buyurtma_nomi: 'Pishloqli pitsa',FIO:'John Doe',address: 'Yunusobod tumani',buyurtma_holati: 2, telefon:'+998936524565', narxi:'35.000 so`m' },
          {id:10,buyurtma_nomi: 'Pishloqli pitsa',FIO:'John Doe',address: 'Yunusobod tumani',buyurtma_holati: 1, telefon:'+998936524565', narxi:'35.000 so`m' },
          {id:11,buyurtma_nomi: 'Pishloqli pitsa',FIO:'John Doe',address: 'Yunusobod tumani',buyurtma_holati: 0, telefon:'+998936524565', narxi:'35.000 so`m' },
          {id:12,buyurtma_nomi: 'Pishloqli pitsa',FIO:'John Doe',address: 'Yunusobod tumani',buyurtma_holati: 2, telefon:'+998936524565', narxi:'35.000 so`m' },
          {id:13,buyurtma_nomi: 'Pishloqli pitsa',FIO:'John Doe',address: 'Yunusobod tumani',buyurtma_holati: 2, telefon:'+998936524565', narxi:'35.000 so`m' },
        ]
      }
    },
    filters: {

    },
    methods: {
      changeColor(value) {
        if(value==2) {
          return 'background-color:#48C78E;color:#fff;padding: 7px;border-radius: 5px;'
        }else if(value==1) {
          return 'background-color:#FFE08A;color:black;padding: 7px;border-radius: 5px;'
        }else {
          return 'background-color:#F14668;color:#fff;padding: 7px;border-radius: 5px;'
        }
      }
    },
    computed: {
      rows() {
        return this.items.length
      }
    }
};
</script>
<style>
  .table_header {
    padding: 20px;
    background-color: #00D1B2;
    color:#fff;
    font-size: 18px;
  }
  .order_Table th {
    padding: 15px !important;
    background-color: #007BFF;
    color: #fff;
  }
  td {
    padding: 15px !important;
  }
  .pgnt {
    margin-top: 15px;
    font-size: 16px;
  }
  .page-link {
    font-weight: bold;
  }
</style>
