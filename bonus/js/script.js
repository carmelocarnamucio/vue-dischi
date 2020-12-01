var app = new Vue({
    el: '#app',
    data: {
        cds: [],
        actualGenre: 'all',
    },
    mounted: function () {
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then (result => {
            this.cds = result.data.response;
        })
    },
    methods: {
        filterGenre: function () {
            axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then(result => {
                let cdsList = result.data.response;
                if (this.actualGenre !== 'all') {
                    cdsList = cdsList.filter( cd => cd.genre.toLowerCase() === this.actualGenre );
                }
                this.cds = cdsList;
            })
        }
    }
});
