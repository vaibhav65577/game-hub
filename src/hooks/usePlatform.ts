import { IPlatformList } from '../interfaces/platform.type';
import useData from './useData';

const usePlatform = () => useData<IPlatformList>('/platforms/lists/parents');

export default usePlatform;
