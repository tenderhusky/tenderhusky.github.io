# TenderHusky Landing Page (GitHub Pages Ready)

This is a pure static HTML/Jekyll version of the TenderHusky landing page, designed to be hosted on GitHub Pages with zero build steps. It uses Tailwind CSS and Lucide Icons via CDN.

## How to Host on GitHub Pages

1. **Create a new GitHub Repository**:
   Go to GitHub and create a new repository (e.g., `tender-husky`).

2. **Upload these 3 files**:
   Upload the following files directly to the root of your new repository:
   - `index.html`
   - `_config.yml`
   - `logo.png` (Upload the Husky icon image you provided earlier and name it `logo.png`)

3. **Enable GitHub Pages**:
   - In your repository, click on the **Settings** tab.
   - On the left sidebar, click on **Pages**.
   - Under "Build and deployment", ensure the Source is set to **Deploy from a branch**.
   - Under "Branch", select `main` (or `master`) and `/ (root)`.
   - Click **Save**.

4. **View your site**:
   Wait about 1-2 minutes. GitHub will provide you with a link at the top of the Pages settings (e.g., `https://yourusername.github.io/tender-husky/`). Your site is now live!

## Handling the Contact Form

Because GitHub Pages only hosts static files, it cannot process form submissions (like sending emails) on its own. 

To make the "Request Access" form work:
1. Sign up for a free form handler service like [Formspree](https://formspree.io/) or [Netlify Forms].
2. Get your unique form endpoint URL.
3. Open `index.html`, find the `<form>` tag (around line 170), and replace `https://formspree.io/f/your_form_id` with your actual endpoint URL.
