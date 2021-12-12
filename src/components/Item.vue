<template>
  <tr>
    <th scope="row">{{ item._id }}</th>
    <td>{{ item.name }}</td>
    <td>{{ item.cantidad }}</td>
    <td>
      <button class="btn btn-info btn-sm" @click="aumentar(item._id)">+</button>
      <button class="btn btn-danger btn-sm" @click="disminuir(item._id)">
        -
      </button>
    </td>
    <td>$ {{ item.price * item.cantidad }}</td>
  </tr>
</template>

<script>
import { useStore } from "vuex";
export default {
  props: ["item"],
  setup() {
    const store = useStore();
    const aumentar = (_id) => {
      store.commit("AUMENTAR", _id);
    };
    const disminuir = (_id) => {
      store.commit("DISMINUIR", _id);
    };

    return { aumentar, disminuir };
  },
};
</script>

<style>
  td{
    width: 20%;
  }
</style>
