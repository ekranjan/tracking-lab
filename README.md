# 📊 GA4 Mastery Lab: React 19 Analytics Implementation

A professional-grade demonstration of analytics architecture using **React 19 (Next.js 15)**, **Google Tag Manager (GTM)**, and **Google Analytics 4 (GA4)**. This project demonstrates how to bridge modern frontend state management with enterprise data collection standards.

---

## 🚀 Technical Highlights
* **React 19 Hook Integration:** Optimized use of `useState` and `useEffect` for state-driven event dispatching.
* **Asynchronous Tag Injection:** Securely injecting GTM using `dangerouslySetInnerHTML` within the Next.js `Script` component for zero-block rendering.
* **Centralized DataLayer Library:** A dedicated `/lib/gtm.ts` utility to standardize and sanitize event payloads.
* **Environment-Led Configuration:** Secure management of Measurement IDs via `.env` to support CI/CD best practices.

---

## 🛠️ Project Setup & Installation

### 1. Prerequisites
    * **Node.js:** 18.x or later
    * **Package Manager:** npm, pnpm, or yarn

### 2. Environment Configuration (.env)
    Create a `.env.local` file in the root directory. This ensures your tracking IDs are not hardcoded and can be managed securely across different environments.

    ```text
    NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
    NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX

### 3. Installation & Local Development

    # Clone the repository
    git clone [https://github.com/your-username/ga4-mastery-lab.git](https://github.com/your-username/ga4-mastery-lab.git)

    # Navigate into the directory
    cd ga4-mastery-lab

    # Install dependencies
    npm install

    # Run the development server
    npm run dev

⚙️ GTM & Analytics Architecture
    Naming Conventions
    To ensure maintainability in enterprise containers, the following standards were applied:
   * Triggers: CE - [Event Name] (Custom Event)
   * Variables: dlv - [Data Key] (Data Layer Variable)
   * Tags: GA4 - [Purpose] (GA4 Event Tag)

**Event Schema & Tracking Steps**
    This project tracks a 3-step lead generation funnel:
    | Step    | EventName        | Parameter Name | Value           | Type
    | Step 1  | form_progression | step_number    | 1               | Dynamic
    | Step 1  | form_progression | step_label     | Contact Info    | Dynamic
    | Step 2  | form_progression | step_number    | 2               | Dynamic
    | Step2   | form_progression | step_label     | Selection       | Dynamic
    | Success | form_complete    | method         | multi_step_form | Static

📊 GA4 Reporting & Analysis
    The implementation is verified to support the following GA4 features:
    * Funnel Exploration: Visualizing drop-off rates between Step 1 and the Final Conversion.
    * Custom Dimensions: Registration of step_number and step_label in GA4 Admin for granular filtering.
    * DebugView Validation: Real-time stream monitoring to ensure 100% data accuracy.

🧪 Verification Workflow
    * GTM Preview Mode: Real-time validation of tag firing sequence and variable resolution.
    * Network Inspection: Monitoring collect?v=2 requests in the browser console.
    * GA4 DebugView: Final server-side confirmation of parameter ingestion.

🌐 Deployment (Vercel)
    This project is optimized for Vercel.
    * Connect GitHub: Import the repository into the Vercel Dashboard.
    * Add Env Vars: Under Project Settings > Environment Variables, add NEXT_PUBLIC_GTM_ID and NEXT_PUBLIC_GA4_ID.
    * Deploy: Vercel automatically builds and deploys the project with every push to the main branch.

