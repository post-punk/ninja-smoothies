<template>
  <div class="index container">
    <div class="card" v-for="(smoothie, index) in smoothies" :key="index">
      <div class="card-content">
        <i class="material-icons delete" @click="deleteSmoothie(index)">delete</i>
        <h2 class="indigo-text">{{ smoothie.title }}</h2>
        <ul class="ingredients">
          <li v-for="(ing, index) in smoothie.ingredients" :key="index">
            <span class="chip">{{ ing }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      smoothies: [
        {
          title: "Ninja Brew",
          slug: "ninja-brew",
          ingredients: ["bananas", "coffee", "milk"],
          id: '1'
        },
        {
          title: 'Morning Wood',
          slug: 'morning-mood',
          ingredients: ['mango', 'lime', 'juice'],
          id: '2'
        },
        {
          title: 'asa sdadsasd',
          slug: 'morning-mood',
          ingredients: ['mango', 'lime', 'juice'],
          id: '3'
        }
      ]
    };
  },
  methods: {
    deleteSmoothie(id) {
      this.smoothies = this.smoothies.filter(smoothie => {
        return smoothie.id != id
      })
      // console.log(this.smoothies);
      // this.smoothies.splice(stogod, 1);

    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.index {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 60px
}
.index h2 {
  font-size: 1.8em;
  text-align: center;
  margin-top: 0px
}
.index .ingredients {
  margin: 30px auto;
}
.index .ingredients li {
  display: inline-block
}
.index .delete {
  position: absolute;
  top: 4px;
  right: 4px;
  cursor: pointer;
  color: #aaa;
  font-size: 1.4em
}
</style>
