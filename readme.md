# 🌤️ Weather App

A beautiful, minimal weather application with a glassmorphism UI built using **HTML, CSS & JavaScript**.

---

## 🚀 Live Project Preview

<p align="center">
  <img src="/preview.png" alt="Project Preview" width="90%">
</p>

---

## ✨ Features

- 🔍 Search weather by any city name
- 🌡️ Real-time temperature, humidity & wind speed
- 🎨 Glassmorphism UI with custom sky background
- ⌨️ Press **Enter** to search — no click needed
- 📱 Fully responsive for mobile & desktop
- 🌦️ Dynamic weather icons from OpenWeatherMap

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| HTML5 | Structure |
| CSS3 | Styling & Glassmorphism |
| JavaScript (ES6+) | Logic & API calls |
| OpenWeatherMap API | Live weather data |

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
```

### 2. Get your API Key

- Go to [openweathermap.org](https://openweathermap.org/api) and create a free account
- Copy your API key from the dashboard

### 3. Add your API Key

Open `script.js` and replace the placeholder:

```javascript
const apiKey = "YOUR_API_KEY_HERE"; // 👈 Apna key yahan daalo
```

### 4. Add your background image

Place your background image in the project folder and make sure `style.css` has:

```css
background: url('weather.jpg') center center / cover no-repeat fixed;
```

### 5. Open in browser

Just open `index.html` in any browser — no server needed!

---

## 📁 Project Structure

```
weather-app/
├── index.html       # Main HTML file
├── style.css        # All styling & glassmorphism design
├── script.js        # Weather API logic
├── weather.jpg      # Background image
└── README.md        # You are here!
```

---

## 📸 How It Works

1. User enters a city name in the search box
2. App fetches live data from OpenWeatherMap API
3. Temperature, humidity, wind speed & weather icon are displayed
4. Error message shown if city is not found

---

## 🌐 Live Demo

> Coming soon / [Click here to view](#)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Made with ❤️ by **Sumit Kumar**

</div>