<template>
  <section class="section section-general section-contactame pb-10" id="contactame">
    <div class="mask-water-title mask-water-title mask-right reveal-mask">
      <span class="block"> Contáctame </span>
    </div>
    <div class="content-columns grid grid-cols-1 md:grid-cols-2 mt-10 gap-4 reveal-content">
      <div class="column-left">
        <div class="contact-list mb-16">
          <div class="contact-ico">
            <UilPhone size="35px" class="mb-3" />
          </div>
          <div class="contact-text mb-2">Mi teléfono</div>
          <div class="contact-value">+51 997 475 659</div>
        </div>
        <div class="contact-list">
          <div class="contact-ico">
            <UilEnvelope size="35px" class="mb-3" />
          </div>
          <div class="contact-text mb-2">Mi correo electrónico</div>
          <div class="contact-value">josefc9512@gmail.com</div>
        </div>
      </div>
      <div class="column-right">
        <vue-form :state="formstate" @submit.prevent="onSubmit" class="grid grid-cols-2 gap-4 form-general mt-8">
          <validate tag="label" class="form-model">
            <input
              v-model="model.name"
              required
              name="name"
              placeholder="Nombre completo"
              class="w-full form-general-input cursor-hidden"
            />
            <field-messages name="name" class="messages">
              <template slot="required" slot-scope="state">
                <span v-if="state.$touched || state.$submitted"> Nombre es importante </span>
              </template>
            </field-messages>
          </validate>

          <validate tag="label" class="form-model">
            <input
              v-model="model.email"
              name="email"
              type="email"
              required
              placeholder="Correo electrónico"
              class="w-full form-general-input cursor-hidden"
            />
            <field-messages name="email" class="messages">
              <template slot="required" slot-scope="state">
                <span v-if="state.$touched || state.$submitted"> Correo es importante </span>
              </template>
              <template slot="email" slot-scope="state">
                <span v-if="state.$touched || state.$submitted"> El formato de correo es incorrecto </span>
              </template>
            </field-messages>
          </validate>

          <validate tag="label" class="col-span-2 form-model">
            <textarea
              v-model="model.message"
              name="message"
              required
              placeholder="Tu mensaje"
              class="w-full form-general-input textarea cursor-hidden"
              wrap="off"
            />
            <field-messages name="message" class="messages">
              <template slot="required" slot-scope="state">
                <span v-if="state.$touched || state.$submitted"> Tu mensaje es importante </span>
              </template>
            </field-messages>
          </validate>

          <div class="col-span-2 mt-5">
            <button type="submit" class="submit cursor-link">Enviar</button>
          </div>
        </vue-form>
      </div>
    </div>
  </section>
</template>

<script>
import { UilPhone, UilEnvelope } from '@iconscout/vue-unicons'

export default {
  data() {
    return {
      formstate: {},
      model: {
        name: '',
        email: '',
        message: '',
      },
    }
  },
  methods: {
    onSubmit: function () {
      if (this.formstate.$invalid) {
        // alert user and exit early
        return
      }
      // otherwise submit form
    },
  },
  components: {
    UilPhone,
    UilEnvelope,
  },
}
</script>

<style lang="scss">
.contact {
  &-text {
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
  }
  &-value {
    color: #575757;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
  }
}
.form {
  &-model {
    position: relative;
    padding-bottom: 1.5rem;
  }
  &-general {
    position: relative;
    .submit {
      background: #333333;
      border-radius: 2px;
      display: flex;
      padding: 10px 25px;
      font-weight: bold;
      font-size: 14px;
      line-height: 21px;
      transition: opacity 0.5s;
      &:hover {
        opacity: 0.5;
      }
    }
    .messages {
      position: absolute;
      line-height: 21px;
      bottom: 0;
      color: #f00;
      font-size: 10px;
      font-weight: normal;
    }
    &-input {
      padding: 10px 0;
      background: transparent;
      border-bottom: 1px solid #575858;
      &.textarea {
        resize: none;
        white-space: nowrap;
        overflow-x: auto;
        height: 45px;
      }
      &::placeholder {
        font-weight: normal;
        font-size: 14px;
        line-height: 21px;
        color: #575858;
      }
    }
  }
}
</style>
