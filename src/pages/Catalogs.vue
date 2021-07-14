<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card class="md-card-plain">
          <md-card-header data-background-color="orange">
            <h4 class="title"><b>Kataloglar</b></h4>
          </md-card-header>
          <md-card-content>
            <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100" style="margin-top: 25px;">
              <div style="margin: 2px;">
                <b-card-group deck>
                  <b-card v-for= "product in productItem" v-bind:key="product" style="min-width: 300px !important;margin-top: 30px;padding: 0 !important;">
                    <img :src="product.image" img-alt="rasm" img-top>
                    <div class="card-pad" style="display: flex; flex-direction: row; justify-content: space-between;margin-top:15px;">
                      <div style="color: black;font-size: 18px;"><b>{{product.name}}</b></div>
                      <div style="color:#008000;font-weight: bold;">{{product.price}} so`m</div>
                    </div>
                    <div class="text card-pad" style="margin-top: 10px;">
                      <div>
                        <i class="fas fa-shopping-basket" style="color: yellow"></i>
                        <i style="margin-left: 10px;">Fast-food</i>
                      </div>
                      <div>
                        <i class="fas fa-map-marker-alt" style="color: #FD7E14"></i>
                        <i style="margin-left: 15px;">Navoiy shahar, Navbahor ko`chasi, 19-uy</i>
                      </div>
                      <div>
                        <i class="fas fa-map-marker-alt" style="color: green"></i>
                        <i style="margin-left: 15px;">+998 71 228 79 22</i>
                      </div>
                      <div>
                        <i class="fas fa-clock" style="color: red"></i>
                        <i style="margin-left: 11px;">Yetkazib berish xizmati mavjud</i>
                      </div>
                    </div>
                  </b-card>
                </b-card-group>
              </div>
            </div>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productItem:[
        {name:'Piza', price:'15.000', image:require(`@/assets/img/foods/food_1.jpg`)},
        {name:'Burger', price:'25.000', image:require(`@/assets/img/foods/food_2.jpg`)},
        {name:'Meat', price:'35.000', image:require(`@/assets/img/foods/food_3.jpg`)},
        {name:'Cheeseburger', price:'45.000', image:require(`@/assets/img/foods/food_4.jpg`)},
        {name:'Chips-Free', price:'12.000', image:require(`@/assets/img/foods/food_5.jpg`)},
        {name:'Lavash', price:'22.000', image:require(`@/assets/img/foods/food_6.jpg`)}
      ]
    }
  },
}
</script>
<style>
  .card-size {
    padding:0 !important;
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
  .card-pad {
    padding: 10px 20px;
  }
  .card-body {
    padding: 0 !important;
  }
</style>
