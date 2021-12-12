<template>
<div class="container">
      <h4>Carrito de compras</h4>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Item</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Acción</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tfoot>
            <tr id="footer">
              <th scope="row" colspan="5" v-if="Object.keys(items).length === 0" >Carrito vacío - comience a comprar!</th>
              
            </tr>
            <Footer v-if="Object.keys(items).length !== 0"/>
        </tfoot>
        <tbody id="items">
                <Item 
                v-for = "item in items" :key = "item.id"
                :item = "item"
                />
        </tbody>
        
      </table>
      
    </div>
  
</template>

<script>
import {useStore} from 'vuex'
import {computed} from 'vue'
import Item from '../components/Item.vue'
import Footer from '../components/Footer.vue'
export default {
  components: {
      Item,
      Footer
      },
    setup() {
        const store = useStore()
        const items = computed(() => store.state.carrito)
    return{items}
    }
}
</script>