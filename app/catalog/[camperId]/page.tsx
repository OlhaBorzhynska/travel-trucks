import type { Metadata } from "next";
import CamperPageContent from "@/components/CamperPageContent/CamperPageContent";
import { getCamperById } from "@/lib/api/campers";

interface CamperPageProps {
  params: Promise<{
    camperId: string;
  }>;
}

export async function generateMetadata({
  params,
}: CamperPageProps): Promise<Metadata> {
  const { camperId } = await params;

  try {
    const camper = await getCamperById(camperId);

    return {
      title: `${camper.name} | TravelTrucks`,
      description: camper.description,
    };
  } catch {
    return {
      title: "TravelTrucks",
      description: "Find the perfect camper for your next adventure.",
    };
  }
}

export default async function CamperPage({ params }: CamperPageProps) {
  const { camperId } = await params;

  return <CamperPageContent camperId={camperId} />;
}
