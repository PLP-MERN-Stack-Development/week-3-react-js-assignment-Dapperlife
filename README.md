
# Task Manager - Chore Compass System

A modern, responsive task management application built with React, Vite, TypeScript, and Tailwind CSS. Stay organized and get things done with an intuitive interface and powerful features.

## 🚀 Features

- ✅ **Create, Edit, and Delete Tasks** - Full CRUD operations for task management
- 🎯 **Priority Levels** - Organize tasks by Low, Medium, and High priority
- 📝 **Task Descriptions** - Add detailed descriptions to your tasks
- 🔍 **Smart Filtering** - Filter tasks by All, Active, or Completed status
- 📊 **Progress Tracking** - Visual progress bar showing completion percentage
- 💾 **Local Storage** - Tasks persist between sessions
- 📱 **Responsive Design** - Works perfectly on desktop and mobile devices
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🎨 **Modern UI** - Clean, beautiful interface with smooth animations

## 🛠️ Technology Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **State Management**: React Hooks + Local Storage

## 📦 Installation

### Prerequisites

- Node.js (version 16 or higher)
- npm, yarn, or pnpm

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd chore-compass-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application running.

## 🏗️ Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The built files will be in the `dist` directory, ready for deployment.

## 📱 Application Screenshots

### Main Dashboard
The main interface shows your task list with filtering options and progress tracking.

*[Screenshot of the main dashboard would be displayed here]*

### Task Creation
Create new tasks with titles, descriptions, and priority levels.

*[Screenshot of the task creation form would be displayed here]*

### Task Management
Edit existing tasks inline or mark them as completed with a single click.

*[Screenshot of task editing interface would be displayed here]*

### Filtering and Progress
Filter tasks by status and track your progress with the visual progress bar.

*[Screenshot of the filtering sidebar would be displayed here]*

## 🎯 Usage

### Creating Tasks
1. Click on the task input field at the top
2. Enter your task title (required)
3. Optionally add a description
4. Select a priority level (Low, Medium, High)
5. Click "Add Task" to create

### Managing Tasks
- **Complete**: Click the circle icon next to any task
- **Edit**: Click the edit icon to modify task details
- **Delete**: Click the trash icon to remove a task

### Filtering
Use the sidebar filters to view:
- **All Tasks**: Show everything
- **Active**: Show only incomplete tasks
- **Completed**: Show only finished tasks

### Progress Tracking
The progress bar in the sidebar shows your completion percentage and task counts.

## 🔧 Project Structure

```
src/
├── components/           # React components
│   ├── ui/              # shadcn/ui components
│   ├── TaskManager.tsx   # Main task manager component
│   ├── TaskForm.tsx     # Task creation form
│   ├── TaskList.tsx     # Task list container
│   ├── TaskItem.tsx     # Individual task component
│   └── TaskFilters.tsx  # Filtering sidebar
├── types/               # TypeScript type definitions
│   └── task.ts          # Task interface definitions
├── pages/               # Page components
│   └── Index.tsx        # Main page
└── lib/                 # Utility functions
    └── utils.ts         # Helper utilities
```

## 🎨 Customization

### Styling
The application uses Tailwind CSS for styling. You can customize the theme by modifying:
- `tailwind.config.ts` - Tailwind configuration
- `src/index.css` - Global styles and CSS variables

### Components
All components are modular and can be easily customized:
- Modify component props in TypeScript interfaces
- Update styling with Tailwind classes
- Add new features by extending existing components

## 📊 Performance Features

- **Lazy Loading**: Components load only when needed
- **Local Storage**: Efficient data persistence
- **Optimized Rendering**: React optimizations prevent unnecessary re-renders
- **Fast Build**: Vite provides instant hot module replacement

## 🚀 Deployment

### Deploy to Lovable
1. Click the "Publish" button in the Lovable editor
2. Your app will be deployed automatically

### Deploy to Other Platforms
After building the project (`npm run build`), you can deploy the `dist` folder to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- **Live Demo**: [Your deployed application URL]
- **Documentation**: [Additional documentation if available]
- **Issues**: [GitHub issues page]

## 💡 Future Enhancements

- [ ] User authentication
- [ ] Cloud synchronization
- [ ] Task categories/tags
- [ ] Due dates and reminders
- [ ] Team collaboration features
- [ ] Advanced filtering options
- [ ] Data export functionality

---

Built with ❤️ using React, Vite, and TypeScript.
