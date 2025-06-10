import AIanalytics from "../assets/AIanalytics.png";
import Datamining from "../assets/Datamining.png";
import Swagger from "../assets/Swagger.png";
import APIanalyzer from "../assets/APIanalyzer.png";
import APIGEEmanagementtool from "../assets/APIGEEmanagementtool.png";
import Generatedimage from "../assets/Generatedimage.png";
import MuleSoft from "../assets/mulesoft.jpeg";
import MulesoftCodeAnalyzer from "../assets/mulesoftCodeAnalyzer.jpeg"

const cardDetails = [
  {
    id: 1,
    logo: AIanalytics,
    title: "iInsights-Analytics-Agent",
    description:
      "Our API analytics agent,A fast and efficient solution for monitoring and analyzing API performance, providing real-time metrics on your APIs. From error rates and latency to traffic patterns and developer activity, agent provides a 360-degree view of your API performance using OpenAI models.",
    buttonLink:
      "https://i-insight-chatbot-openai-bq-perf-testing-501747933449.us-central1.run.app",
  },
  {
    id: 2,
    logo: Datamining,
    title: "iInsights-Data-Mining-Agent",
    description:
      "No more complex queries or manual searches. Our intuitive agent simplifies data mining by seamlessly integrated with database, fetches request schemas and test payloads based on your service requests, saving valuable time and effort, boosts productivity. Just tell it the service you're working with, and it instantly retrieves the request schema and test payload from database.",
    buttonLink:
      "https://i-insight-data-mining-chatbot-openai-bq-perf-test-lhk4nlt23a-uc.a.run.app",
  },
  {
    id: 3,
    logo: Swagger,
    title: "iInsights-Swagger-Agent",
    description:
      "Working with Swagger files has never been easier. Our interactive agent lets you explore your API specifications through natural language conversations. It helps you understand, provides detailed information, and even assistance with enhancing your specs with ready-to-use YAML snippets for seamless integration, all through a simple chat interface.",
    buttonLink:
      "https://i-insight-swagger-chatbot-501747933449.us-central1.run.app",
  },
  {
    id: 4,
    logo: APIGEEmanagementtool,
    title: "APIGEE Proxy Management Tool",
    description:
      "A powerful AI-driven solution for advanced API management. Effortlessly generate OpenAPI specs from existing proxies, create proxies using YAML or RAML, migrate ZIP-based proxies to APIGEE, and quickly deploy APIs using customizable templates—all from a single intuitive interface.",
    buttonLink: "http://35.225.141.76:8501/",
  },
  {
    id: 5,
    logo: APIanalyzer,
    title: "Unified APIGEE & OpenAPI Analyzer | AI at Core",
    description:
      "An AI-powered tool that simplifies API understanding by summarizing key functionalities, inspecting security policies, and decoding configurations. Designed for both developers and non-tech users, it enables interactive insights, policy analysis, and sample query prompts for faster debugging, optimization, and compliance.",
    buttonLink: "http://35.225.141.76:8502/",
  },
  {
    id: 6,
    logo: Generatedimage,
    title: "MuleSoft To Apigee API Migration Tool",
    description:
      "This utility facilitates the migration of APIs from Mulesoft to Apigee by automating the extraction of API details, proxy generation, policy placement, and deployment. It consists of several scripts and templates organized into a structured workflow. This workflow ensures a seamless migration of APIs from Mulesoft to Apigee, automating most of the manual tasks and reducing errors.",
    buttonLink: "https://imax-web-shell-34-121-152-85.nip.io/guacamole",
  },

  {
    id: 7,
    logo: MuleSoft,
    title: "iInsights-MuleSoft",
    description:
      "MuleSoft iInsights is an AI-driven utility designed to analyze and extract insights from processed MuleSoft analytics data stored in Datasets. Powered by OpenAI’s language model and integrated with BigQuery, this tool enables natural language querying of API usage data. It offers a seamless, user-friendly interface with logging and schema interpretation, helping teams quickly make data-driven decisions without manual querying.",
    buttonLink: "https://mule-iinsights-617528104873.us-central1.run.app/",
  },

  {
    id: 7,
    logo: MulesoftCodeAnalyzer,
    title: "AI-Power-MuleSoft-Code-and-RAML-Analyzer",
    description:
      "This AI-driven tool simplifies MuleSoft development by individually analyzing RAML files, POM files, and API bundles. It helps developers easily understand RAML design, interpret dependency details from POM files, and gain visibility into flows and low-level logic within the API bundle.",
    buttonLink: "https://mule-analyzer-617528104873.us-central1.run.app/",
  },
  // {
  //   id: 7,
  //   logo: "",
  //   title: "Essay Evaluator with Specific Grading Criteria",
  //   description: "Provide evaluation and feedback on a given essay.",
  //   buttonLink: "",
  // },
  // {
  //   id: 8,
  //   logo: "",
  //   title: "Medical Report Analyzer",
  //   description:
  //     "This model analyzes the medical report to retrieve the diagnosis, prognosis and medications specified in the medical report provided.",
  //   buttonLink: "",
  // },
];

export default cardDetails;
