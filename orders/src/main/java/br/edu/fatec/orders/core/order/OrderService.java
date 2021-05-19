package br.edu.fatec.orders.core.order;

import br.edu.fatec.orders.feign.ProductFeign;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final ProductFeign productFeign;

    public OrderService(OrderRepository orderRepository, ProductFeign productFeign) {
        this.orderRepository = orderRepository;
        this.productFeign = productFeign;
    }

    public List<Order> findAll(){
        return orderRepository.findAll();
    }

    public Order saveOrder(Order order){
        List<String> productList = order.getProducts()
                .stream()
                .map(Product::getId)
                .collect(Collectors.toList());

        List<Product> products = fetchProducts(productList);

        order.setProducts(products);
        order.setTotal(products.stream().map(Product::getPrice).reduce(Double::sum).orElse((double) 0));
        return orderRepository.save(order);
    }

    public List<Product> fetchProducts(List<String> productsId){
        return productFeign.fetchProductsById(productsId.toArray(new String[0]));
    }
}
