<template>
<div class="context" v-if="isShow" :style="styles">
    <div class="context_item" 
    v-for="item, idx in items" 
    :key="idx" 
    @click="onClick(item)">
        {{ item.text }}
    </div>
</div>
</template>
<script>

export default {
   name: "ContextMenu",
    data() {
        return {
            isShow: false,
            items: [],
            xPos: 0,
            yPos: 0,
        };
    },
    methods: {
        onClick(item){
            item.action();
            this.$context.close();
        },
        onClose() {
            this.items = [];
            this.isShow = false;
        },
        onShow({ items, caller }) {
            this.items = items;
            this.isShow = true;
            this.setPosition(caller)

        },
       setPosition(caller) {
           const pos = caller.getBoundingClientRect();
           this.xPos = pos.left, 
           this.yPos = pos.top
       },
    },
        computed: {
            styles() {
                return {
                    top: `${this.yPos + 10}px`,
                    left: `${this.xPos + 20}px`,
                }
            }
      },
      mounted () {
        this.$modal.Eventbus.$on('show', this.onShow)
        this.$modal.Eventbus.$on('hide', this.onClose)
  },
     beforeDestroy () {
       this.$modal.Eventbus.$off('show', this.onShow)
       this.$modal.Eventbus.$off('hide', this.onClose)
  },
  };

</script>

<style lang="scss" scoped>
.context {
    position: absolute;
    background: white;
    cursor: pointer;
}
    
</style>
