Vue.component('pack-block', {
  props: ["data"],
  methods: {
    to_select() {
      this.$emit('to_select');
    },
    to_hover() {
      this.$emit('to_hover');
    },
    to_unhover() {
      this.$emit('to_unhover');
    }
  },
  template: 
  `<div class="container" :class="[data.packNumber, data.status]">
    <div class="main-block-border" 
    @click="to_select()" 
    @mouseover='to_hover()'
    @mouseout='to_unhover()'>
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
      if (this.packs[id].status == this.default || this.packs[id].status == this.defaultHover) {
        this.packs[id].status = this.selected;
        this.packs[id].downText = true;
      } else if (this.packs[id].status == this.selected || this.packs[id].status == this.selectedHover) {
        this.packs[id].status = this.default;
        this.packs[id].downText = false;
      }
    },
    toHover(id) {
      if (this.packs[id].status == this.default) {
        console.log(5);
        this.packs[id].status = this.defaultHover;
      } else if (this.packs[id].status == this.selected) {
        this.packs[id].status = this.selectedHover;
      }
    },
    toUnhover(id) {
      if (this.packs[id].status == this.defaultHover) {
        this.packs[id].status = this.default;
      } else if (this.packs[id].status == this.selectedHover) {
        this.packs[id].status = this.selected;
      }
    }
  }
});