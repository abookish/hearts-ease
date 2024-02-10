<script setup>
import * as fetchapimethods from fetchapimethods
const uri = fetchapimethods.getURI()
const { data, error, pending, refresh } = await useFetch('/api/todos')

</script>