
# Nuxt 3 Music Project

This project is built using Nuxt 3, a modern web development framework based on Vue.js. It includes features such as fetching random songs from an API and implementing a media player with shuffle functionality.

## Project Setup

### Prerequisites

Before running the project, ensure you have the following installed:

* Node.js (v18.18.0 or later)
* npm (or yarn)

### Getting Started

1. **Clone the repository:**

    ```
    git clone <repository-url>
    cd <project-folder>
    
    ```
2. **Install dependencies:**

    ```
    npm install
    # or
    yarn install
    
    ```

    This will install the following packages:
    * @pinia/nuxt
    * tailwind
    * @vee-validate/nuxt
    * yup
    * eslint
    * js-cookie
3. **Set up environment variables:**
    Create a `.env` file in the root of the project and add any necessary environment variables.

    ```
    # .env file
    
    NUXT_PUBLIC_API_BASE=http://api.example.com
    
    ```

    Replace `http://api.example.com` with the base URL of your API endpoint. This variable can then be accessed in your Nuxt project using `process.env.NUXT_PUBLIC_API_BASE`. For example:

    ```
    const apiBase = process.env.NUXT_PUBLIC_API_BASE;
    // Use apiBase in your API calls or configurations
    
    ```

    Make sure to restart your development server (`npm run dev` or `yarn dev`) after adding or modifying environment variables in your `.env` file for changes to take effect.
4. **Run the development server:**

    ```
    bashCopy codenpm run dev
    # or
    yarn dev
    
    ```

    This will start the Nuxt 3 development server. Open http://localhost:3000 to view it in the browser.

## Random Songs Implementation

### Shuffle Functionality

* **When enabled:** Clicking the shuffle button fetches random songs from the API, plays them in a random order, and loops through the playlist. After completing the playlist, it fetches random songs again.
* **When disabled:** The player returns to playing songs from the default list.

## Technologies Used

* **Nuxt 3** \- Vue\.js framework for building modern web applications\.
* **Tailwind CSS** \- Utility\-first CSS framework for rapid UI development\.
* **Pinia** \- State management library for Vue\.js applications\.
* **VeeValidate** with **Yup** \- Validation library for form validation\.
* **ESLint** \- Pluggable linting utility for JavaScript and TypeScript\.
* **js-cookie** \- JavaScript API for handling browser cookies\.