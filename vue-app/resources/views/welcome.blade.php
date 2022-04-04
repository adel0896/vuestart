<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>


        <style>
        </style>

    </head>
    <body class="antialiased">

        <div id="app">
          <example></example>
          <form method="post" action="/projects" @submit.prevent="onSubmit" @keydown="errors.clear($event.target.name)">

            <div class="control">
                <label for="name" class="label">Project Name</label>
                <input type="text" id="name" name="name" class="input" v-model="name" >
                <span class='help is-danger' v-if="errors.has('name')" v-text="errors.get('name')">

            </div>

            <div class="control">
                <label for="description" class="label">Project description:</label>
                <input type="text" id="description" class="input" v-model="description">
                <span class='help is-danger' v-if="errors.has('description')" v-text="errors.get('description')">

            </div>

            <div class="control">
                <button class="button is-pimary">Create</button>
            </div>

        </form>
<!-- <ul>
  <li v-for="skill in skills" v-text="skill"></li>
</ul> -->

        </div>

        <script src="/js/app.js">

          </script>
    </body>
</html>
