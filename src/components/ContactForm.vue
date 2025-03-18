<template>
  <div>
    <h1>{{ header }}</h1>
    <form @submit.prevent="submitForm" class="bg-red-200 flex justify-center flex-col">
      <input v-model="formData.name" type="text" placeholder="Nombres y Apellidos" required />
      <input v-model="formData.email" type="email" placeholder="Correo electrónico" required />
      <input v-model="formData.phoneNumber" type="tel" placeholder="Numero de Celular" requred />
      <button type="submit" class="button cursor-pointer">Agregar Usuario</button>
    </form>
    <!-- Añadir un captcha en la lista de correos https://inyomanjyotisa.medium.com/google-recaptcha-in-vuejs-73f78b6c3bae-->
    <!-- Mostrar la lista de usuarios -->
    <div v-if="users.length > 0">
      <h2>Usuarios Registrados:</h2>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.name }} - {{ user.age }} años - {{ user.email }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const header = ref('Formulario de Registro de Usuarios')

// Estado reactivo para los datos del formulario
const formData = ref({
  name: '',
  email: '',
  phoneNumber: 0,
})

// Estado reactivo para la lista de usuarios
const users = ref([])

// Función para agregar nuevos usuarios
const newUser = (user) => {
  // Validamos que el usuario tenga los campos requeridos
  if (user.name && user.age && user.email) {
    // Generamos un id único basado en la longitud del array users
    const newId = users.value.length

    // Verificamos si el usuario ya existe en el array users (por email)
    const userExists = users.value.some((existingUser) => existingUser.email === user.email)

    // Si el usuario no existe, lo agregamos al array users
    if (!userExists) {
      const inputNewUser = { id: newId, ...user }
      users.value.push(inputNewUser)
      console.log('Usuario agregado:', inputNewUser)
    } else {
      console.log('Error: El usuario ya existe.')
    }
  } else {
    console.log('Error: Faltan campos requeridos.')
  }
}

// Función para manejar el envío del formulario
const submitForm = () => {
  // Llamamos a la función newUser con los datos del formulario
  newUser({ ...formData.value })

  // Limpiamos el formulario después de agregar el usuario
  formData.value = {
    name: '',
    email: '',
    phoneNumber: 0,
  }
}
</script>

<style scoped></style>
