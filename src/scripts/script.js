Vue.component('pack-block', {
  props: ["data"],
  template: 
  `<div class="container one">
    <div class="main-block-border">
      <div class="main-block-pack">
        <div class="pack-container">
          <p class="main-block-pack__description">Сказочное заморское яство</p>
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
    <p class='main-block__downtext'>{{data.downtext}}</p>
  </div>
  `
});

var app = new Vue ({
  el: '.main-block',
  data: {
    packs: [
      {
        name:'фуа-гра',
        number:'10',
        present: 'мышь в подарок',
        kg: '0,5',
        downtext: 'Печень утки разварная с артишоками'
      },
      {
        name:'рыбой',
        number:'40',
        present: '2 мыши в подарок',
        kg: '2',
        downtext: 'Головы щучьи с чесноком да свежайшая сёмгушка'
      },
      {
        name:'курой',
        number:'100',
        present: '5 мышей в подарок заказчик доволен',
        kg: '5',
        downtext: 'Филе из цыплят с трюфелями в бульоне'
      }
    ]
  },

  mounted: {

  }
});