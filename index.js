var dataSource = {
  buttonClass: 'ui button',
  colorClass: 'violet',
  isLoding: true,
  message: '',
  display: true,
  items: [{
      text: 'taobao'
    },
    {
      text: 'alipay'
    },
    {
      text: 'alibaba'
    }
  ],
  conunter: 0,
  seleced: '',
  options: [{
    value: 'hello'
  }, {
    value:'hola'
  },{
    value:'您好'
  }]
}

var vm = new Vue({
  el: '#app',
  data: dataSource,
  methods: {
    like(event) {
      this.conunter += 1;
      console.log(event);
    },
    process(event) {
      console.log(event.target.value);
    }
  }
})
