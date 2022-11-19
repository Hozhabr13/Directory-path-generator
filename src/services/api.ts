import Invoke from './invoke'
// Endpoints
import { SAMPLE_GET_INFORMATION } from '../constants/endpoints'

const Api: any = Invoke.init()

export const getInformation: any = async () => {
  const data = await Api.get(SAMPLE_GET_INFORMATION)
  return data
}
