<script setup>
import {getURI} from 'fetchapimethods'
const { data, error, pending, refresh } = await useFetch('/api/todos')
/*<script setup>
const { data, pending, error, refresh } = await useFetch('/api/modules');

if (pending.value) {
  // Show loading indicator
}

if (error.value) {
  // Handle error
  console.error('Error fetching data:', error.value);
}

function handleRefresh() {
  // Manually trigger data refresh
  refresh();
}
</script>


const param1 = ref('value1')
const { data, pending, error, refresh } = await useFetch('/api/modules', {
  query: { param1, param2: 'value2' }
})*/
</script>