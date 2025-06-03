<template>
  <table class="personal-table">
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Dirección</th>
        <th>Teléfono</th>
        <th>Estatus</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="persona in personal" :key="persona.id">
        <td>{{ persona.nombre }}</td>
        <td>{{ persona.direccion }}</td>
        <td>{{ persona.telefono }}</td>
        <td>{{ persona.estatus }}</td>
        <td>
          <!-- Aquí podrían ir botones de editar/eliminar -->
          <button disabled title="Editar (pendiente)">✏️</button>
          <button disabled title="Eliminar (pendiente)">🗑️</button>
        </td>
      </tr>
      <tr v-if="personal.length === 0">
        <td colspan="5" style="text-align:center">No hay personal registrado</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const personal = ref([])

const cargarPersonal = async () => {
  try {
    const { data } = await axios.get('http://localhost:3000/api/personal')
    personal.value = data
  } catch (error) {
    console.error('Error al cargar personal:', error)
  }
}

onMounted(() => {
  cargarPersonal()
  window.addEventListener('personal-agregado', cargarPersonal)
})
</script>

<style scoped>
.personal-table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  border: 1px solid #ddd;
  padding: 8px;
}
th {
  background-color: #7b3fe4;
  color: white;
}
button {
  cursor: not-allowed;
  background: none;
  border: none;
  font-size: 1.1em;
}
</style>
