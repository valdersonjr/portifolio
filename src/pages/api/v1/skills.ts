import type { NextApiRequest, NextApiResponse } from 'next';
import { ISkills  } from '@/model/DataView';
import * as skillsData from "@/mock/skills.json";

export default function getSkillsApiService(
  req: NextApiRequest,
  res: NextApiResponse<{skills: ISkills[]}>
) {
  res.status(200).json(skillsData);
}
