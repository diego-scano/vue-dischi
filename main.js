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
      self.disks.forEach((item, i) => {
        if(!self.genres.includes(self.disks[i].genre)) {
          self.genres.push(self.disks[i].genre);
        }
      });
    })
  }
})

Vue.config.devtools = true;
