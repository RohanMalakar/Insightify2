# 🚀 **Insightify** 🌟  
**A MERN stack-based web application for tracking and analyzing social media performance.**  

Gain actionable insights, monitor engagement metrics, and optimize your social media strategy with **Insightify**. This user-friendly platform empowers users to make data-driven decisions effortlessly.

---

## ✨ **Features**  
- 🛠️ **Customizable Insights:** Generate insights for specific posts or campaigns.  
- 🔄 **Real-Time Updates:** Automatically fetch and display the latest data.  
 

---

## 🛠️ **Technology Stack**

### **Frontend:**  
🎨 **React.js** | 📉 **Chart.js** |   

### **Backend:**  
💻 **Node.js** | ⚡ **Express.js**  

### **Other Tools:**  
- 🛡️ **dotenv:** Secure environment variable management.  
- 📡 **Axios:** Seamless frontend-backend communication.  
- 🤖 **LangFlow:** Workflow automation and GPT integration.  
- 🗄️ **DataStax Astra DB:** Robust database management.  

---

## 📚 **Setup Instructions**

### 1️⃣ **Clone the Repository**  
```bash
git clone https://github.com/RohanMalakar/Insightify2.git
cd Insightify2
```

### 2️⃣ **Create a .env File**  
Create a `.env` file in the root directory with the following:  
```env
PORT=3001
CORS_ORIGIN=*

LANGFLOW_TOKEN="Your_LangFlow_Token"
LANGFLOW_ID="Your_LangFlow_ID"

ASTRADB_URL="Your_AstraDB_URL"
ASTRADB_TOKEN="Your_AstraDB_Token"
```

### 3️⃣ **Install Dependencies**  

#### **For Backend:**  
```bash
cd backend
npm install
```  

#### **For Frontend:**  
```bash
cd ../frontend
npm install
```  

### 4️⃣ **Run the Application**  

#### Start the Backend:  
```bash
cd backend
npm run dev
```  

#### Start the Frontend:  
```bash
cd client
npm run dev
```  

🌐 Access the app at **`http://localhost:3000`**  

---

## 🗂️ **Folder Structure**  

### **Backend:**  
📁 `routes/` – API routes for data handling.  
📁 `middleware/` – Middleware for cross-origin requests.  
📁 `utils/` – Helper functions for database interactions.  

### **Frontend:**  
📁 `src/components/` – React components for UI.  
📁 `src/pages/` – Pages for routing (e.g. Dashboard).  
📁 `src/utils/` – Utility functions and helpers.  

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

## 💡 **Notes**  
- ⚠️ Ensure your `.env` file is configured with appropriate tokens and URLs.  
- 🔑 Use strong secrets for authentication and data security.  

---

## 📜 **License**  
Licensed under the [MIT License](LICENSE).  

---

## 📞 **Contact**  
For queries or collaboration, reach out to **[Rohan Malakar](mailto:rohanmalakar5091@gmail.com.com)**.  
