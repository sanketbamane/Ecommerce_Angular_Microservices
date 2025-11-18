# services/product-service/Dockerfile (simple runtime image using a pre-built jar)
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app
# copy the built jar (from target/)
COPY target/*.jar app.jar
EXPOSE 8081
ENTRYPOINT ["java","-jar","/app/app.jar"]
