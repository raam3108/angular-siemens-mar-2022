import { Subject } from "rxjs";



export class ProductFilter{
    uniqueCategory:string[] =[];

    filterCheck:boolean=false;
    filterText:string="";
    PRODUCTS = [
        {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
        {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
        {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
        {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
        {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
        {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
      ];

    productshow:any = this.PRODUCTS;


   

    getUniqueElement(element:any, index:any, array:any):any{
        
        if(!this?.uniqueCategory.includes(element.category)){
            
            this?.uniqueCategory.push(element.category)

            return true
        }
        else false

    } 

    checkStock(filterText:string,filterCheck:boolean):any{
        
        if (!filterCheck){
            return this.PRODUCTS.filter(item=>item.name.includes(filterText));
        }
        this.productshow = this.PRODUCTS.filter(item=>item.stocked==filterCheck && item.name.includes(filterText));
    }

    getCategories(){
   
       
        return this.PRODUCTS.filter(this.getUniqueElement.bind(this))
    }

    getProducts(){

        return this.productshow

    }

    

        
}