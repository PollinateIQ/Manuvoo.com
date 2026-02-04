#!/bin/bash

# Netlify Build Script with npm
echo "📦 Installing dependencies with npm..."
npm install

echo "🔨 Building project..."
npm run build

echo "✅ Build complete!"
