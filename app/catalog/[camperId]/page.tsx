import CamperPageContent from "@/components/CamperPageContent/CamperPageContent";

interface CamperPageProps {
  params: Promise<{
    camperId: string;
  }>;
}

export default async function CamperPage({ params }: CamperPageProps) {
  const { camperId } = await params;

  return <CamperPageContent camperId={camperId} />;
}
