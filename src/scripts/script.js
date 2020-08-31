Vue.component('pack-block', {
  props: ["data"],
  methods: {
    to_select() {
      this.$emit('to_select');
    }
  },
  template: 
  `<div class="container" :class="[data.packNumber, data.status]">
    <div class="main-block-border" @click="to_select()">
      <div class="main-block-pack">
        <div class="pack-container">
          <p class="main-block-pack__description" v-if='data.descText'>Сказочное заморское яство</p>
          <p class="main-block-pack__description" v-else='data.descText'>Котэ не одобряет</p>
          <b class="main-block-pack__title">Нямушка</b>
          <div>
            <p class="main-block-pack__with">{{data.name}}</p>
          </div>
          <p class="main-block-pack__number">
            <b>{{data.number}}</b>
            <span> порций</span>
          </p>
          <p class="main-block-pack__present">{{data.present}}</p>
        </div>
        <div class="pack-container"> 
          <div class="main-block-pack-kg">
            <span class="main-block-pack-kg__span">{{data.kg}}</span>
            <p class="main-block-pack-kg__p"> кг</p>
          </div>
        </div>
      </div>
    </div>
    <p class='main-block__downtext' v-if='data.downText'>{{data.downtext}}</p>
    <p class='main-block__downtext' v-else>Чего сидишь? Порадуй котэ, 
      <a @click="to_select()">купи.</a>
    </p>
  </div>
  `
});

var app = new Vue ({
  el: '.main-block',
  data: {
    default: 'default',
    defaultHover: 'default-hover',
    selected: 'selected',
    selectedHover: 'selected-hover',
    disabled: 'disabled',
    packs: [
      {
        name:'фуа-гра',
        number:'10',
        present: 'мышь в подарок',
        kg: '0,5',
        downtext: 'Печень утки разварная с артишоками',
        packNumber: 'one',
        status: 'default',
        descText: true,
        downText: false
      },
      {
        name:'рыбой',
        number:'40',
        present: '2 мыши в подарок',
        kg: '2',
        downtext: 'Головы щучьи с чесноком да свежайшая сёмгушка',
        packNumber: 'two',
        status: 'default',
        descText: true,
        downText: false
      },
      {
        name:'курой',
        number:'100',
        present: '5 мышей в подарок заказчик доволен',
        kg: '5',
        downtext: 'Филе из цыплят с трюфелями в бульоне',
        packNumber: 'three',
        status: 'default',
        descText: true,
        downText: false
      }
    ]
  },
  methods: {
    toSelect(id) {
      console.log(this.packs[id].status);
      if (this.packs[id].status == this.default) {
        this.packs[id].status = this.selected;
      } else if (this.packs[id].status == this.selected) {
        this.packs[id].status = this.default;

      }
    }
  }
});