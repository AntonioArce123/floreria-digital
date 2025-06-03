<template>
  <form @submit.prevent="onSubmit" class="personal-form">
    <div>
      <label for="nombre">Nombre:</label>
      <input id="nombre" v-model="nombre" type="text" required />
    </div>
    <div>
      <label for="direccion">Dirección:</label>
      <input id="direccion" v-model="direccion" type="text" required />
    </div>
    <div>
      <label for="telefono">Teléfono:</label>
      <input id="telefono" v-model="telefono" type="tel" required />
    </div>
    <div>
      <label for="estatus">Estatus:</label>
      <select id="estatus" v-model="estatus" required>
        <option value="Activo">Activo</option>
        <option value="Inactivo">Inactivo</option>
      </select>
    </div>
    <button type="submit">Agregar</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const nombre = ref('')
const direccion = ref('')
const telefono = ref('')
const estatus = ref('Activo')

const onSubmit = async () => {
  try {
    const nuevoPersonal = {
      nombre: nombre.value,
      direccion: direccion.value,
      telefono: telefono.value,
      estatus: estatus.value,
    }
    await axios.post('http://localhost:3000/api/personal', nuevoPersonal)
    alert('Personal agregado con éxito')
    // Limpiar formulario
    nombre.value = ''
    direccion.value = ''
    telefono.value = ''
    estatus.value = 'Activo'
    // Emitir evento para actualizar lista (lo manejamos en vista)
    window.dispatchEvent(new Event('personal-agregado'))
  } catch (error) {
    alert('Error al agregar personal')
    console.error(error)
  }
}
</script>

<style scoped>
.personal-form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  gap: 10px;
}
label {
  font-weight: bold;
}
input, select, button {
  padding: 5px;
  font-size: 1em;
}
button {
  cursor: pointer;
  background-color: #7b3fe4;
  color: white;
  border: none;
  border-radius: 4px;
}
button:hover {
  background-color: #592bcf;
}
</style>
