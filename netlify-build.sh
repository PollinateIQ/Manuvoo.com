#!/bin/bash

# Netlify Build Script with Bun
echo "🚀 Installing Bun..."

# Install Bun
curl -fsSL https://bun.sh/install | bash

# Add Bun to PATH for this session
export BUN_INSTALL="$HOME/.bun"
export PATH="$BUN_INSTALL/bin:$PATH"

# Verify Bun installation
bun --version

echo "📦 Installing dependencies with Bun..."
bun install

echo "🔨 Building project with Bun..."
bun run build

echo "✅ Build complete!"
