package br.edu.fatec.products.rest;

import br.edu.fatec.products.core.products.Product;
import br.edu.fatec.products.core.products.ProductService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("products")
public class ProductResource {

    private final ProductService productService;

    public ProductResource(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public List<Product> findAll(){
        return productService.findAll();
    }

    @GetMapping("/find/id")
    List<Product> fetchProductsById(@RequestParam String[] productsId){
        return productService.findProductsById(productsId);
    }

    @PostMapping
    public Product save(@RequestBody Product product){
        return productService.save(product);
    }
}
