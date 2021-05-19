package br.edu.fatec.products.core.products;

import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Product save(Product product){
        return productRepository.save(product);
    }

    public List<Product> findAll(){
        return productRepository.findAll();
    }

    public List<Product> findProductsById(String[] productsId) {
        return productRepository.findProductsByIdIn(Arrays.asList(productsId));
    }
}
