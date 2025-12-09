"use client";

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { MissionModal } from '@/components/course/MissionModal';
import { tutorialMissions } from '@/data/missions/tutorial';
import { MissionData } from '@/data/missions/world0';
import { useCourseStore } from '@/store/courseStore';

export default function MissionPage() {
  const params = useParams();
  const router = useRouter();
  const worldId = Number(params.id);
  const missionId = params.missionId as string;
  const [mission, setMission] = useState<MissionData | null>(null);

  useEffect(() => {
    // Only handling Phase 0 for now as it's the only one with content files
    if (worldId === 0) {
      const foundMission = tutorialMissions.find(m => m.id === missionId);
      if (foundMission) {
        setMission(foundMission);
      }
    }
    // Future: Fetch other world missions here
  }, [worldId, missionId]);

  const handleClose = () => {
    router.push(`/dashboard/course/world/${worldId}`);
  };

  if (!mission) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white">
        Loading mission...
      </div>
    );
  }

  return (
    <MissionModal
      open={true}
      onOpenChange={(open) => !open && handleClose()}
      mission={mission}
      worldId={worldId}
      xpReward={10} // Default reward, can be improved by looking up curriculum
    />
  );
}

