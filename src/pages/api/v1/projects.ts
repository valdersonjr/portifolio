import type { NextApiRequest, NextApiResponse } from 'next';
import { IProjects  } from '@/model/DataView';
import * as projectsData from "@/mock/projects.json";

export default function getProjectsApiService(
  req: NextApiRequest,
  res: NextApiResponse<{projects: IProjects[]}>
) {
  res.status(200).json(projectsData);
}
