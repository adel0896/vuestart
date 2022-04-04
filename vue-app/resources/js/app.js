// require('./bootstrap');
import Vue from 'vue';
import Axios from 'axios';
import Errors from './core/errors';
import Example from './components/Example';

window.axios = Axios;
new Vue({
  el: '#app',
  components: {
    Example
  },
  // data : {
  //   skills: []
  // },
  // mounted() {
    // make an ajax requiest to our servers - /skills
    // axios.get('skills').then(response => this.skills = response.data);
  // }
  data: {
    name: "",
    description:"",
    errors: new Errors()
  },
  methods: {
    onSubmit() {
      axios.post("/projects", this.$data)
      .then(response => alret('succes'))
      .catch(error => this.errors.record(error.response.data));
    }
  }
});
