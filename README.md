# Sales Agent Dashboard Development

## Project Overview

The Sales Agent Dashboard is a responsive web application designed for Zeraki to facilitate the management of school accounts, invoicing, and collections. It includes data visualization for targets and sign-ups, streamlining operations for sales agents and enhancing their ability to manage relationships with schools efficiently.

## Features

### 1. Side Navigation
The side navigation bar enhances navigation and organization within the application, dividing it into two primary modules:
- **Dashboard Module**: Displays dynamic counters for Collections, Sign-ups, Total Revenue, and Bounced Cheques.
- **Schools Module**: Lists schools with options to view detailed information (Invoices and Collections).

### 2. Dashboard Overview
#### A. Top Card Metrics
Displays high-level overviews of key performance indicators:
- **Collections**: Total number of collections made.
- **Sign-ups**: Total new school sign-ups, broken down by product (Zeraki Analytics, Zeraki Finance, Zeraki Timetable).
- **Total Revenue**: Overall revenue collected, detailed by product.
- **Bounced Cheques**: Number of bounced cheques.

#### B. Targets Visualization
Visual representation of progress towards signup targets using pie charts:
- **Pie Charts**: Visualize progress towards targets for Zeraki Analytics, Zeraki Finance, and Zeraki Timetable.
- **Interactive Tooltips**: Display exact numbers or percentages on hover.

#### C. Signups Overview
Bar graphs representing the distribution of sign-ups across different school types for each product:
- **Bar Graphs**: Distribution of sign-ups for Primary, Secondary, and IGCSE schools.
- **Interactive Elements**: Clickable bars to display detailed statistics.

#### D. Upcoming Invoices
Feature to display a list of upcoming invoices:
- **List Invoices**: Ordered by due date, showing school name, amount due, due date, and quick actions for payment collection.
- **Direct Payment Collection**: Modal or side-panel forms for entering collection details.

### 3. School Management
#### A. Schools
Interface for managing and viewing detailed information on each school:
- **List of Schools**: Display all schools with detailed information including name, type, products, county, registration date, contact information, and balance.

#### B. Invoices
Comprehensive management of invoices per school:
- **List All Invoices**: Display invoices with filters for completed and pending, showing details such as invoice number, item, dates, amount, paid amount, balance, status, and days until due.
- **CRUD Operations**: Create, read, update, and delete invoices with unique invoice numbers, due dates, amounts, and items.
- **Add Collections**: Mark partial or full payments, updating invoice status based on collection results.

#### C. Collections
Manage collections per school with capabilities to update invoice statuses:
- **List Collections**: Show all collections with invoice number, collection number, date, status (Valid, Bounced), and amount.
- **Mark Collection Status**: Update status directly from the list, defaulting to valid.

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm (v6 or later)
- json-server

### Installation

1. Clone the repository:
    ```sh
    git clone git@github.com:judy-chelangat/juniordevtask.git
    cd juniordevtask
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

### Running the Application

#### Frontend
Start the React application:
```sh
npm run dev
```
#### Backend
Start the Backend json server

```sh
npm run server
```
### API Endpoints

#### Invoices

- `GET /invoices?schoolId={schoolId}`: Retrieve all invoices for a school.
- `POST /invoices`: Create a new invoice.
- `PATCH /invoices/{id}`: Update an invoice.
- `DELETE /invoices/{id}`: Delete an invoice.

#### Collections

- `GET /collections?schoolId={schoolId}`: Retrieve all collections for a school.
- `POST /collections`: Create a new collection.
- `PATCH /collections/{id}`: Update a collection status.

### Contributing

1. Fork the repository.
2. Create your feature branch:
    ```sh
    git checkout -b feature/your-feature-name
    ```
3. Commit your changes:
    ```sh
    git commit -m 'Add some feature'
    ```
4. Push to the branch:
    ```sh
    git push origin feature/your-feature-name
    ```
5. Open a pull request.

### License

This project is licensed under the MIT License.

### Author
Judy chelangat