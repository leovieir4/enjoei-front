<template>
  <div>
    <br>
    <div class="columns is-flex is-centered">
        <figure class="image is-64x64">
          <img class = "logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAtFBMVEX///9PLTLwW3hCFx7Fv8BMKS5lSk7vUHBJJCrwWHbvU3JJIynwV3VCFh7wVXNKJivBuLlFHCP0h5vi3d7b1dZpT1M9CRSypqj+8fP5vcd/a25AEBn18/Pp5ebTzM2WhYf1mKn6ytL96Oz83OK4rq+Gc3V0XWBeQUWnmZtTMjc3AADycYn+9fb0jqD3r7zxaYP83+T4s8D6z9aRgII8AA+gkZN5Y2bvRGjydY3zfpT2pbP2oK/o9OSBAAAGDUlEQVR4nO2aaXeqMBCGLWgjmxAXXHHH6rVq1drF/v//dcFutgoJSBZ75jl+DSdvZjJbzOUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMger5ofT3u+3wrwe7t6vuqJ3lJ2eE5vMrNVC2OjWLSDn2FgbOHCrLbLX79Mb+wbrmrYhZtTCgXDci3fuWKVlemkrRbPiTuiqLYn04roraah40xUbMer+8DGeOJ0RG84Id7WUOnkfYhUce+avLXquwbBOU8xXL8qeuOUVFuWkVTeu8Z26xouZGeL0+k7aMRb6e9j3U2v76DxsS5aQizVW/UifSFWTeLrOKVMD/HYeCdaSARe7XIDvqPWpLyNeVzMSGBgRiMvWs4pUzczfSGudJ7asjIVGHiqL1rSDzo1nLHAmxs8kegydu4uS4LnMe6kkejdZRdjjineSVKMdxgJDCVKYUV2AmWReMviDn5i1ETLy+X87KPoMVh40thlValFYU3FCnSyrWTO4ToiBXo48bAiMQVVZM64zaJbIlEUGG12bKPMJ6qwKrybdbUdhdUVpPAu2SW0sWq1XddtW7Sj4q+Vt2IEThMkiqLavmnVnW7F87xK16m3btpqglJIFTKe8h6pTWDNWifvL57jzyxqUz6KiKctymqtaD1FPEp0nCeL0pBGi7O6gCqdj9puK244WG25dHbE/EeMT1Q7Iw8/q3QTuiJ3I3bbNNuyxxSfGts0rtrmnTEmFCZUJ3TxwZtQmNGeMFb0iwpFxe32qD/Xo/kc33cpnxhIC1aSHFa3iNWDsWWm5gwdolsVcLKmxyF3KZjnRKNOLLmtpF2dQyxyMc/CpkY68Hby3dRJ0bnAsYuqks4b0weZb3okx8D8Yg2pL7TTnTYpA2F+IxuCkxaMdHWyR/gDR4FbE0VKhql7nTohRLu8OgxCJL3gqG/jjYhpisAseIqvI630AaESH8JsXuU3IawXardpIWWhNh+BVWLiSg/hy20+XeKY9SA/GpXP/HvL8rEpHiNNJZEcQsBjCafCbSZQ4YxHf+GJc9LATXnkfGLZzRKVRzAlN3IsFfL4Nxi5+2UIly54J/Qe8nho27L7cwmFQh7jKF+oQh5/zWjxeNmOoshFoUgbcnm+EGpD+4mHwj9vQ6GRhss9/PsKe0IzPo8GcSq0auMxFB4LVchjntj9Z6misP5xeevu5sUh6u9fAAAAAAAAf47h5oK1D9ntgxlr7Xmddu1QR/1GlpthwGiOFAWNUq5+MRVdaWa6oYxplJGmKIqm3Kda3teDxQqay+uqa1RSDpTKaZY30ftqE/XTnRBrNvOPHYZ2WCRfP/heLqWrfjjol8R+0g9s0NFyDb0MGWzyEpafDppW4g+Boas+v8nkqpvVr/2FEstJdtg8/YBErtpY/HDQrx2u6B2tfyowdNVXOVx1qZfObC90tBKlEYZzPeIL6I3t3mk456DfnkplhCUyI7+gKwPmEmIZls866LcR9D2pChvEHZFwV12aEQ56bIRYjYG+2CN6PyVugn5Tjj39L42oHNFtDPcaUV8IWolKHGWiBT+sgJRFc/hzl43Nfo4iAszpIYlqOIY0BvgUiVav/WVzEzBYv5XnGtKpVyNxbnomT0ejmSUdHdB1k/5sgtOZCxMY+Cmtn10CEtkU3ytJjJFSoNji7YG5EYWXNYmuYgpKr4IF5nJ7phJNYanwiAVDiZoiRXfxyuwuarokQylWOUMz044lM4euQE0sUJdGIBuJpiaRwIgxxEWUEgxBuLCm6oPoQS8SpImfDMzoWUQKgSlGysyJnCclRxNci0bSz8hTk8whObNZZWBGTRdda8dxf7kZ0UqqJHHKiDw8i6OElqIVkGkqqTWW9IXsj9wH7tfpNAb6JCm0yYQaE2ZHTUfXo+/A4CXBuDCcqBLH//Ix3K9QiUZkIC9qKi49o/0cxas09XAefn3mO2LYXCjP6MwIWDPD+fDrciRdhZ2Cxma9mB/s9UlwRVfl/eC6QguRxnC02QyazcFgM3po/AXLAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICM/Adu+YUuacoZtAAAAABJRU5ErkJggg==" alt="logo">
        </figure>
    </div>
    <a class="logout" v-on:click="logout">sair</a>
    <hr>
    <div class="container">
      <b-navbar
        v-bind:transparent="false"
        v-bind:mobile-burger="false"
        v-bind:active="true">
        <template slot="brand">
          <span class="cont" v-show="products.length">
            {{all_products.length}} Produtos encontrados
          </span>
          <span class="cont" v-show="!products.length">
            nenhum produto encontrado
          </span>
        </template>
        <template slot="end">
          <b-navbar-item tag="div" class="item-seanch-two">
            <div v-on:click="cleanSearch" href="" class="clean">limpar filtro</div>
          </b-navbar-item>
          <b-navbar-item tag="div" class="input-search">
            <b-input placeholder="Search..."
                v-on:keyup.native="searchByWord"
                v-model="search"
                icon="magnify">
            </b-input>
          </b-navbar-item>
          <b-navbar-item tag="div" class="item-seanch-one">
            <div href="" class="clean" v-on:click="cleanSearch">limpar busca</div>
          </b-navbar-item>
        </template>
      </b-navbar>
        <div class="store" v-show="awaitRender && products.length">
          <div class="item" v-for="product in products" :key="product.id">
            <a :href="`https://www.enjoei.com.br/p/${product.path}`">
              <img :src="`https://photos.enjoei.com.br/${product.path}/800x800/${product.photo.image_public_id}`" alt="" >
            </a>
            <div class="top-right" v-show="product.price.current<product.price.original">{{getPercentage(product)}}% off</div>
            <div class="bottom-left">R$:{{product.price.current}} <span v-show="product.price.current<product.price.original" style="text-decoration: line-through;">R$:{{product.price.original}}</span></div>
          </div>
          <div class="pag">
            <section>
              <b-button
                  :disabled="current < 1"
                  v-on:click="nextPage(-1)"
                  icon-left="arrow-left">
                  anterior
              </b-button>
              <b-button icon-right="arrow-right" class="next"  v-on:click="nextPage(1)">
                  próxima
              </b-button>
            </section>
          </div>
        </div>
          <div class="no-find" v-show="!products.length && awaitRender">
            <div class="no-find-text">
              <span style="font-weight: bold; color: black">ué, não encontramos </span> nadinha que tal fazer uma nova busca?<br>
              <b-button class="no-find-btn"  v-on:click="cleanSearch">
                  limpar busca
              </b-button>
            </div>
          </div>
          <img v-show="!products.length && awaitRender" class="no-find-img" src="https://assets1.enjoei.com.br/assets/20170302/web/components/product-feed/blank-slate-c2590bd7dc794737c9ff03e7a732f34c2a0046aee1adeb1f0123de289d618d6d.png" alt="logo">
         </div>
       <section>
        <b-notification :closable="false">
            <b-loading :is-full-page="isFullPage" v-model="isLoading" :can-cancel="true"></b-loading>
        </b-notification>
    </section>
  </div>
</template>
<script>

import axios from 'axios'

export default {
  data () {
    return {
      products: [],
      all_products: [],
      current: 0,
      isLoading: false,
      isFullPage: true,
      awaitRender: false,
      search: ''
    }
  },
  created () {
    if (!localStorage.getItem('token')) {
      this.$router.push('/')
    }
    this.getProducts(this.current, '')
    this.nextPage(1)
  },
  methods: {
    logout () {
      console.log('remove')
      localStorage.removeItem('token')
      this.$router.push('/')
    },
    searchByWord () {
      this.current = 0
      this.isLoading = true
      this.awaitRender = false
      this.getProducts(this.current, this.search)
    },
    cleanSearch () {
      this.search = ''
      this.current = 0
      this.awaitRender = false
      this.getProducts(this.current, '')
    },
    getPercentage (product) {
      const perce = ((product.price.current / product.price.original) * 100)
      return Math.floor(100 - perce)
    },
    nextPage (page) {
      this.isLoading = true
      this.awaitRender = false
      this.current = this.current + page
      const tempProducts = [...this.all_products]
      this.products = tempProducts.splice(this.current * 25, 25)
      this.finishLoad()
    },
    finishLoad () {
      setTimeout(() => {
        this.isLoading = false
        this.awaitRender = true
      }, 3000)
    },
    getProducts (page, search) {
      this.isLoading = true
      axios.post('https://enjusearch.enjoei.com.br/graphql-search', {
        query: `
          query searchProducts(
            $term: String!,
            $first: Int,
            $after: String
          ) {
            search(products: {
              term: $term
            }) {
              products(first: $first, after: $after) {
                total
                edges {
                  cursor
                  node {
                    id
                    path
                    photo {
                      image_public_id
                    }
                    title {
                      name
                    }
                    brand {
                      displayable_name
                    }
                    price {
                      original
                      current
                    }
                  }
                }
              }
            }
          }
        `,
        variables: {
          term: search,
          first: 2000
        }
      }).then((response) => {
        const { data } = response.data
        const { search } = data
        const { products } = search
        this.all_products = products.edges.map((res) => {
          return res.node
        })
        const tempProducts = [...this.all_products]
        this.products = tempProducts.splice(page * 25, 25)
        this.finishLoad()
      })
    }
  }
}
</script>
<style lang="css">
.toasted-container {
    display: none;
}
.logout {
  margin-left: 90%;
  color: black;
}
.no-find-btn {
  background-color: #F494B1;
  color: white;
  margin-top: 10px;
  margin-bottom: 60px;
}
.no-find {
  margin-left: 35%;
  margin-top: 5%;
  width: 100%;
  color: #F494B1;
  text-align: center;
}
.no-find-img {
  margin-left: 25%;
  width: 50%;
}
.no-find-text {
  width: 30%;
  text-align: center;
  font-size: 20px;
}
.notification {
  background-color: white;
}
body {
  font-family: 'Sunflower', sans-serif;
}
.top-right {
  padding: 3px;
  position: absolute;
  top: 15px;
  right: 16px;
  color: white;
  border-radius: 3px;
  background-color: red;
  opacity: 0.7;
}
.bottom-left {
  padding: 3px;
  position: absolute;
  bottom: 15px;
  left: 13px;
  border-radius: 3px;
  background-color: white;
}
.pag {
  clear: both;
  text-align: center;
  padding-top: 25px;
}
.pag .next{
  margin-left: 80px;
}
.cont {
  margin-left: 15px;
  font-weight: bold;
}
.store {
  margin-top: 20px;
  margin-bottom: 100px;
  margin-left: 15px;
}
.pagination {
    justify-content: center;
}
.pagination-list {
  display: none;
}
.item {
  width: 20%;
  float: left;
  padding: 10px;
  position: relative;
}
.item img {
  border-radius: 5px;
}
.control.has-icons-left .icon, .control.has-icons-right .icon {
  color: #dbdbdb;
  height: 3.5em;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 3.5em;
  z-index: 4;
}
.item-seanch-one {
  margin-top: 3px;
  font-size: 20px;
  display: none;
}
.navbar input {
  height: 50px;
}
  hr {
    margin: 0px;
  }

.is-fluid {
  padding-left: 10px;
}
@media screen and (max-width: 1025px) {
  .navbar input {
    width: 200%;
  }
  .navbar-menu {
    box-shadow: 0 0px 0px rgba(10, 10, 10, 0.1);
    display: block;
  }
  .navbar-end {
    display: flex;
  }
  .clean {
    margin-top: 10px;
  }
  .no-find-img {
  margin-left: 0%;
  width: 100%;
}
.no-find {
  margin-left: 5%;
  margin-top: 5%;
  width: 100%;
  color: #F494B1;
  text-align: left;
}
.no-find-text {
  width: 70%;
  text-align: left;
  font-size: 35px;
}
}@media screen and (max-width: 991px) {
  .item {
    width: 33%;
  }
}
@media screen and (max-width: 769px) {
  .cont {
    display: none;
  }
  .navbar {
    justify-content: start;
    margin-left: 40px;
  }
}
@media screen and (max-width: 415px) {
.no-find-img {
  margin-left: 0%;
  width: 100%;
}
.no-find {
  margin-left: 5%;
  margin-top: 5%;
  width: 100%;
  color: #F494B1;
  text-align: left;
}
.no-find-text {
  width: 70%;
  text-align: left;
  font-size: 20px;
}
.top-right {
  top: 8px;
  right: 7px;
}
.bottom-left {
  bottom: 8px;
  left: 8px;
}
  body {
    font-size: 12px;
  }
  .columns:not(:last-child) {
    margin-bottom: 0px;
  }
  .item {
    width: 50%;
    float: left;
    padding: 2px;
  }
  .is-fluid {
    padding-left: 0px !important;
  }
  .input-search {
    padding: 0px;
 }
  .navbar-brand {
    display: none;
  }
  .navbar{
    flex-wrap: nowrap;
    box-shadow: 0 0px 0px rgba(10, 10, 10, 0.1);
    margin-left: 0px;
  }
  .navbar input {
    width: 95%;
  }
  .navbar .clean {
    color: black;
    margin-top: 10px;
    margin-left: 0px;
  }
  .navbar-end {
    display: inline-flex;
  }
  .control.has-icons-left .icon, .control.has-icons-right .icon {
    color: #dbdbdb;
    height: 3.5em;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 3.5em;
    z-index: 4;
  }
  .item-seanch-two {
    display: none ;
  }
  .item-seanch-one {
    display: inline;
    padding: 0px;
    font-size: 15px;
  }
}
</style>
