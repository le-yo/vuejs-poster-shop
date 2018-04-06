var PRICE = 999.90;

new Vue({
  el: '#app',
  data: {
    total:0,
    items: [
      {id:1, title: 'item 1'},
      {id:2, title: 'item 2'},
      {id:3, title: 'item 3'}
    ],
    cart: []
  },
  methods: {
    addItem: function(index){
        this.total += PRICE;
        var item = this.items[index];
        var found = false;
        for (var i = 0; i < this.cart.length; i++){
          if(this.cart[i].id === item.id){
            found = true;
            this.cart[i].qty++;
          }
        }

        if(!found){
          this.cart.push({
            id: item.id,
            title: item.title,
            qty: 1,
            price: PRICE
          });
        }


    }
  }

});
