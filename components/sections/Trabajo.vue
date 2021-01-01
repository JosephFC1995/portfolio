<template>
  <section class="section section-general section-trabajo" id="trabajo">
    <div class="mask-water-title mask-water-title mask-right reveal-mask">
      <span class="block"> Trabajo </span>
    </div>
    <div class="content-columns grid grid-cols-1 md:grid-cols-2 mt-4 gap-4 reveal-content">
      <div class="column-left">
        <div class="text-top">¿Por qué elegirme?</div>
        <div class="text-bottom">
          Solo algunos de los clientes que
          <u class="cursor-zoom">confiaron</u> en mi.
        </div>
      </div>
      <div class="column-right">
        <div class="job mt-10" :class="[hoverJob != null ? 'selected-now' : '']">
          <div
            class="jobs job-list flex"
            v-for="(job, index) in jobs"
            :key="index"
            @mouseenter="hoverJob = index"
            @mouseleave="hoverJob = null"
            :class="[hoverJob == index ? 'active' : '']"
          >
            <div class="job-date mr-10">{{ job.date }}</div>
            <div class="job-info flex-1">
              <div class="job-name">{{ job.name }}</div>
              <div class="job-position">{{ job.position }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      hoverJob: null,
      jobs: [
        {
          date: '2017 - 2018',
          name: 'CCM Refriaire',
          position: 'Auxiliar administrativo',
        },
        {
          date: '2018 - 2018',
          name: 'RBM Import',
          position: 'Desarrollador Web Freelancer',
        },
        {
          date: '2019 - 2019',
          name: 'Krear 3D',
          position: 'Desarrollador Web Freelancer',
        },
        {
          date: '2019 - 2019',
          name: 'Tribunal Constitucional del Perú',
          position: 'Desarrollador Fronted y Backend',
        },
        {
          date: '2018 - 2019',
          name: 'Somos Sistemas SAC',
          position: 'Desarrollador Fullstack',
        },
        {
          date: '2020 - 2020',
          name: 'Tribunal Constitucional',
          position: 'Desarrollador Fronted y Backend',
        },
        {
          date: '2020 - 2020',
          name: 'Algoritmo Creativo - Rubik',
          position: 'Desarrollador Fronted y Backend',
        },
      ],
    }
  },
  methods: {},
}
</script>

<style lang="scss">
.column {
  &-left {
    .text {
      &-top {
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color: #575757;
        @media (max-width: 768px) {
          font-size: 14px;
          line-height: 20px;
        }
      }
      &-bottom {
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 54px;
        color: #ffffff;
        @media (max-width: 768px) {
          font-size: 24px;
          line-height: 36px;
        }
      }
    }
  }
  &-right {
    .job {
      &-list {
        margin: 1rem 0;
        padding: 1rem 0;
        &:first-child {
          margin-top: 0;
          padding-top: 0;
        }
        transition: opacity 0.35s;
        &.active {
          opacity: 1 !important;
        }
      }
      &-date {
        font-weight: bold;
        font-size: 18px;
        line-height: 27px;
        color: #ffffff;
        padding-top: 5px;
        @media (max-width: 768px) {
          font-size: 14px;
          line-height: 18px;
        }
      }
      &-name {
        font-weight: bold;
        font-size: 24px;
        line-height: 36px;
        @media (max-width: 768px) {
          font-size: 18px;
          line-height: 24px;
        }
      }
      &-position {
        font-size: 14px;
        line-height: 21px;
        color: #575757;
        @media (max-width: 768px) {
          font-size: 12px;
          line-height: 16px;
        }
      }
      &.selected-now {
        .job-list {
          opacity: 0.3;
        }
      }
    }
  }
}
</style>
