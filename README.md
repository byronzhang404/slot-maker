# Slot Maker - Custom Slot Machine Game Creator

Create and share custom slot machine games instantly! Similar to FPE slot maker and Dandy's World, but with more features and better customization options.

🎮 [Try it now on slotmaker.net](https://slotmaker.net)

## Features

- 🎲 Create custom slot machines with any content
- 🎯 Easy-to-use interface
- 🔗 Share your games instantly
- 📱 Responsive design
- 🖥️ Embed on any website

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Supabase
- React Router
- Lucide Icons

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Environment Variables

Create a `.env` file with your Supabase credentials:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Project Structure

```
src/
  ├── components/     # React components
  ├── hooks/         # Custom React hooks
  ├── lib/           # Utility functions and configurations
  ├── types/         # TypeScript type definitions
  ├── App.tsx        # Main application component
  └── main.tsx       # Application entry point
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.