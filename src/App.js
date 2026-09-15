```jsx
// src/App.js
import React from "react";
import { Link } from "react-scroll";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import profilePic from "./profile.png";

export default function App() {
  const sections = [
    "about",
    "education",
    "experience",
    "projects",
    "skills",
    "certifications",
    "contact",
  ];

  // ===== PROJECTS =====
  const projects = [
    {
      title: "Airline Revenue & Occupancy Analysis",
      link: "https://github.com/rishavranjan808/Airline_Revenue_data_analysis",
      description:
        "SQL and Python analysis of aircraft occupancy, ticket bookings, fare conditions and revenue trends to identify profitability opportunities. Evaluated aircraft-level occupancy rates and simulated a 10% increase in occupancy to assess potential revenue gains.",
    },
    {
      title: "BOILED-Egg Drug Absorption & BBB Prediction",
      link: "https://github.com/rishavranjan808/Drug_Repurposing_Project-ProDrug-",
      description:
        "Cheminformatics tool implementing the BOILED-Egg model to predict gastrointestinal absorption (GIA) and blood-brain barrier (BBB) penetration from molecular properties. Uses RDKit to calculate TPSA and Wildman-Crippen LogP, Shapely for geometric classification, and generates CSV summaries and visualisations of molecular absorption and distribution profiles.",
    },
  ];

  // ===== PROFESSIONAL DEVELOPMENT =====
  const certifications = [
    {
      title: "Snowflake Masterclass",
      link: "#",
    },
    {
      title: "Databricks SQL for Data Analysis",
      link: "#",
    },
    {
      title: "Generative AI with LangChain and Hugging Face",
      link: "#",
    },
    {
      title: "Microsoft Power Automate Course",
      link: "#",
    },
    {
      title: "Azure Databricks and Spark SQL",
      link: "#",
    },
  ];

  return (
    <div className="font-sans text-gray-900">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <nav className="fixed top-0 left-0 w-full backdrop-blur bg-white/80 border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
              Rishav&nbsp;Ranjan
            </span>
          </h1>

          <ul className="hidden md:flex space-x-6 lg:space-x-8">
            {sections.map((section) => (
              <li key={section}>
                <Link
                  to={section}
                  smooth={true}
                  duration={600}
                  offset={-90}
                  className="cursor-pointer text-gray-700 hover:text-indigo-600 font-medium transition"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
          </ul>

        </div>
      </nav>

      {/* =====================================================
          ABOUT
      ===================================================== */}

      <section
        id="about"
        className="scroll-mt-32 pt-32 pb-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50"
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr,1.4fr] gap-10 items-center">

          <div className="flex justify-center">
            <div className="relative group">

              <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-400 via-purple-400 to-pink-400 rounded-3xl blur opacity-30 group-hover:opacity-60 transition"></div>

              <div className="relative bg-white rounded-3xl shadow-xl p-3">

                <img
                  src={profilePic}
                  alt="Rishav Ranjan"
                  className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover shadow-lg transform group-hover:scale-[1.02] transition"
                />

                <div className="mt-4 text-center">
                  <p className="text-sm text-gray-600">
                   India
                  </p>
                </div>

              </div>
            </div>
          </div>

          <div>

            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              About <span className="text-indigo-600">Me</span>
            </h2>

            <p className="text-gray-600 leading-relaxed mb-4">
              I’m <strong>Rishav Ranjan</strong>, a Data Analyst specialising
              in{" "}
              <strong>
                SQL, Python, Power BI, Excel, and cloud data platforms
              </strong>
              , with experience turning CRM, campaign, customer, and user
              engagement data into actionable business insights.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              My work spans{" "}
              <strong>
                data analysis, segmentation, predictive modelling,
                data pipelines, KPI reporting, and dashboard development
              </strong>
              . At Havas Media, I worked with cross-functional teams to
              analyse user behaviour and engagement, build analytics data
              models, and develop interactive Power BI dashboards that reduced
              ad-hoc reporting by <strong>30%</strong> and contributed to a{" "}
              <strong>10% improvement in user retention</strong>.
            </p>

            <p className="text-gray-600 leading-relaxed">
              I focus on taking data from{" "}
              <strong>raw datasets to clear, decision-ready insights</strong>,
              combining strong analytical thinking with reliable data
              preparation, quality validation, and effective visualisation to
              help stakeholders understand performance, identify opportunities,
              and make informed decisions.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">

              <div className="bg-white rounded-2xl p-5 shadow hover:shadow-lg transition">
                <h3 className="font-semibold text-gray-800">
                  What I’m good at
                </h3>

                <p className="text-gray-600 mt-1">
                  SQL, Python, Power BI, data modelling, segmentation,
                  predictive analytics and KPI reporting.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow hover:shadow-lg transition">
                <h3 className="font-semibold text-gray-800">
                  Currently
                </h3>

                <p className="text-gray-600 mt-1">
                  Exploring data analytics, business intelligence,
                  automation and applied AI.
                </p>
              </div>

            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">

              <a
                href="mailto:rishavranjan808@gmail.com"
                className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-xl shadow hover:bg-indigo-700 transition"
              >
                <FaEnvelope />
                Email
              </a>

              <a
                href="https://www.linkedin.com/in/rishav-ranjan"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700 transition"
              >
                <FaLinkedin />
                LinkedIn
              </a>

              <a
                href="https://github.com/rishavranjan808"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-xl shadow hover:bg-black transition"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-xl shadow hover:bg-indigo-700 transition"
              >
                View Contact
              </a>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          EDUCATION
      ===================================================== */}

      <section
        id="education"
        className="scroll-mt-32 py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-12">
            Education
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {[
              {
                school: "Heriot-Watt University",
                detail: "Master of Science in Artificial Intelligence",
                extra: "Edinburgh, UK • Jan 2023 – May 2024",
              },
              {
                school: "MIT ADT University",
                detail: "Bachelor of Technology in Bioengineering",
                extra: "Pune, India • Aug 2018 – Jul 2022",
              },
            ].map((e) => (

              <div
                key={e.school}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 rounded-2xl p-6 shadow hover:shadow-lg transition"
              >

                <h3 className="font-semibold text-xl">
                  {e.school}
                </h3>

                <p className="text-gray-700 mt-2">
                  {e.detail}
                </p>

                <p className="text-indigo-700 font-medium mt-2">
                  {e.extra}
                </p>

              </div>

            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE
      ===================================================== */}

      <section
        id="experience"
        className="scroll-mt-32 py-20 bg-gradient-to-br from-gray-50 to-indigo-50"
      >
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-12">
            Experience
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {/* Havas Media */}

            <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition">

              <h3 className="font-semibold text-xl">
                Data Analyst (Contract)
              </h3>

              <p className="text-indigo-600 font-medium mt-1">
                Havas Media, London
              </p>

              <p className="text-gray-500 mb-4">
                Jan 2023 – Jan 2026
              </p>

              <ul className="list-disc ml-5 space-y-2 text-gray-700">

                <li>
                  Worked within the data team, collaborating with Product,
                  Marketing and campaign stakeholders to support data-driven
                  decision-making across user engagement initiatives.
                </li>

                <li>
                  Analysed user behaviour and experience data from CRM systems,
                  surveys and digital interaction platforms, contributing to a{" "}
                  <strong>10% improvement in user retention</strong>.
                </li>

                <li>
                  Developed predictive and segmentation models in Python to
                  identify behavioural cohorts and engagement patterns,
                  informing targeting strategy and lifecycle optimisation.
                </li>

                <li>
                  Designed SQL and Python data pipelines to transform CRM and
                  campaign datasets into analytics data models integrated with
                  Power BI reporting.
                </li>

                <li>
                  Designed interactive dashboards tracking user activity,
                  engagement trends, campaign performance and KPIs, reducing{" "}
                  <strong>ad-hoc reporting by 30%</strong>.
                </li>

                <li>
                  Produced cohort and segmentation analyses to evaluate user
                  lifecycle behaviour and identify engagement and retention
                  opportunities.
                </li>

                <li>
                  Implemented validation and quality checks to ensure
                  trustworthy datasets for analytics and reporting across
                  departments.
                </li>

              </ul>

            </div>

            {/* Atreya */}

            <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition">

              <h3 className="font-semibold text-xl">
                Data Analyst Intern
              </h3>

              <p className="text-indigo-600 font-medium mt-1">
                Atreya Innovations Limited
              </p>

              <p className="text-gray-500 mb-4">
                Jan 2022 – Jul 2022
              </p>

              <ul className="list-disc ml-5 space-y-2 text-gray-700">

                <li>
                  Improved dataset quality by addressing data collection gaps
                  and engaging underrepresented user groups, increasing
                  dataset coverage and suitability for machine learning
                  applications.
                </li>

                <li>
                  Designed and implemented a UNET-based deep learning model
                  using TensorFlow for medical image segmentation, achieving a{" "}
                  <strong>13% improvement in model accuracy</strong>.
                </li>

                <li>
                  Documented end-to-end data pipelines, including source-to-
                  target mappings and quality control checks, ensuring
                  transparency and alignment with data governance standards.
                </li>

                <li>
                  Collaborated with engineering teams to deploy a real-time
                  prediction server supporting 24/7 system availability and a
                  reliable user experience.
                </li>

              </ul>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section
        id="projects"
        className="scroll-mt-32 py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-12">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {projects.map((p) => (

              <a
                key={p.title}
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl p-6 bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 shadow hover:shadow-xl hover:-translate-y-0.5 transition"
              >

                <h3 className="text-xl font-semibold text-gray-900">
                  {p.title}
                </h3>

                <p className="mt-3 text-gray-700 leading-relaxed">
                  {p.description}
                </p>

                <p className="mt-4 text-indigo-700 font-medium">
                  View Project →
                </p>

              </a>

            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          SKILLS
      ===================================================== */}

      <section
        id="skills"
        className="scroll-mt-32 py-20 bg-gradient-to-br from-purple-50 via-white to-indigo-50"
      >
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-12">
            Skills
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                title: "Analytics",
                items:
                  "SQL, Python, PySpark, Power BI, Excel, Snowflake, Databricks, Salesforce, A/B Testing, Power Automate",
              },
              {
                title: "Process Optimisation",
                items:
                  "ETL Processes, Workflow Automation, Regression, Classification, KPI Tracking, Data Quality Checks",
              },
              {
                title: "Tools",
                items:
                  "GitHub, Jira, Microsoft Office Suite, Google Workspace",
              },
              {
                title: "Interpersonal",
                items:
                  "Stakeholder Communication, Problem Solving, Decision Making, Attention to Detail, Adaptability",
              },
            ].map((s) => (

              <div
                key={s.title}
                className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition border border-indigo-100"
              >

                <h3 className="font-semibold text-xl">
                  {s.title}
                </h3>

                <p className="text-gray-700 mt-2">
                  {s.items}
                </p>

              </div>

            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          PROFESSIONAL DEVELOPMENT
      ===================================================== */}

      <section
        id="certifications"
        className="scroll-mt-32 py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-12">
            Professional Development
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {certifications.map((c) => (

              <a
                key={c.title}
                href={c.link}
                className="block bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 rounded-2xl p-6 shadow hover:shadow-xl transition"
              >

                <h3 className="font-semibold">
                  {c.title}
                </h3>

                <p className="text-indigo-700 mt-2">
                  View Course →
                </p>

              </a>

            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section
        id="contact"
        className="scroll-mt-32 py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-12">
            Contact
          </h2>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">

            {/* Email */}

            <a
              href="mailto:rishavranjan808@gmail.com"
              className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-2xl p-6 shadow hover:shadow-xl transition flex items-center gap-4"
            >

              <FaEnvelope className="text-2xl" />

              <div>

                <p className="font-semibold">
                  Email
                </p>

                <p className="text-white/90">
                  rishavranjan808@gmail.com
                </p>

              </div>

            </a>

            {/* Phone */}

            <a
              href="tel:+919110081818"
              className="bg-white border border-indigo-100 rounded-2xl p-6 shadow hover:shadow-xl transition flex items-center gap-4"
            >

              <FaPhoneAlt className="text-indigo-600 text-2xl" />

              <div>

                <p className="font-semibold">
                  Phone
                </p>

                <p className="text-gray-700">
                  +91 9110081818
                </p>

              </div>

            </a>

            {/* Location */}

            <div className="bg-white border border-indigo-100 rounded-2xl p-6 shadow flex items-center gap-4">

              <FaMapMarkerAlt className="text-indigo-600 text-2xl" />

              <div>

                <p className="font-semibold">
                  Location
                </p>

                <p className="text-gray-700">
                  Panvel, India
                </p>

              </div>

            </div>

          </div>

          {/* Social Links */}

          <div className="mt-10 flex justify-center gap-6">

            <a
              href="https://github.com/rishavranjan808"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow transition"
              title="GitHub"
            >
              <FaGithub className="text-2xl" />
            </a>

            <a
              href="https://www.linkedin.com/in/rishav-ranjan"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow transition"
              title="LinkedIn"
            >
              <FaLinkedin className="text-2xl text-blue-600" />
            </a>

          </div>

        </div>
      </section>

      {/* =====================================================
          GET IN TOUCH
      ===================================================== */}

      <div className="flex flex-col items-center justify-center w-full px-6 py-12">

        <h2 className="text-3xl font-semibold text-indigo-600 mb-4 text-center">
          Get in Touch
        </h2>

        <p className="text-gray-700 mb-6 text-center">
          Feel free to reach out if you want to collaborate on a project,
          discuss data analytics, or just want to say hello!
        </p>

        <form
          action="https://formspree.io/f/xovnaoeb"
          method="POST"
          className="flex flex-col gap-4 w-full max-w-md"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            className="p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            required
          ></textarea>

          <button
            type="submit"
            className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 transition duration-300"
          >
            Send Message
          </button>

        </form>

      </div>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Rishav Ranjan. All rights reserved.
      </footer>

    </div>
  );
}
```

I removed **all three things** related to extracurriculars:

1. The `"extracurriculars"` entry from the navbar.
2. The entire **More About Me** section.
3. The corresponding section ID/content, so there is no empty space or broken navigation.

Your navbar is now:

**About → Education → Experience → Projects → Skills → Certifications → Contact**

If you want, I can also make the **Projects section more impressive visually** by adding GitHub icons, technology tags (SQL, Python, RDKit, Power BI, etc.), and a cleaner card design.
