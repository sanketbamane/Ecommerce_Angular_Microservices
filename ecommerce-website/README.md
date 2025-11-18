
# Ecommerce Microservices Starter (Mono-repo)

This starter contains minimal skeletons for:
- API Gateway (Spring Cloud Gateway)
- Auth Service (Spring Boot, JWT stub)
- Product Service (Spring Boot)
- Cart Service (Spring Boot)
- Order Service (Spring Boot)
- Angular Storefront (minimal scaffold)

This is a starting point — each service includes a simple controller and Maven pom.xml.
Use it to develop features, add persistence, messaging (Kafka), Elasticsearch, and more.

## Quick start (development)
Each Java service is a separate Maven project. Example:
```
cd services/product-service
./mvnw spring-boot:run
```
Build JARs locally (run once per service):

# from repo root
cd services/auth-service
mvn -DskipTests package

cd ../product-service
mvn -DskipTests package

cd ../cart-service
mvn -DskipTests package

cd ../order-service
mvn -DskipTests package

cd ../gateway
mvn -DskipTests package

use this command to build all:
docker compose up --build

For Angular:
```
cd storefront
npm install
node server.cjs
```

A `docker-compose.yml` is included for running Postgres + simple registry (example).

