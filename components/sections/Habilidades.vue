<template>
  <section class="section section-general section-hablidades">
    <div class="mask-water-title mask-water-title mask-left">
      <span class="block"> Habilidades </span>
    </div>
    <!-- Frontend -->
    <div class="title-ov mb-16">Frontend</div>
    <div class="charts-list flex justify-center flex-wrap" id="charts-list">
      <Chart
        v-for="(skill, index) in skills.frontend"
        :key="index"
        :porcent="skill.porcent"
        :deg="skill.deg"
        :name="skill.name"
      />
    </div>
    <!-- Backend -->
    <div class="title-ov mb-16">Backend</div>
    <div class="charts-list flex justify-center flex-wrap">
      <Chart
        v-for="(skill, index) in skills.backend"
        :key="index"
        :porcent="skill.porcent"
        :deg="skill.deg"
        :name="skill.name"
        :class="[index == skills.backend.length - 1 ? 'mb-0' : '']"
      />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      skills: {
        frontend: [
          {
            name: 'HTML',
            porcent: 100,
            deg: 90,
          },
          {
            name: 'CSS 3',
            porcent: 90,
            deg: 54,
          },
          {
            name: 'SCSS - LESS',
            porcent: 90,
            deg: 54,
          },
          {
            name: 'JavaScript',
            porcent: 80,
            deg: 18,
          },
          {
            name: 'Vue JS',
            porcent: 80,
            deg: 18,
          },
          {
            name: 'Angular',
            porcent: 40,
            deg: 54,
          },
          {
            name: 'React JS',
            porcent: 65,
            deg: -36,
          },
          {
            name: 'WordPress',
            porcent: 100,
            deg: 90,
          },
        ],
        backend: [
          {
            name: 'PHP - Laravel',
            porcent: 90,
            deg: 54,
          },
          {
            name: 'Node JS',
            porcent: 90,
            deg: 54,
          },
          {
            name: 'MySQL',
            porcent: 90,
            deg: 54,
          },
          {
            name: 'Mongo DB',
            porcent: 30,
            deg: 18,
          },
          {
            name: 'Firebase',
            porcent: 30,
            deg: 18,
          },
        ],
      },
    }
  },
  mounted() {},
}
</script>

<style lang="scss">
.title-ov {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
}
</style>
