    <template>
  <section>
    <h2>Registrar nuevo personal</h2>
    <PersonalForm />

    <h2 style="margin-top: 2rem;">Personal Registrado</h2>
    <PersonalTable />
  </section>
</template>

<script setup>
import PersonalForm from '../components/PersonalForm.vue'
import PersonalTable from '../components/PersonalTable.vue'
</script>

<style scoped>
h2 {
  color: #592bcf;
}
section {
  max-width: 900px;
  margin: 2rem auto;
  padding: 0 1rem;
}
</style>
