# Frontend Testing Live Exercise

Welcome to the frontend testing live exercise. This repository contains a small React app with multiple testing configurations (Vitest, Jest, Playwright, and Cypress).  
Your task will be to write unit, integration, and end-to-end (E2E) tests depending on the instructions given.

---

## 🚀 Getting Started

Clone the repo and install dependencies:

```bash
pnpm install
```

Then install **one of the testing stacks** depending on the task you’re asked to do.

### For Vitest
```bash
pnpm add -D vitest @testing-library/react @testing-library/user-event @testing-library/jest-dom jsdom
```

Run:
```bash
pnpm test
pnpm test:watch
```

### For Jest
```bash
pnpm add -D jest ts-jest @testing-library/react @testing-library/user-event @testing-library/jest-dom
```

Run:
```bash
npx jest
```

### For Playwright
```bash
pnpm add -D @playwright/test
```

Run:
```bash
npx playwright test
```

### For Cypress
```bash
pnpm add -D cypress
```

Run:
```bash
npx cypress open
```

---

## 🧪 Tasks

### 1. Unit / Integration
Open `src/components/__tests__/LoginForm.candidate.test.tsx`.

- Write a **validation test**:
  - Submitting empty fields should show the error message.
- Write a **success test**:
  - With valid credentials (admin / secret), should show "Welcome, admin!".
- Fix the **broken test** in `LoginForm.broken.test.tsx`.

---

### 2. End-to-End (E2E)

Use **Playwright or Cypress** (your choice).  
Write an E2E test for the following story:

#### Story
As a user,  
I want to log in to the app,  
So that I can see a personalized welcome message.  

#### Acceptance Criteria
1. When I visit `/`, I see a login form with username and password inputs and a "Log in" button.
2. If I submit with empty fields, I should see an error message: "Username and password are required".
3. If I submit with wrong credentials, I should see "Invalid credentials".
4. If I submit with correct credentials (admin / secret), I should see "Welcome, admin!".

Place your E2E test in:
- `e2e/login.spec.ts` (for Playwright), or
- `cypress/e2e/login.cy.ts` (for Cypress).

---

## ▶️ Run the App

Start the dev server:
```bash
pnpm dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

---

## ✅ Notes

- Use accessible queries (`getByRole`, `getByLabelText`, `findBy*`) instead of brittle selectors.
- Handle async interactions with `await` + `findBy*` or `waitFor`.
- Prefer `userEvent` over `fireEvent`.
- Keep tests readable and maintainable.
