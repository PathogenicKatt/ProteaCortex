
_I plan to use some of the skills learned from the EarTech IT internship to build my dream project_ 
# Protea Cortex: SIEM + AI Cybersecurity Dashboard  
_A cost-effective Security Information and Event Management (SIEM) system with real-time threat detection,incorporated with Artificial Intelligence._

## Features
- **Real-time Log Monitoring**: Ingest and analyze system/auth logs.  
- **AI Threat Detection**: Anomaly detection using Python ML models.  
- **Cross-Platform**: Web dashboard (React) + Mobile app (Android).  
- **Secure**: JWT authentication, HTTPS, and rate limiting.  

## Tech Stack  
| **Component**       | **Technology**                  |  
|---------------------|---------------------------------|  
| **Frontend**        | React.js, Tailwind CSS          |  
| **Backend**         | Node.js (Express)               |  
| **Database**        | Azure Cosmos DB (NoSQL)         |  
| **AI Engine**       | Python (Scikit-learn, TensorFlow)|  
| **Hosting**         | Azure Static Web Apps, App Service |  
| **CI/CD**           | GitHub Actions, Azure DevOps    |  

## Initial Setup Guide
### Frontend Setup:
1. **Navigate to frontend directory and initialize project:**
```bash
cd frontend
npm create vite@latest . -- --template react
```
2. **When prompted:**
- Select "Ignore files and continue" (if existing files)
- Choose "React" framework
- Select "React Router v7" variant
- When asked about dependencies with npm, type y to install

### Backend Setup
```bash
cd backend
npm install
npm start
```

### Development
```bash
# In frontend directory:
npm run dev  # Runs on port 3000
```

## Note
- The README.md will be continuously being updated.

