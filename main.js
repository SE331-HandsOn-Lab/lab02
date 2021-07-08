const app = Vue.createApp({
    data() {
        return {
            product: 'Shoes',
            brand: 'SE 331',
            // image: './assets/images/socks_green.jpg',
            // inStock: true,
            inventory: 100,
            onSale : false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg',quantity: 50 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg',quantity: 0 }
            ],
            cart: 0,
            selectedVariant: 0
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        },
        updateVariant(index){
            this.selectedVariant = index
        }, 
        updateonSale(){
            this.onSale =!this.onSale
            console.log(this.onSale)
        }
    },
    computed: {
        title(){
            return this.brand + ' ' + this.product
            // if(this.variants[this.selectedVariant].quantity>0){
            //     return this.brand + ' ' + this.product+' is on sale'
            // }
        },
        titleonsale(){
            return this.brand + ' ' + this.product+' is on sale'
        },
        image(){
            return this.variants[this.selectedVariant].image
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity
        }
    }
})