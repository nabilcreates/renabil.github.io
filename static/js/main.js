let app = new Vue({
    el: '.app',

    data() {
        return {
            api_data: [],
            search: '',
        }
    },

    methods: {
        fetch_api() {
            fetch('https://api.github.com/users/renabil/repos?sort=recent&per_page=1000')
                .then(response => response.json())
                .then(json => {
                    this.api_data = json
                })
        }
    },

    computed: {
        results: function(){
            return this.api_data.filter((item) => {
                return item.name.match(this.search)
            })
        }
    },

    created(){
        this.fetch_api()
    }

})