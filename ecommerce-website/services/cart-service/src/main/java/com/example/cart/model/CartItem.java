
package com.example.cart.model;
import jakarta.persistence.*;

@Entity
public class CartItem {
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private Long userId;
  private Long productId;
  private Integer qty;
  // getters/setters
  public Long getId(){return id;}
  public void setId(Long id){this.id=id;}
  public Long getUserId(){return userId;}
  public void setUserId(Long userId){this.userId=userId;}
  public Long getProductId(){return productId;}
  public void setProductId(Long productId){this.productId=productId;}
  public Integer getQty(){return qty;}
  public void setQty(Integer qty){this.qty=qty;}
}
