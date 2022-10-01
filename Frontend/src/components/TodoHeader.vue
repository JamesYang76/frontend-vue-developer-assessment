<template>
  <div class="row">
    <div class="col">
      <img src="clearPointLogo.png" class="img-fluid rounded" />
    </div>
  </div>
  <div class="row">
    <div class="col">
      <div class="alert alert-success">
        <h4 class="alert-heading">Todo List App</h4>
        Welcome to the ClearPoint frontend technical test. We like to keep things simple, yet clean so your task(s)
        are as follows:
        <br />
        <br />
        <ol className="list-left">
          <li>Add the ability to add (POST) a Todo Item by calling the backend API</li>
          <li>Display (GET) all the current Todo Items in the below grid and display them in any order you wish</li>
          <li>
            Bonus points for completing the 'Mark as completed' button code for allowing users to update and mark a
            specific Todo Item as completed and for displaying any relevant validation errors/ messages from the API
            in the UI
          </li>
          <li>Feel free to add unit tests and refactor the component(s) as best you see fit</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<style scoped>
.list-left {
  text-align: left;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
