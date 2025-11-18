
package com.example.order.model;
import jakarta.persistence.*;
import java.math.BigDecimal;
@Entity
@Table(name="orders")
public class OrderSimple {
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private Long userId;
  private BigDecimal total;
  private String status;
  // getters/setters
  public Long getId(){return id;}
  public void setId(Long id){this.id=id;}
  public Long getUserId(){return userId;}
  public void setUserId(Long userId){this.userId=userId;}
  public BigDecimal getTotal(){return total;}
  public void setTotal(BigDecimal total){this.total=total;}
  public String getStatus(){return status;}
  public void setStatus(String status){this.status=status;}
}
