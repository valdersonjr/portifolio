import type { NextApiRequest, NextApiResponse } from 'next';
import { IExperienceCard  } from '@/model/DataView';
import * as experienceData from "@/mock/experience.json";

export default function getAllExperienceApiService(
  req: NextApiRequest,
  res: NextApiResponse<{experienceArray: IExperienceCard[]}>
) {
  res.status(200).json(experienceData);
}
