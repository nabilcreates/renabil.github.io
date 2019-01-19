var app = new Vue({

    el: ".app",
    data(){
        return{
            title: "hey",
            apiData: [],
            search: "",
        }
    },

    methods: {
        getAPI(){
            fetch("https://api.github.com/users/renabil/repos?sort=updated&per_page=100")
            .then(res => res.json())
            .then(json => {
                this.apiData = json
            })
        }
    },

    mounted(){
        this.getAPI()
    }
    
})