import { normalize, schema } from 'normalizr';

const pilotSchema = new schema.Entity('pilots');

const pilotListSchema = [pilotSchema];

const normalizePilots = (pilotsList) => normalize(pilotsList, pilotListSchema);

export default normalizePilots;