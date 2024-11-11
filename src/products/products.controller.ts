import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productServices: ProductsService) {}

    @Get('')
    getProducts() {
        return this.productServices.getProducts();
    }

    @Get(':id')
    getProductById(@Param ('id') id: string) {
        return this.productServices.getProductById(id);
    }


    @Post('')
    createProduct(@Body() productData: any) {
        return this.productServices.createProduct(productData);
    }

    @Put(':id')
    updateProduct(@Param('id') id: string, @Body() productData: any) {
        return this.productServices.updateProduct(id, productData);;
    }

    @Delete(':id') 
    deleteProduct(@Param('id') id: string) {  
        return this.productServices.deleteProduct(id); 
    }
}

