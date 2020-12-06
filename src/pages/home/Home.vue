<template>
  <div>
    <br>
    <div class="columns is-flex is-centered">
        <figure class="image is-64x64">
          <img class = "logo" src="@/assets/logo.webp" alt="logo">
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
                  :disabled="current === 0"
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
              <span style="font-weight: bold; color: black">ué, não encontramos </span> nadinha! Que tal fazer uma nova busca?<br>
              <b-button class="no-find-btn"  v-on:click="cleanSearch">
                  limpar busca
              </b-button>
            </div>
          </div>
          <img v-show="!products.length && awaitRender" class="no-find-img" src="@/assets/notfind.png" alt="logo">
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
    this.nextPage(0)
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
