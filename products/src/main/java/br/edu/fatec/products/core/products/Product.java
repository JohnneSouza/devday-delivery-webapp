package br.edu.fatec.products.core.products;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
public class Product {

    @Id
    private String id;
    private String name;
    private Double price;
    private String description;

    @JsonProperty("image_Uri")
    private String image;

}
