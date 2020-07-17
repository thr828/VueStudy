const app=new Vue({
   el:"#app",
   data:{
       books:[
           {
                id:1,
                name:'c#高级编程',
                date:'2020-07-15',
                price:85.00,
                count:1
           },
           {
               id:2,
               name:'java从入门到放弃',
               date:'2020-07-15',
               price:100.00,
               count:5
           },
           {
               id:3,
               name:'C#深入浅出',
               date:'2012-07-15',
               price:280.00,
               count:40
           },
           {
               id:4,
               name:'前端框架设计',
               date:'2012-05-15',
               price:220.00,
               count:50
           },
       ]
   },
    methods:{
       add(index){
           this.books[index].count++;
       },
        increment(index){
            this.books[index].count--;
        },
        remove: function (index) {
            this.books.splice(index, 1);
        }
    },
    filters:{
       showPrice(price){
         return '$'+price.toFixed(2);  
       },
    },
    computed:{
       totalPrice(){
           let res1=0;
           for (let i=0;i<this.books.length;i++)
           {
               res1+=this.books[i].price*this.books[i].count;
           }
           let res2=0;
           //for简便写法
           for(let book of this.books)
           {
               res2+=book.price*book.count;
           }

           let res=0;
           //Filter/Map/Reduce高阶函数
           res=this.books.reduce((preVaue,book)=> preVaue + book.price*book.count,0);
           console.log(res);
           return res;
           //Filter/Map/Reduce高阶函数
       }
    }
 
});