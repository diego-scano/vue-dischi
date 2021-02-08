new Vue({
  el: '#root',
  data: {
    disks: [],
    genres: [],
    selected: '',
    genreFiltered: []
  },
  mounted() {
    const self = this;
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
    .then(function(resp) {
      self.disks = resp.data.response;
      self.genreFiltered = self.disks;
      self.disks.forEach((item, i) => {
        if(!self.genres.includes(self.disks[i].genre)) {
          self.genres.push(self.disks[i].genre);
        }
      });
    })
  },
  methods: {
    change: function() {
      this.genreFiltered = this.disks.filter((element, i) => {
        if(this.selected === 'All') {
          return element;
        }
        if(this.disks[i].genre === this.selected) {
          return element;
        }
      })
    }
  }
})

Vue.config.devtools = true;
