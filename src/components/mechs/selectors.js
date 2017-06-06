import { WEIGHT_CLASSES } from './constants';
import { UNKNOWN } from '../../constants/constants';

export function getWeightClass(weight) {
    const weightClass = WEIGHT_CLASSES.find(weightClass => weightClass.weights.includes(weight)) || { name : UNKNOWN };
    
    return weightClass.name;
}