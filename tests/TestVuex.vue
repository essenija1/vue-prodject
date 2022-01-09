<template>
    <div>
       <input v-model="propComp" name="test" />
    <button @click="onSave" name="save">Save</button>
    </div>
</template>

<script>
import {mapActions, mapMutations} from 'vuex'
export default {
    name: "TestVuex",
    data () {
        return {
            propComp: ''
        }
    },
    methods: {
        ...mapMutations(['addData']),
        onSave() {
            this.addData(this.propComp)
        }
    }

}

</script>
<style></style>
