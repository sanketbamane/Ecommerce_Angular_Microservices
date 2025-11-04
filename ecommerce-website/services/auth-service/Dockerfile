# Stage 1: build with maven
FROM maven:3.9.4-eclipse-temurin-17 as build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn -DskipTests package

# Stage 2: runtime image
FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app

# copy the jar from the build stage
COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080
ENTRYPOINT ["sh","-c","java -jar /app/app.jar"]
