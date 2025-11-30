# Git Commit Guide

This guide provides a suggested progression of commits to showcase your thought process and development workflow.

## Initial Setup

```bash
# Initialize git repository
git init

# Add initial files
git add package.json public/index.html .gitignore
git commit -m "Initial commit: Setup React project with dependencies"
```

## Redux State Management

```bash
# Add Redux store structure
git add src/redux/store.js
git commit -m "feat: Setup Redux store configuration"

# Add cart slice
git add src/redux/cartSlice.js
git commit -m "feat: Implement cart slice with add, remove, update actions"

# Add order slice
git add src/redux/orderSlice.js
git commit -m "feat: Implement order slice with discount code generation logic"

# Add tests for Redux
git add src/redux/cartSlice.test.js src/redux/orderSlice.test.js
git commit -m "test: Add unit tests for Redux slices"
```

## Product Data

```bash
# Add dummy products
git add src/data/products.js
git commit -m "feat: Add dummy product data with 12 items across categories"
```

## Components - Part 1 (Products)

```bash
# Add Header component
git add src/components/Header.js src/styles/Header.css
git commit -m "feat: Create Header component with navigation"

# Add ProductCard component
git add src/components/ProductCard.js src/styles/ProductCard.css
git commit -m "feat: Create ProductCard component with add to cart"

# Add ProductList component
git add src/components/ProductList.js src/styles/ProductList.css
git commit -m "feat: Create ProductList with search and filter functionality"
```

## Components - Part 2 (Cart & Checkout)

```bash
# Add Cart component
git add src/components/Cart.js src/styles/Cart.css
git commit -m "feat: Implement Cart component with coupon validation"

# Add checkout functionality
git add src/components/Cart.js
git commit -m "feat: Add checkout flow with success modal"
```


## App Integration

```bash
# Add main App component
git add src/App.js src/styles/App.css src/index.js src/styles/index.css
git commit -m "feat: Integrate all components in main App with view navigation"
```

## Testing

```bash
# Add component tests
git add src/components/*.test.js src/setupTests.js
git commit -m "test: Add comprehensive unit tests for all components"

# Add App test
git add src/App.test.js
git commit -m "test: Add integration test for main App component"
```

## Documentation

```bash
# Add README
git add README.md
git commit -m "docs: Add comprehensive README with setup and usage instructions"

# Add this guide
git add GIT_COMMIT_GUIDE.md
git commit -m "docs: Add Git commit guide for reference"
```

## Final Push

```bash
# Create GitHub repository and push
git remote add origin <your-github-repo-url>
git branch -M main
git push -u origin main
```

## Alternative: Single Branch Approach

If you prefer smaller, more frequent commits:

```bash
# Day 1: Project Setup
git commit -m "chore: Initialize project with Create React App"
git commit -m "chore: Install Redux Toolkit and React-Redux"
git commit -m "chore: Add .gitignore for Node.js project"

# Day 1: Basic Structure
git commit -m "feat: Setup Redux store with cart and order slices"
git commit -m "feat: Add product data with 12 dummy items"
git commit -m "feat: Create Header component"

# Day 2: Product Features
git commit -m "feat: Implement ProductCard component"
git commit -m "feat: Add ProductList with search functionality"
git commit -m "style: Add CSS styling for product components"

# Day 2: Cart Features
git commit -m "feat: Implement shopping cart functionality"
git commit -m "feat: Add quantity update and remove item features"

# Day 3: Discount System
git commit -m "feat: Implement discount coupon validation"
git commit -m "feat: Add automatic discount code generation for nth orders"
git commit -m "feat: Create checkout flow with coupon application"


# Day 4: Polish & Testing
git commit -m "style: Add responsive design for mobile devices"
git commit -m "style: Enhance UI with gradients and transitions"
git commit -m "test: Add unit tests for Redux slices"
git commit -m "test: Add component tests with React Testing Library"

# Day 4: Documentation
git commit -m "docs: Write comprehensive README"
git commit -m "docs: Add code comments throughout the project"
```

## Best Practices Demonstrated

1. **Atomic Commits**: Each commit represents a single, logical change
2. **Conventional Commits**: Using prefixes (feat, fix, test, docs, style, refactor, chore)
3. **Descriptive Messages**: Clear explanation of what was changed and why
4. **Progressive Development**: Showing incremental development process
5. **Test Coverage**: Committing tests alongside features

## Commit Message Format

```
<type>: <description>

[optional body]
```

### Types:
- `feat`: New feature
- `fix`: Bug fix
- `test`: Adding or updating tests
- `docs`: Documentation changes
- `style`: Code style/formatting (not CSS)
- `refactor`: Code refactoring
- `chore`: Maintenance tasks
- `perf`: Performance improvements

## Tips for Your Repository

1. Make commits in logical order (setup → features → tests → docs)
2. Show your thought process through commit messages
3. Keep commits focused on one thing
4. Include tests with features or in separate test commits
5. Document as you go or in dedicated documentation commits
6. Use branches if you want to show feature development isolation

## Example: Using Feature Branches

```bash
# Create and work on feature branch
git checkout -b feature/shopping-cart
# ... make changes ...
git commit -m "feat: Implement shopping cart"
git checkout main
git merge feature/shopping-cart

git checkout -b feature/discount-system
# ... make changes ...
git commit -m "feat: Add discount coupon system"
git checkout main
git merge feature/discount-system
```

This shows professional development workflow with isolated feature development.

