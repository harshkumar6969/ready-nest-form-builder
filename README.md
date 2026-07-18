# 📋 ReadyNest Form Builder

A modern full-stack web application that allows users to create, customize, publish, and manage dynamic forms with ease. The platform enables secure form creation, real-time response collection, and analytics through an intuitive dashboard.

---

## 🚀 Project Overview

**ReadyNest Form Builder** is a dynamic form management platform built as part of the **ReadyNest Full Stack Development Internship - Week 1 Task**.

The application provides an easy way to create customizable forms with multiple field types, share them using unique links, collect responses, and analyze submissions from a centralized dashboard.

---

## ✨ Features

### 🔐 User Authentication
- Secure Sign Up & Login
- JWT Authentication
- Protected Dashboard

### 📝 Dynamic Form Builder
- Create unlimited forms
- Edit existing forms
- Delete forms
- Publish forms

### 📌 Multiple Field Types
- Text Input
- Email
- Number
- Dropdown
- Checkbox
- Radio Button
- Date Picker
- Text Area

### 🔗 Form Sharing
- Generate unique shareable links
- Public form access
- Easy response collection

### 📊 Response Dashboard
- View submitted responses
- Search and filter responses
- Manage submissions

### 📈 Analytics
- Total Form Views
- Submission Count
- Response Statistics

---

# 🛠️ Tech Stack

## Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS
- Shadcn UI

## Backend
- Node.js
- Express.js
- REST API

## Database
- MongoDB

## Authentication
- JWT (JSON Web Token)

## Additional Tools
- Cloudinary
- Zod Validation

---

# 📂 Folder Structure

```
ReadyNest-Form-Builder/
│
├── client/
│   ├── components/
│   ├── pages/
│   ├── hooks/
│   ├── styles/
│   └── utils/
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── services/
│
├── public/
├── package.json
├── .env.example
└── README.md
```

---

# ⚙️ Installation

## Clone the Repository

```bash
git clone https://github.com/yourusername/ReadyNest-Form-Builder.git
```

## Navigate to Project Folder

```bash
cd ReadyNest-Form-Builder
```

## Install Dependencies

```bash
npm install
```

## Configure Environment Variables

Create a `.env` file in the root directory.

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

CLOUDINARY_CLOUD_NAME=your_cloud_name

CLOUDINARY_API_KEY=your_api_key

CLOUDINARY_API_SECRET=your_api_secret
```

---

## Run the Application

```bash
npm run dev
```

The application will start on:

```
http://localhost:3000
```

---

# 🎯 Future Enhancements

- Drag & Drop Form Builder
- QR Code Sharing
- Export Responses (CSV / Excel)
- Email Notifications
- Custom Themes
- Real-Time Updates
- Payment Form Integration
- Advanced Analytics

---

# 📖 Usage

1. Register or Login.
2. Create a new form.
3. Add custom fields.
4. Publish the form.
5. Share the generated link.
6. Collect responses.
7. View analytics and manage submissions.

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push to GitHub

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# 👨‍💻 Author

**Harsh Kumar Singh**

B.Tech Computer Science Engineering

---

# 🙏 Acknowledgements

This project was developed as part of the **ReadyNest Full Stack Development Internship (Week 1 Task)**.

Special thanks to **ReadyNest** for providing an opportunity to build a real-world full-stack application and enhance practical development skills.

---

# ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub.

---

## 📄 License

This project is intended for educational and internship purposes.