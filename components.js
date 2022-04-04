Vue.component("tasklist",{
  template: `
  <div>
  <task v-for="task in tasks">{{task.task}}</task>
  </div>`,
  data(){
    return {
      tasks: [
        {task:'Go to the store', complete: false},
        {task:'Go to the bank', complete: true},
        {task:'Go somewhere', complete: false},
        {task:'Lala', complete: true},
      ]
    }

  }
});

Vue.component("task",{
  template: '<li><slot></slot></li>',
  // data(){
  //   return {
  //     message: 'foobar'
  //   };

});


// adding a more complex component with props and template
Vue.component("new-message",{
  props:['title', 'body'],
  data() {
    return {
      isVisible: true
    };

  },
  template: `<article class="message" v-show='isVisible'>
      <div class="message-header">
        {{title}}
      </div>
      <div class="message-body">
        {{body}}
      </div>
      <button type='button' @click='isVisible = false'>X</button>
    </article>`
  ,

//   methods: {
// hideModal() {
//   this.isVisible = false;
// }

});

// adding a modal and behaviour
Vue.component("modal", {

template: `
<div class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-content">
    <div class="box">
    <slot></slot>
    </div>
  </div>
  <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
</div>

`

});
new Vue({
  el: '#root',
  data: {
    showModal: false,
  }
});
