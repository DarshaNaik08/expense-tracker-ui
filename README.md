# Expense Tracker UI

Angular frontend for the Expense Tracker application—enabling users to create expenses, record transactions, and track personal spending.

> **Backend API:** This frontend connects to the ASP.NET Core Web API repository at [DarshaNaik08/expense-tracker-api](https://github.com/DarshaNaik08/expense-tracker-api).

## Features
- **Expense & Transaction Management:** Create, view, edit, and delete expense records and transactions.
- **Responsive Interface:** Clean, structured dashboard built for desktop and mobile views.

## Tech Stack
- **Framework:** Angular (TypeScript, HTML5, CSS3)
- **Backend Integration:** Consumes RESTful endpoints from [expense-tracker-api](https://github.com/DarshaNaik08/expense-tracker-api)

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (LTS recommended)
- [Angular CLI](https://angular.dev/) (`npm install -g @angular/cli`)
- Running instance of the [Expense Tracker API](https://github.com/DarshaNaik08/expense-tracker-api)

### Local Setup
1. **Clone the repository:**
   ```bash
   git clone [https://github.com/DarshaNaik08/expense-tracker-ui.git](https://github.com/DarshaNaik08/expense-tracker-ui.git)
   cd expense-tracker-ui
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure API URL:**
   Verify that the API base URL in your Angular environment or service file matches the local port of your running .NET API.

4. **Start the development server:**
   ```bash
   ng serve
   ```
   Open `http://localhost:4200/` in your browser.
