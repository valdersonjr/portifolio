import type { NextApiRequest, NextApiResponse } from 'next';
import { IHero  } from '@/model/DataView';
import * as heroData from "@/mock/hero.json";

export default function getHeroApiService(
  req: NextApiRequest,
  res: NextApiResponse<{hero: IHero}>
) {
  res.status(200).json(heroData);
}
