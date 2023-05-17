import type { NextApiRequest, NextApiResponse } from 'next';
import { IAbout  } from '@/model/DataView';
import * as aboutMeData from "@/mock/aboutMe.json";

export default function getAboutMeApiService(
  req: NextApiRequest,
  res: NextApiResponse<{aboutMe: IAbout}>
) {
  res.status(200).json(aboutMeData);
}
