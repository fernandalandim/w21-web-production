const app = Vue.createApp ({
    data: function () {
        return {
            message: "Hello Vue!",
            link: "https://vuejs.org"
        }
    }
})

// mount() Just like "get element by id" in vanilla JS
// to retrieve a div with the id of "app"
// app is a variable + mount()
const vm = app.mount("#app")