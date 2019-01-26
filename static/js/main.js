let app = new Vue({
    el: '.app',

    data() {
        return {
            api_data: [],
        }
    },

    methods: {
        fetch_api() {
            fetch('https://api.github.com/users/renabil/repos?per_page=100')
                .then(response => response.json())
                .then(json => {
                    this.api_data = json
                })
        }
    },

    created(){
        this.fetch_api()
    }

})