package br.edu.fatec.orders.feign;

import br.edu.fatec.orders.core.order.Product;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@FeignClient(value = "products", url = "${service.url.products}")
public interface ProductFeign {

    @GetMapping("find/id")
    List<Product> fetchProductsById(@RequestParam String[] productsId);

}
