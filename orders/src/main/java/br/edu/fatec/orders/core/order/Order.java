package br.edu.fatec.orders.core.order;

import lombok.Data;
import org.springframework.data.annotation.Id;

import java.util.List;

@Data
public class Order {

    @Id
    private String id;
    private List<Product> products;
    private Double total;

}
