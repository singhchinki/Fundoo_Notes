import { createClient } from 'redis';
import logger  from './logger';

export const client = createClient();

const redis = async() => {
    try{
        await client.connect();
        logger.info('Connected to the redis data base')
    }
    catch(error){
        console.log(error);
        logger.error('could not connect to database')
    }
}
export default redis;