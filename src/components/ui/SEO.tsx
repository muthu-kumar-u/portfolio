import { Helmet } from "react-helmet-async";
import { personal } from "@/data/personal";

interface SEOProps {
  title?: string;
  description?: string;
}

const defaultDescription =
  "Building production-grade cloud-native systems with Golang, AWS, and Terraform — from microservice design to deployment and observability.";

export default function SEO({ title, description = defaultDescription }: SEOProps) {
  const pageTitle = title
    ? `${title} — ${personal.fullName}`
    : `${personal.fullName} — ${personal.title}`;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
