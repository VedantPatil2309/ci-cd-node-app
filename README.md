# CI/CD Pipeline Using GitHub Actions

## Project Overview

A sample Node.js application deployed using an automated
CI/CD pipeline with GitHub Actions and Docker Hub.

## Technologies

- Node.js
- Express.js
- Docker
- Docker Hub
- GitHub
- GitHub Actions
- Jest
- Supertest

## Pipeline

Git Push
   ↓
GitHub Actions
   ↓
Install Dependencies
   ↓
Run Tests
   ↓
Build Docker Image
   ↓
Push Image to Docker Hub

## Trigger

The pipeline is triggered whenever code is pushed to the main branch.

## Docker Image

YOUR_DOCKER_USERNAME/cicd-node-app:latest

## How to Run Locally

npm install

npm start

## Run Tests

npm test

## Docker Build

docker build -t cicd-node-app .

## Docker Run

docker run -p 3000:3000 cicd-node-app
