var app = new Vue({
    el: '#app',
    data: {
      cds: [],
      cdsFilter: [],
      actualGenre: 'all',
    },
    mounted: function () {
      axios.get('https://flynn.boolean.careers/exercises/api/array/music')
      .then (result => {
        this.cds = result.data.response;
        this.filterGenre();
      })
    },
    methods: {
      filterGenre: function () {
        if (this.actualGenre !== 'all') {
          this.cdsFilter = this.cds.filter( cd => cd.genre.toLowerCase() === this.actualGenre );
        }else {
          this.cdsFilter = this.cds;
        }
      }
    }
});
