import type { NextApiRequest, NextApiResponse } from 'next';
import { IHeader  } from '@/model/DataView';
import * as headerData from "@/mock/header.json";

export default function getHeaderApiService(
  req: NextApiRequest,
  res: NextApiResponse<{header: IHeader}>
) {
  res.status(200).json(headerData);
}
