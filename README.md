# Car Dealer App

Next.js application/challenge that allows users to filter vehicles by type and model year, and view the results.

## Features

- Filter vehicles by type and model year
- Display vehicle models based on selected criteria
- Responsive design using Tailwind CSS

## Architecture

- Framework: Next.js
- Language: TypeScript
- Styling: Tailwind CSS
- State Management: React Hooks
- API: NHTSA Vehicle API

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm

### Installation

1. Clone the repository:
   ```
   git clone [https://github.com/Enzo-cam/devToday-challenge]
   ```

2. Navigate to the project directory:
   ```
   cd car-dealer-app
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Create a `.env.local` file in the root directory and add the following envs :
   ```
   NEXT_PUBLIC_API_BASE_URL=https://vpic.nhtsa.dot.gov/api
   NEXT_PUBLIC_VEHICLE_TYPES_ENDPOINT=/vehicles/GetMakesForVehicleType/car
   NEXT_PUBLIC_VEHICLE_MODELS_ENDPOINT=/vehicles/GetModelsForMakeIdYear/makeId
   ```

### Running the Application

To run the development server:

```
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To create a production build:

```
npm run build
```

To start the production server:

```
npm start
```
