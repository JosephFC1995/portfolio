<template>
  <div class="grid gap-4 grid-cols-4 mt-10">
    <div v-if="currentPage === 1" :class="disabledStyle">
      <UilAngleDoubleLeft size="25px" />
    </div>

    <a v-else :to="{ name: 'blog-page-page', params: { page: 1 } }" @click="$emit('page', 1)" :class="buttonStyles">
      <UilAngleDoubleLeft size="25px" />
    </a>

    <div v-if="currentPage === 1" :class="disabledStyle">
      <UilAngleLeft size="25px" />
    </div>

    <a v-else :to="{ name: 'blog-page-page', params: { page: prevPage } }" @click="$emit('page', prevPage)" :class="buttonStyles">
      <UilAngleLeft size="25px" />
    </a>

    <div v-if="currentPage === totalPages" :class="disabledStyle">
      <UilAngleRight size="25px" />
    </div>

    <a v-else :to="{ name: 'blog-page-page', params: { page: nextPage } }" @click="$emit('page', nextPage)" :class="buttonStyles">
      <UilAngleRight size="25px" />
    </a>

    <div v-if="currentPage === totalPages" :class="disabledStyle">
      <UilAngleDoubleRight size="25px" />
    </div>

    <a
      v-else
      :to="{ name: 'blog-page-page', params: { page: totalPages } }"
      @click="$emit('page', totalPages)"
      :class="buttonStyles"
    >
      <UilAngleDoubleRight size="25px" />
    </a>
  </div>
</template>

<script>
import DoubleFwd from '@/components/elements/svg/DoubleFwd'
import DoubleBack from '@/components/elements/svg/DoubleBack'
import SingleFwd from '@/components/elements/svg/SingleFwd'
import SingleBack from '@/components/elements/svg/SingleBack'
import { UilAngleDoubleLeft, UilAngleDoubleRight, UilAngleLeft, UilAngleRight } from '@iconscout/vue-unicons'

export default {
  components: {
    DoubleFwd,
    DoubleBack,
    SingleFwd,
    SingleBack,
    UilAngleDoubleLeft,
    UilAngleDoubleRight,
    UilAngleLeft,
    UilAngleRight,
  },
  props: {
    total: {
      type: Number,
      default: 0,
    },
    perPage: {
      type: Number,
      default: 5,
    },
    page: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    buttonStyles() {
      return 'border rounded px-4 py-1 text-sm bg-transparent	 flex justify-center items-center sm:uppercase hover:bg-white hover:text-black transform duration-500 ease-in-out'
    },
    disabledStyle() {
      return 'border rounded px-4 py-1 text-sm bg-transparent	opacity-25 flex justify-center items-center sm:uppercase text-gray-300'
    },
    totalPages() {
      return Math.ceil(this.total / this.perPage)
    },
    currentPage() {
      return parseInt(this.page) || 1
    },
    prevPage() {
      return this.currentPage > 1 ? this.currentPage - 1 : 1
    },
    nextPage() {
      return this.currentPage < this.totalPages ? this.currentPage + 1 : this.totalPages
    },
  },
}
</script>
