<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

interface Personal {
  id?: number
  nombre: string
  direccion: string
  telefono: string
  estatus: number
}

// Variables reactivas
const personalLista = ref<Personal[]>([])
const nuevoPersonal = ref<Personal>({
  nombre: '',
  direccion: '',
  telefono: '',
  estatus: 1
})

const personalEditar = ref<Personal | null>(null)

// Funciones async para CRUD
const obtenerPersonal = async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/personal')
    personalLista.value = res.data
  } catch (error) {
    console.error('Error al obtener personal:', error)
  }
}

const agregarPersonal = async () => {
  try {
    await axios.post('http://localhost:3000/api/personal', nuevoPersonal.value)
    nuevoPersonal.value = { nombre: '', direccion: '', telefono: '', estatus: 1 }
    await obtenerPersonal()
  } catch (error) {
    console.error('Error al agregar personal:', error)
  }
}

const editarPersonal = (p: Personal) => {
  personalEditar.value = { ...p }
}

const cancelarEdicion = () => {
  personalEditar.value = null
}

const actualizarPersonal = async () => {
  if (!personalEditar.value?.id) return
  try {
    await axios.put(`http://localhost:3000/api/personal/${personalEditar.value.id}`, personalEditar.value)
    personalEditar.value = null
    await obtenerPersonal()
  } catch (error) {
    console.error('Error al actualizar personal:', error)
  }
}

const eliminarPersonal = async (id: number) => {
  try {
    await axios.delete(`http://localhost:3000/api/personal/${id}`)
    await obtenerPersonal()
  } catch (error) {
    console.error('Error al eliminar personal:', error)
  }
}

onMounted(() => {
  obtenerPersonal()
})
</script>

<template>
  <div>
    <h2>Registrar nuevo personal</h2>
    <form @submit.prevent="agregarPersonal">
      <div>
        <label>Nombre:</label>
        <input v-model="nuevoPersonal.nombre" required />
      </div>
      <div>
        <label>Dirección:</label>
        <input v-model="nuevoPersonal.direccion" required />
      </div>
      <div>
        <label>Teléfono:</label>
        <input v-model="nuevoPersonal.telefono" required />
      </div>
      <div>
        <label>Estatus:</label>
        <select v-model.number="nuevoPersonal.estatus">
          <option :value="1">Activo</option>
          <option :value="2">Baja</option>
        </select>
      </div>
      <button type="submit">Agregar</button>
    </form>

    <div v-if="personalEditar">
      <h2>Editar personal</h2>
      <form @submit.prevent="actualizarPersonal">
        <div>
          <label>Nombre:</label>
          <input v-model="personalEditar.nombre" required />
        </div>
        <div>
          <label>Dirección:</label>
          <input v-model="personalEditar.direccion" required />
        </div>
        <div>
          <label>Teléfono:</label>
          <input v-model="personalEditar.telefono" required />
        </div>
        <div>
          <label>Estatus:</label>
          <select v-model.number="personalEditar.estatus">
            <option :value="1">Activo</option>
            <option :value="2">Baja</option>
          </select>
        </div>
        <button type="submit">Actualizar</button>
        <button type="button" @click="cancelarEdicion">Cancelar</button>
      </form>
    </div>

    <h2>Personal Registrado</h2>
    <table border="1" cellpadding="5">
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
        <tr v-for="p in personalLista" :key="p.id">
          <td>{{ p.nombre }}</td>
          <td>{{ p.direccion }}</td>
          <td>{{ p.telefono }}</td>
          <td>{{ p.estatus === 1 ? 'Activo' : 'Baja' }}</td>
          <td>
            <button @click="editarPersonal(p)">Editar</button>
            <button @click="eliminarPersonal(p.id!)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
