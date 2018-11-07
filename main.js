var app = new Vue({

    el: ".app",
    data(){
        return{
            title: "hey",
            apiData: [],
            search: "",
        }
    },

    computed: {
        filteredSearch: function(){
            return this.apiData.filter((data)=>{
                return data.name.toLowerCase().match(this.search);
            })
        }
    },
    
    methods: {
        getAPI(){
            fetch("https://api.github.com/users/renabil/repos")
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