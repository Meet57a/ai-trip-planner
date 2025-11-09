# 🌍 AI Trip Planner

An intelligent trip planning application powered by Google's Generative AI that helps users create personalized travel itineraries with AI-generated recommendations for destinations, accommodations, and activities.

## ✨ Features

- 🤖 **AI-Powered Trip Generation** - Create detailed trip itineraries using Google's Generative AI
- 🔐 **User Authentication** - Secure JWT-based authentication with bcrypt password hashing
- 📅 **Trip Management** - Create, view, and manage your travel plans
- 🏨 **Accommodation Recommendations** - AI-suggested hotels and lodging options
- 💰 **Budget Options** - Plan trips based on Budget Friendly, Moderate, or Luxury preferences
- 🚆 **Travel Type Selection** - Choose between Flight, Train, or Bus transportation
- 📱 **Responsive Design** - Modern UI built with TailwindCSS and Shadcn/UI components
- 🎨 **Interactive Components** - Rich UI with dialogs, dropdowns, calendars, and more

## 🛠️ Tech Stack

### Frontend
- **React 18** with **TypeScript**
- **Vite** - Fast build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Shadcn/UI** - Re-usable component library built on Radix UI
- **React Router** - Client-side routing
- **React Hook Form** + **Zod** - Form validation
- **React Toastify** - Toast notifications

### Backend
- **Node.js** with **Express.js**
- **MongoDB** with **Mongoose** ODM
- **Google Generative AI** - AI-powered trip generation
- **JWT** - Authentication tokens
- **Bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas account)
- **Google Generative AI API Key**

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Meet57a/ai-trip-planner.git
cd ai-trip-planner
```

### 2. Frontend Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will run on `http://localhost:5173` (default Vite port)

### 3. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
# Add the following environment variables:
# PORT=5000
# MONGODB_URI=your_mongodb_connection_string
# JWT_SECRET=your_jwt_secret_key
# GOOGLE_AI_API_KEY=your_google_ai_api_key

# Start development server
npm run dev
```

The backend will run on the port specified in your `.env` file (default: 5000)

### 4. Environment Variables

#### Backend `.env` file:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ai-trip-planner
JWT_SECRET=your_super_secret_jwt_key
GOOGLE_AI_API_KEY=your_google_generative_ai_api_key
```

## 📁 Project Structure

```
ai-trip-planner/
├── backend/
│   ├── src/
│   │   ├── db/              # Database configuration
│   │   ├── middleware/       # Auth middleware
│   │   ├── models/          # Mongoose models
│   │   ├── routes/          # API routes
│   │   ├── services/        # Business logic
│   │   ├── utils/           # Utility functions
│   │   └── app.js           # Express app setup
│   ├── index.js             # Server entry point
│   └── package.json
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # Shadcn/UI components
│   │   └── header.tsx
│   ├── layouts/            # Layout components
│   ├── pages/              # Application pages
│   ├── services/           # API service calls
│   ├── models/             # TypeScript types/models
│   ├── lib/                # Utilities and routes
│   └── main.tsx            # React entry point
├── public/                 # Static assets
└── package.json
```

## 🔑 Key Features Explained

### Trip Creation
Users can create trips by providing:
- Destination
- Number of days
- Budget type (Budget Friendly, Moderate, Luxury)
- Travel type (Flight, Train, Bus)
- Additional preferences

The AI generates a comprehensive itinerary including:
- Daily activities and recommendations
- Hotel suggestions with pricing
- Local attractions
- Transportation tips

### Authentication Flow
- User registration with email and password
- Secure login with JWT token generation
- Protected routes requiring authentication
- Token-based session management

## 📝 Available Scripts

### Frontend
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Backend
```bash
npm run dev      # Start development server with nodemon
npm test         # Run tests
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

**Meet57a**

## 🙏 Acknowledgments

- Google Generative AI for powering the trip recommendations
- Shadcn/UI for the beautiful component library
- The React and Node.js communities

---

Made with ❤️ by Meet57a
