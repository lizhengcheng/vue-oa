<template> 
	<div>
		<router-link :to="subrouter" >
			<i class="fa" :class="forumicon"></i>
			<span>{{ forumtitle }}</span>
		</router-link>
	</div> 
</template>
<script>
  export default{
    props: {
      subrouter: String,
      forumicon: String,
      forumtitle: String
    }
  };
</script>
