<template>
  <section class="section section-general section-portafolio" id="portafolio">
    <div class="mask-water-title mask-water-title mask-left reveal-mask">
      <span class="block"> Portafolio </span>
    </div>
    <div class="content-columns mt-4 gap-4 reveal-content">
      <div class="porfolio mt-10 grid grid-cols-1 md:grid-cols-3" :class="[hoverJob != null ? 'selected-now' : '']">
        <div
          class="porfolio porfolio-list"
          v-for="(job, index) in portfolios"
          :key="index"
          @mouseenter="hoverJob = index"
          @mouseleave="hoverJob = null"
          :class="[hoverJob == index ? 'active' : '']"
        >
          <div class="porfolio-info flex-1">
            <div class="porfolio-name">
              <a :href="job.link" target="_blank" class="porfolio-link cursor-link" v-if="job.link">
                {{ job.name }}
              </a>
              <span class="porfolio-link cursor-link" v-else>
                {{ job.name }}
              </span>
            </div>
            <div class="porfolio-position">{{ job.position }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { UilAirplay } from '@iconscout/vue-unicons'

export default {
  components: {
    UilAirplay,
  },
  data() {
    return {
      hoverJob: null,
      portfolios: [
        {
          name: 'RBM import',
          position: 'WordPress - HTML 5 - JS - Css3 - MySQL',
          link: 'http://rbmimport.com/',
        },
        {
          name: 'VirtualDent',
          position: 'WordPress - HTML 5 - JS - Css3 - MySQL',
          link: 'https://virtualdent.net/',
        },
        {
          name: 'AulaVirtual - TC',
          position: 'Vue JS - Nuxt JS - HTML 5 - JS - Css3 - MySQL - Laravel',
          link: 'https://aulavirtual.sedetc.gob.pe/administracion',
        },
        {
          name: 'WOW Travel',
          position: 'WordPress - HTML 5 - JS - Css3 - MySQL',
          link: 'https://wowtravel.com.pe/',
        },
        {
          name: 'Portal WEB - TC',
          position: 'WordPress - HTML 5 - JS - Css3 - MySQL',
          link: 'https://www.tc.gob.pe/',
        },
        {
          name: 'Hattbo (StartUp privado)',
          position: 'Vue JS - Nuxt JS - HTML 5 - JS - Css3 - MySQL - Node JS',
          link: null,
        },
        {
          name: 'Senati Admisión',
          position: 'HTML 5 - JS - Css3 - MySQL - Laravel',
          link: 'https://www.senati.edu.pe/admision',
        },
        {
          name: 'Senati eventos',
          position: 'WordPress - HTML 5 - JS - Css3 - MySQL - Vue JS',
          link: 'https://eventos.senati.marketing/eventos/',
        },
        {
          name: 'Senati módulo',
          position: 'Vue JS - Nuxt JS - HTML 5 - JS - Css3 - MySQL',
          link: 'https://bitbucket.org/josefc9512/senati-modulo/src/master/',
        },
        {
          name: 'Performance Agencia',
          position: 'WordPress - HTML 5 - JS - Css3 - MySQL',
          link: 'https://github.com/JosephFC1995/performance-wp',
        },
        {
          name: 'Maestro que deja huella',
          position: 'WordPress - HTML 5 - JS - Css3 - MySQL - Vue JS',
          link: 'https://github.com/JosephFC1995/maestro-que-deja-huella-wp',
        },
        {
          name: 'San Isidro en us manos',
          position: 'Android - JAVA',
          link: 'https://play.google.com/store/apps/details?id=com.san.isidro.en.tu.mano&hl=es_PE&gl=US',
        },
        {
          name: 'Jurisprudencia',
          position: 'Vue JS - Nuxt JS - HTML 5 - JS - Css3 - MySQL - Laravel',
          link: 'https://jurisprudencia.sedetc.gob.pe/',
        },
        {
          name: 'Innova Scient',
          position: 'Vue JS - HTML 5 - JS - Css3 - MySQL - Laravel',
          link: 'https://bitbucket.org/josefc9512/innova/src/master/',
        },
        {
          name: 'Api subida de archivos',
          position: 'Express JS - JS - Css3 - MySQL - Node JS',
          link: 'https://github.com/JosephFC1995/service-demo-si',
        },
        {
          name: 'Control de pruebas de calidad',
          position: 'Vue JS - Nuxt JS - HTML 5 - JS - Css3 - MySQL - Node JS',
          link: null,
        },
        {
          name: 'JymElectro',
          position: 'WordPress - HTML 5 - JS - Css3 - MySQL',
          link: 'https://github.com/JosephFC1995/jym-electro-wp',
        },
        {
          name: 'La Reu',
          position: 'Vue JS - Quasar - HTML 5 - JS - Css3 ',
          link: 'https://github.com/JosephFC1995/la-reu',
        },
      ],
    }
  },
  methods: {},
}
</script>

<style lang="scss">
.porfolio {
  &-list {
    margin-bottom: 1.5rem;
    padding: 1rem 0;
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
    .porfolio-list {
      opacity: 0.3;
    }
  }
}
</style>
