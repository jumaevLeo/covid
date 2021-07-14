<template>
  <div class="content" style="background-color:#F0F0FA !important;">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33">
        <chart-card
          :chart-data="dailyOrders.data"
          :chart-options="dailyOrders.options"
          :chart-type="'Line'"
          data-background-color="blue"
        >
          <template slot="content">
            <h4 class="title"><b-icon style="width: 20px;color: #1CBFD3;margin-right: 5px;" stacked icon="receipt"></b-icon> Kunlik buyurtmalar</h4>
            <p class="category">
              <span class="text-success"><i class="fas fa-long-arrow-alt-up"></i></span> Bugungi kunda sotish hajmining o'sishi - <span class="text-success">55%</span>
            </p>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>access_time</md-icon>
              4 daqiqa oldin yangilangan
            </div>
          </template>
        </chart-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33">
        <chart-card
          :chart-data="clientCome.data"
          :chart-options="clientCome.options"
          :chart-responsive-options="clientCome.responsiveOptions"
          :chart-type="'Bar'"
          data-background-color="red"
        >
          <template slot="content">
            <h4 class="title"><b-icon style="width: 20px;color: #EE514E;margin-right: 5px;" stacked icon="person-plus-fill"></b-icon>  Yangi obunachilar soni</h4>
            <p class="category">
              Eng so'nggi natijalar
            </p>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>access_time</md-icon>
              10 kun oldin yangilangan
            </div>
          </template>
        </chart-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33">
        <chart-card
          :chart-data="DoneOrders.data"
          :chart-options="DoneOrders.options"
          :chart-type="'Line'"
          data-background-color="green"
        >
          <template slot="content">
            <h4 class="title"><b-icon style="width: 20px;color: green;" stacked icon="check"></b-icon> Bajarilgan buyurtmalar</h4>
            <p class="category">
              So'nggi bajarilgan buyurtmalar soni
            </p>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>access_time</md-icon>
              so'nggi buyurtma 26minut oldin bajarilgan
            </div>
          </template>
        </chart-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
             style="display: flex; flex-wrap: wrap; padding: 0; max-width: 48% !important; min-width: 46% !important; margin-left: 15px;
           box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); background-color: #fff;margin-right: 8px;">
          <div style="background-color: #263543; padding: 20px; width: 100%;">
            <b-icon style="width: 25px;color: #FF8306;margin-right: 5px;" stacked icon="cart-check-fill"></b-icon>
            <span style="color: #fff; padding-left: 20px; font-size: 20px; padding-bottom: 10px !important; font-family: italic;">Buyurtmalar statistikasi</span>
          </div>
          <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-50">
            <stats-card style="background-color:#FFB64D;">
              <template slot="header">
                <b-icon style="width: 15px;color: #FFB64D;" stacked icon="bag-fill"></b-icon>
              </template>

              <template slot="content">
                <p class="category" style="color: #fff;">Jami buyurtmalar</p>
                <h3 class="title">729</h3>
              </template>

              <template slot="footer">
                <div class="stats">
                  <md-icon class="text-success">verified_user</md-icon>
                  <a href="#">Buyurtmalar statistikasi</a>
                </div>
              </template>
            </stats-card>
          </div>
          <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-50">
            <stats-card style="background-color:#4099FF;">
              <template slot="header">
                <b-icon style="width: 15px;color: #4099FF;" stacked icon="truck"></b-icon>
              </template>

              <template slot="content">
                <p class="category" style="color: #fff;">Amaldagi buyurtmalar</p>
                <h3 class="title">252</h3>
              </template>

              <template slot="footer">
                <div class="stats">
                  <md-icon class="text-success">verified_user</md-icon>
                  <a href="#">Buyurtmalar statistikasi</a>
                </div>
              </template>
            </stats-card>
          </div>
          <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-50">
            <stats-card style="background-color:#2ED8B6;">
              <template slot="header">
                <b-icon style="width: 15px;color: #2ED8B6;" stacked icon="bookmark-check-fill"></b-icon>
              </template>

              <template slot="content">
                <p class="category" style="color: #fff;">Bajarilgan buyurtmalar</p>
                <h3 class="title">421</h3>
              </template>

              <template slot="footer">
                <div class="stats">
                  <md-icon class="text-success">verified_user</md-icon>
                  <a href="#">Buyurtmalar statistikasi</a>
                </div>
              </template>
            </stats-card>
          </div>
          <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-50">
            <stats-card style="background-color: #FF5370;">
              <template slot="header">
                <b-icon style="width: 15px;color: #FF5370;" stacked icon="x-octagon-fill"></b-icon>
              </template>

              <template slot="content">
                <p class="category" style="color: #fff;">Rad etilgan buyurtmalar</p>
                <h3 class="title">56</h3>
              </template>

              <template slot="footer">
                <div class="stats">
                  <md-icon class="text-success">verified_user</md-icon>
                  <a href="#">Buyurtmalar statistikasi</a>
                </div>
              </template>
            </stats-card>
          </div>
        </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
             style="display: flex; flex-wrap: wrap; padding: 0; min-width: 46% !important; max-width: 48% !important; margin-left: 10px;
           box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); background-color: #fff;">
          <div style="background-color: #263543; padding: 20px; width: 100%;">
            <b-icon style="width: 25px;color: #2ED8B6;margin-right: 5px;" stacked icon="graph-up"></b-icon>
            <span style="color: #fff; padding-left: 20px; font-size: 20px; padding-bottom: 10px !important; font-family: italic;">Umumiy statistika</span>
          </div>
          <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-50">
            <stats-card style="background-color: #FFB64D;">
              <template slot="header">
                <b-icon style="width: 15px;color: #FFB64D;" stacked icon="map-fill"></b-icon>
              </template>

              <template slot="content">
                <p class="category" style="color: #fff;">Taomlar soni</p>
                <h3 class="title">19</h3>
              </template>

              <template slot="footer">
                <div class="stats">
                  <md-icon class="text-success">verified_user</md-icon>
                  <a href="#">Umumiy statistika</a>
                </div>
              </template>
            </stats-card>
          </div>
          <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-50">
            <stats-card style="background-color: #4099FF;">
              <template slot="header">
                <b-icon style="width: 15px;color: #4099FF;" stacked icon="shop-window"></b-icon>
              </template>

              <template slot="content">
                <p class="category" style="color: #fff;">Amaldagi restoranlar / filiallar</p>
                <h3 class="title">2</h3>
              </template>

              <template slot="footer">
                <div class="stats">
                  <md-icon class="text-success">verified_user</md-icon>
                  <a href="#">Umumiy statistika</a>
                </div>
              </template>
            </stats-card>
          </div>
          <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-50">
            <stats-card style="background-color: #2ED8B6;">
              <template slot="header">
                <b-icon style="width: 15px;color: #2ED8B6;" stacked icon="person-plus-fill"></b-icon>
              </template>

              <template slot="content">
                <p class="category" style="color: #fff;">Xodimlar soni</p>
                <h3 class="title">49</h3>
              </template>

              <template slot="footer">
                <div class="stats">
                  <md-icon class="text-success">verified_user</md-icon>
                  <a href="#">Umumiy statistika</a>
                </div>
              </template>
            </stats-card>
          </div>
          <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-50">
            <stats-card style="background-color: #FF5370;">
              <template slot="header">
                <b-icon style="width: 15px;color: #FF5370;" stacked icon="award-fill"></b-icon>
              </template>

              <template slot="content">
                <p class="category" style="color: #fff;">Daromad</p>
                <h3 class="title">5,200 <small style="color: #FFB64D; font-weight: bold;">$</small></h3>
              </template>

              <template slot="footer">
                <div class="stats">
                  <md-icon class="text-success">verified_user</md-icon>
                  <a href="#">Umumiy statistika</a>
                </div>
              </template>
            </stats-card>
          </div>
        </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
        style="margin-top: 25px;"
      >
        <div style="background-color: #fff;padding: 25px;margin: 2px;">
          <div class="catalogTitle" style="border-bottom: 1px solid #FF8306;padding: 10px;font-size: 20px;font-weight: bold;">
            Eng ko'p berilgan buyurtmalar
          </div>
          <b-card-group deck>
            <b-card v-for= "product in productItem" v-bind:key="product" style="margin-top: 30px;padding: 0 !important;">
              <img :src="product.image" img-alt="rasm" img-top>
              <div class="card-pad" style="display: flex; flex-direction: row; justify-content: space-between;margin-top:15px;">
                <div style="color: black;font-size: 18px;"><b>{{product.name}}</b></div>
                <div style="color:#008000;font-weight: bold;">{{product.price}} so`m</div>
              </div>
              <div class="text card-pad">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at corporis ipsa maxime
                nihil qui reprehenderit sit unde vero voluptatum? Cum deleniti, dolor doloremque earum ipsum itaque quae quo tenetur?
              </div>
              <template #footer>
                <div style="display: flex; flex-direction: row; justify-content: space-between;">
                  <div><small class="text-muted"><b>Buyurtmalar: <span style="color:#4099FF;">{{product.order}}</span></b></small></div>
                  <div><small class="text-muted"><b>Kirim: <span style="color:#FF5370;">{{product.order*product.price}}</span></b></small></div>
                </div>
              </template>
            </b-card>
          </b-card-group>
        </div>
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
        style="margin-top: 25px;"
      >
        <template>
          <div style="background-color: #fff;padding: 20px;">
            <div style="display: flex; flex-direction: row; justify-content: space-between;padding-bottom: 10px;">
              <div class="caption-text" style="font-size: 20px;font-weight: bold;align-self: center;">Eng so'nggi buyurtmalar</div>
              <div><b-button @click="redirectToHome()" class="dashTablebtn">Hammasini ko'rish</b-button></div>
            </div>
            <div>
              <b-table class="dashTable" hover :fields="fields" :items="orders" responsive="sm" style="background-color: #fff;">

                <template #cell(index)="data">
                  <b>{{ data.index + 1 }}</b>
                </template>

                <template #cell(name)="data">
                  <b class="text-info">{{ data.value.first.toUpperCase() }}</b> <b>{{ data.value.last }}</b>
                </template>

                <template #cell(telefon)="data">
                  <b class="text-info"><i>{{ data.value }}</i></b>
                </template>

                <template #cell(buyurtma_holati)="data">
                  <span style="background-color: #FF5370; padding: 7px;border-radius: 5px;">{{ data.value }}</span>
                </template>
              </b-table>
            </div>
          </div>
        </template>
      </div>
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
           style="margin-top: 25px;"
      >
        <div style="margin: 2px;">
          <b-card-group deck style="margin-top: 20px;">
            <b-card @click="redirect('https://www.instagram.com/jumaevleo')" class="cardHover" style="text-align: center;background-color:#F71B1B;font-size: 16px;color: #fff;padding: 25px">
              <i class="fab fa-instagram" aria-hidden="true" style="font-size: 21px; color: #fff;margin-right: 10px;"></i>
              <span>Instagram sahifamizga a'zo bo'ling</span>
              <div style="padding: 10px;font-weight: bold;"><i>30000 +</i></div>
            </b-card>

            <b-card @click="redirect('https://www.facebook.com/jumaevleo')" class="cardHover" style="text-align: center; background-color:#45A0EF;border:none;font-size: 16px;color: #fff;padding: 25px">
              <i class="fab fa-facebook-square" aria-hidden="true" style="font-size: 21px; color: #fff;margin-right: 10px;"></i>
              <span>Facebook sahifamizga a'zo bo'ling</span>
              <div style="padding: 10px;font-weight: bold;"><i>21000 +</i></div>
            </b-card>

            <b-card @click="redirect('https://telegram.me/Jumayev4565')" class="cardHover" style="text-align: center;background-color:black;font-size: 16px;color: #fff;padding: 25px">
              <i class="fab fa-telegram" aria-hidden="true" style="font-size: 21px; color: #fff;margin-right: 10px;"></i>
              <span>Telegram kanalimizga a'zo bo'ling</span>
              <div style="padding: 10px;font-weight: bold;"><i>42000 +</i></div>
            </b-card>

            <b-card @click="redirect('https://twitter.com/Jumayev4565')" class="cardHover" style="text-align: center;background-color:#546CAA;border:none;font-size: 16px;color: #fff;padding: 25px">
              <i class="fab fa-twitter" aria-hidden="true" style="font-size: 21px; color: #fff;margin-right: 10px;"></i>
              <span>Twitter sahifamizga a'zo bo'ling</span>
              <div style="padding: 10px;font-weight: bold;"><i>15000 +</i></div>
            </b-card>
          </b-card-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  StatsCard,
  ChartCard,
} from "@/components";

export default {
  components: {
    StatsCard,
    ChartCard
  },
  data() {
    return {
      dailyOrders: {
        data: {
          labels: ["D", "S", "CH", "P", "J", "SH", "Y"],
          series: [[12, 17, 7, 47, 63, 58, 88]]
        },
        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 101, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      DoneOrders: {
        data: {
          labels: ["12.00", "15.00", "18.00", "21.00", "24.00", "03.00", "06.00", "09.00"],
          series: [[230, 750, 450, 300, 280, 240, 200, 190]]
        },

        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      clientCome: {
        data: {
          labels: [
            "Ja",
            "Fe",
            "Ma",
            "Ap",
            "Mai",
            "Ju",
            "Jul",
            "Au",
            "Se",
            "Oc",
            "No",
            "De"
          ],
          series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]]
        },
        options: {
          axisX: {
            showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0
          }
        },
        responsiveOptions: [
          [
            "screen and (max-width: 640px)",
            {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function(value) {
                  return value[0];
                }
              }
            }
          ]
        ]
      },
      fields: [
        'index',
        'buyurtma_nomi',
        { key: 'name', label: 'To`liq ismi' },
        'address',
        'buyurtma_holati',
        'narxi',
        'telefon'
      ],
      orders: [
        {buyurtma_nomi: 'Pishloqli pitsa',name: { first: 'John', last: 'Doe' },address: 'Yunusobod tumani',buyurtma_holati: 'Kutilmoqda', telefon:'+998936524565', narxi:'35.000 so`m' },
        {buyurtma_nomi: 'Tovuqli pitsa',name: { first: 'Jane', last: 'Doe' },address: 'Chilonzor tumani',buyurtma_holati: 'Yetkazilgan', telefon:'+998900112907', narxi:'25.000 so`m'  },
        {buyurtma_nomi: 'Karamli pitsa',name: { first: 'Rubin', last: 'Kincade' },address: 'Yakkasaroy tumani',buyurtma_holati: 'Rad etilgan', telefon:'+998936524565', narxi:'45.000 so`m'  },
        {buyurtma_nomi: 'Hamburger',name: { first: 'Shirley', last: 'Partridge' },address: 'Shayhontoxur tumani',buyurtma_holati: 'Yetkazilgan', telefon:'+998900112907', narxi:'55.000 so`m'  }
      ],
      productItem:[
        {name:'Piza', price:15000, image:require(`@/assets/img/foods/food_1.jpg`), order:49},
        {name:'Burger', price:25000, image:require(`@/assets/img/foods/food_2.jpg`), order:31},
        {name:'Meat', price:35000, image:require(`@/assets/img/foods/food_3.jpg`), order:35},
        {name:'Cheeseburger', price:45000, image:require(`@/assets/img/foods/food_4.jpg`), order:23}
      ]
    };
  },
  methods: {
    redirectToHome() {
      this.$router.push({ path: '/orders' });
    },
    redirect: function (url) {
      window.location=url;
    }
  }
};
</script>
<style>
  .md-card:hover .md-card-header {
    transition: .3s linear;
    box-shadow: none;
  }
  .dashTable thead {
    background-color: #FF8306;
    color: #fff;
  }
  .dashTablebtn {
    background-color: #007BFF;
    color: #fff;
    border: none;
    padding: 10px 23px;
  }
  .card-footer {
    padding: 0.35rem 1.25rem !important;
  }
  .cardHover:hover {
    cursor: pointer;
    transition: .2s linear;
    opacity: 0.7;
  }
</style>
