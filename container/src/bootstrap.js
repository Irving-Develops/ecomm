import {mount as cartMount} from 'cart/CartShow'
import { mount as productsMount } from "products/ProductsIndex";


productsMount(document.querySelector("#my-products"));
cartMount(document.querySelector("#my-cart"));
console.log('container');