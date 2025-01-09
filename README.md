
---

# 🚀 **Insightify** 🌟  
**A MERN stack-based web application for tracking and analyzing social media performance.**  

Gain actionable insights, monitor engagement metrics, and optimize your social media strategy with **Insightify**. This user-friendly platform empowers users to make data-driven decisions effortlessly.

---

## ✨ **Features**  
- 🔒 **User Authentication:** Secure login and signup functionality.  
- 📊 **Dashboard Analytics:** View metrics like likes, comments, and shares.  
- 🛠️ **Customizable Insights:** Generate insights for specific posts or campaigns.  
- 🔄 **Real-Time Updates:** Automatically fetch and display the latest data.  
- 📈 **Interactive Charts:** Visualize trends with dynamic graphs and charts.  

---

## 🛠️ **Technology Stack**

### **Frontend:**  
🎨 **React.js** | 📉 **Chart.js** | 🖌️ **Tailwind CSS**  

### **Backend:**  
💻 **Node.js** | ⚡ **Express.js**  

### **Other Tools:**  
- 🛡️ **dotenv:** Secure environment variable management.  
- 📡 **Axios:** Seamless frontend-backend communication.  
- 🤖 **LangFlow:** Workflow automation and GPT integration.  
- 🗄️ **DataStax Astra DB:** Robust database management.  

---

## 🗂️ **Directory Structure**  

```
└── RohanMalakar-Insightify2/
    ├── README.md
    ├── backend/
    │   ├── app.js                    # Express app configuration
    │   ├── index.js                  # Entry point for the backend
    │   ├── package.json              # Backend dependencies
    │   ├── controllers/
    │   │   └── LangFlow.controller.js  # Handles LangFlow-related logic
    │   ├── db/
    │   │   └── index.js              # Database connection setup
    │   ├── routes/
    │   │   └── LangFlow.route.js     # API routes for LangFlow
    │   └── utills/
    │       ├── ApiError.js           # Handles API error responses
    │       ├── ApiResponse.js        # Standardized API responses
    │       ├── LangflowClient.js     # LangFlow client logic
    │       └── asyncHandler.js       # Middleware for async/await error handling
    └── client/
        ├── README.md                 # Frontend documentation
        ├── index.html                # Root HTML file
        ├── package.json              # Frontend dependencies
        ├── vite.config.js            # Vite configuration
        ├── src/
            ├── App.jsx               # Main application component
            ├── main.jsx              # Frontend entry point
            ├── Componets/            # UI components
            │   ├── Card.jsx          # Card component for analytics
            │   ├── CardSlider.jsx    # Slider for content cards
            │   ├── Footer.jsx        # Footer section
            │   ├── GradientText.jsx  # Text with gradient styling
            │   ├── Header.jsx        # Page header
            │   ├── LangflowApp.jsx   # LangFlow integration
            │   ├── Loader.jsx        # Loading spinner
            │   ├── OurActualteam.jsx # Team showcase component
            │   └── SplitText.jsx     # Animation for split text
            ├── Pages/                # Pages for routing
            │   ├── Home.jsx          # Home page
            │   └── NotFoundPage.jsx  # 404 page
            ├── Utils/                # Utility functions
            │   └── LangflowClient.js # Handles LangFlow API calls
            └── assets/
                └── Images/           # Static assets for the application
```

---

## 📚 **Setup Instructions**

### 1️⃣ **Clone the Repository**  
```bash
git clone https://github.com/RohanMalakar/Insightify2.git
cd RohanMalakar-Insightify2
```

### 2️⃣ **Create a .env File**  
Create a `.env` file in the backend directory with the following:  
```env
PORT=3001
CORS_ORIGIN=*

LANGFLOW_TOKEN="Your_LangFlow_Token"
LANGFLOW_ID="Your_LangFlow_ID"

ASTRADB_URL="Your_AstraDB_URL"
ASTRADB_TOKEN="Your_AstraDB_Token"
```

### 3️⃣ **Install Dependencies**  

#### **Backend:**  
```bash
cd backend
npm install
```  

#### **Frontend:**  
```bash
cd ../client
npm install
```  

### 4️⃣ **Run the Application**  

#### Start the Backend:  
```bash
cd backend
npm start
```  

#### Start the Frontend:  
```bash
cd client
npm run dev
```  

🌐 Access the app at **`http://localhost:3000`**  

---

## 🌐 **API Endpoints**  

### 📥 **Data**  
- `GET /api/data/metrics`: Fetch social media performance metrics.  
- `POST /api/data/insights`: Generate insights for specific posts.  

---

## 🚀 **Future Enhancements**  
- 🔗 **Social Media Integration:** APIs for platforms like Facebook, Instagram, and Twitter.  
- 📡 **Advanced Analytics:** Sentiment analysis and content recommendations.  
- 📱 **Mobile App:** React Native-based mobile application.  

---

## 📜 **License**  
Licensed under the [MIT License](LICENSE).  

---

## 📞 **Contact**  
For queries or collaboration, reach out to **[Rohan Malakar](mailto:rohanmalakar5091@gmail.com)**.  

---
