<template>
  <section class="fileload">
    <ul>
      <li class="edit-upload-in">
        <span>
          <i class="fa fa-plus"></i>
        </span>
      </li>
      <li v-for="item in items" >
        <span>
          <img src="http://127.0.0.1:8000/trans.png" />
          <em>
            <i class="fa fa-minus-circle"></i>
          </em>
        </span>
      </li>
    </ul>
  </section>
</template>
<script>
  export default { };
</script>