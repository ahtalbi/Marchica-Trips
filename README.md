# Marchica Trips

A multi-page tourism website for **Marchica Trips**, a fictional agency offering guided outings around the Marchica lagoon and the Rif region (Nador, Morocco): kayak, boat rides, hiking, and food experiences.

> Educational project (concept pédagogique). Reviews and content are fictional and used as mockup examples.

## Tech Used

- [Vite](https://vite.dev/) (multi-page app)
- [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite`
- HTML + CSS (design tokens defined in `css/style.css`)
- Design done in **Figma**
- Project management with **Jira**

## Getting Started

1. Install dependencies:
    
    ```bash
    npm install
    ```
    
2. Run the development server:
    
    ```bash
    npm run dev
    ```
    
3. Open the local URL shown in the terminal (usually `http://localhost:5173`).
    

## Pages

|Page|File|Description|
|---|---|---|
|Accueil (Home)|`index.html`|Hero section and traveler testimonials|
|Activités|`activities.html`|Cards for the 8 experiences with price, duration and a booking call to action|
|Détails d'une activité|`activitiesDetails.html`|Activity details page|
|FAQ|`faq.html`|Frequently asked questions and|
|Réservation|`reserve.html`|Booking page|

## Project Structure

```
Marchica-Trips/
├── assets/                  # Images (activities photos, logo, hero image)
├── css/
│   └── style.css            # Tailwind import + design tokens (colors, fonts, type scale, radius)
├── public/
│   └── favicon.png
├── index.html               # Accueil
├── activities.html          # Activités
├── activitiesDetails.html   # Détails d'une activité
├── faq.html                 # FAQ
├── reserve.html             # Réservation
├── vite.config.js           # Vite config (multi-page inputs + Tailwind plugin)
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Team & Contributions

Everyone designed their own part in **Figma** and then built it in code.

|Member|Work|
|---|---|
|**Ismail**|Activities Détail and navigation bar|
|**Achraf**|Activities page|
|**Ahmed Talbi**|Accueil (Home) page and Réservation page|
|**Fatima**|Footer and FAQ page|

## Project Management (Jira)

We used **Jira** to organize and track the work of the team.

- Work was split into **tasks (issues)**, one or more per page or component (header and navigation bar, home, activities, activity details, reservation, FAQ, footer).
- Each task was **assigned to a team member** so everyone knew what they owned.
- Tasks moved through the board columns: **To Do → In Progress → Done**.
- The board gave the whole team a quick view of what was finished and what was still left to do.

## Project Links

Paste the links below.

| Tool      | Link                                                                                                      |
| --------- | --------------------------------------------------------------------------------------------------------- |
| **Figma** | [Figma](https://www.figma.com/design/7XsQtxkD3an5o10hM34vwd/MT--Copy-?node-id=9-325&t=0BWCSx4NdZvVxnql-1) |
| **Jira**  | [Paste the Jira link here](https://claude.ai/chat/b376176d-212a-47bb-8c70-d67389c42a4b#)                  |
