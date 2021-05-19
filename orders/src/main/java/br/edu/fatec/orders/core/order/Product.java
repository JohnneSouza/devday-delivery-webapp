package br.edu.fatec.orders.core.order;

import lombok.Data;

@Data
public class Product {

    private String id;
    private String name;
    private String description;
    private Double price;

}
