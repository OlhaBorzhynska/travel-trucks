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
  const camper = await getCamperById(camperId);

  return {
    title: `${camper.name} | TravelTrucks`,
    description: camper.description,
  };
}

export default async function CamperPage({ params }: CamperPageProps) {
  const { camperId } = await params;

  return <CamperPageContent camperId={camperId} />;
}
