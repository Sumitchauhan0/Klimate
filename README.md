# 🌤️ Klimate Weather App

A sleek and responsive weather forecast web application that lets you check real-time weather updates, store favorite cities, and toggle between light and dark modes.

---

## 🔗 Live Demo

Check out the live version here: **[klimate-sumit.netlify.app](https://klimate-sumit.netlify.app/)**

---

## 🖼️ Screenshots

A showcase of the application's user interface in different modes.

| Dark Mode UI                                                                                                                        | Light Mode UI                                                                                                                       | Favorite Cities                                                                                                                     |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| ![Dark Mode UI](https://raw.githubusercontent.com/Sumitchauhan0/Klimate/main/public/screenshots/Screenshot%202025-07-26%20185747.png) | ![Light Mode UI](https://raw.githubusercontent.com/Sumitchauhan0/Klimate/main/public/screenshots/Screenshot%202025-07-26%20185835.png) | ![Favorite Cities](https://raw.githubusercontent.com/Sumitchauhan0/Klimate/main/public/screenshots/Screenshot%202025-07-26%20185732.png) |

---

## 🔥 Features

-   🌍 **Current Location Weather**: Auto-detects your location to display real-time weather.
-   ⭐ **Favorites**: Search for cities and save them to a favorites list for quick access.
-   ☀️ **Dark/Light Mode**: Seamlessly switch between themes for a comfortable user experience.
-   📊 **5-Day Forecast**: View hourly and daily forecast data presented in a clear graph.
-   🌦️ **Detailed Weather Metrics**: Access data on Temperature, Humidity, Wind Speed, Pressure, Sunrise & Sunset.
-   💾 **Local Storage**: Your favorite cities are saved in your browser for your next visit.

---

## 🛠️ Tech Stack

-   **Frontend:** React.js
-   **Styling:** Tailwind CSS
-   **Charts:** Chart.js
-   **Data:** OpenWeatherMap API
-   **Storage:** Browser Local Storage API
-   **Deployment:** Netlify

---

## 📁 Installation & Setup

To run this project locally, follow these steps:

**1. Clone the repository:**
```bash
git clone [https://github.com/Sumitchauhan0/Klimate.git](https://github.com/Sumitchauhan0/Klimate.git)
cd Klimate
```

**2. Install dependencies:**
```bash
# Using npm
npm install
```

**3. Set up environment variables:**

   You will need an API key from [OpenWeatherMap](https://openweathermap.org/api). Create a file named `.env` in the root of your project and add your API key.

   ```env
   # For Vite-based React projects
   VITE_OPENWEATHER_API_KEY=your_api_key_here
   ```

**4. Run the development server:**
```bash
# Using npm
npm run dev
```

The application should now be running on `http://localhost:5173` (or the next available port).

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Sumitchauhan0/Klimate/issues).

---

## 📜 License

This project is licensed under the MIT License.
