# Day 7 – Final Mini Project: Weather App

## 📌 Project Overview
This is a console-based Weather App built using JavaScript and Node.js. The application fetches real-time weather data from a public API and displays temperature and weather-related details. The focus of this project is on asynchronous logic, API handling, and clean JavaScript code structure.

---

## 🌐 API Used
**Open-Meteo API**  
- Base URL: https://api.open-meteo.com  
- No API key required  
- Provides real-time weather data  

Example API Endpoint:
https://api.open-meteo.com/v1/forecast?latitude=10.85&longitude=76.27&current_weather=true

---

## ⚙️ JavaScript & Async Logic
- Used `fetch()` to call the API
- Used `async/await` for clean asynchronous flow
- Parsed JSON response using `.json()`
- Used `try-catch` for error handling
- Used template literals for formatted output

---

## ✅ Features Implemented
- Fetches live weather data
- Displays temperature and wind speed
- Handles API and network errors gracefully
- Uses async/await
- Clean and readable code structure

---

## ▶️ How to Run the Project
1. Open the folder in VS Code
2. Open terminal
3. Run:
   ```bash
   node index.js


