import {ObjectId,} from 'mongodb';
import {getCollection} from "@/utils/functions";
import { sendMethodNotAllowed, sendOk } from '@/utils/apiMethods';

const COLLECTION_NAME = 'destinations';

const getDestinations = async () => {
    const collection = await getCollection(COLLECTION_NAME);
    return await collection.find({}).toArray();
}

const getDestination = async (id) => {
    const collection = await getCollection(COLLECTION_NAME);
    return await collection.findOne({ _id: ObjectId.createFromHexString(id) });
}

const createDestination = async (data) => {
    const collection = await getCollection(COLLECTION_NAME);
    return await collection.insertOne(data);
}

const updateDestination = async (data) => {
    const collection = await getCollection(COLLECTION_NAME);
    const id = data._id;
    delete data._id;
    return collection.updateOne({ _id: new ObjectId(id)}, { $set: data });
}

const deleteDestination = async (id) => {
    const collection = await getCollection(COLLECTION_NAME);
    return await collection.deleteOne({ _id: ObjectId.createFromHexString(id) });
}

export default async function handler(req, res) {
   const isAllowedMethod = req.method === 'GET' || req.method === 'POST' || req.method === 'PUT' || req.method === 'DELETE';

    if (!isAllowedMethod) {
        return sendMethodNotAllowed(res, 'Method Not Allowed');
    }

    if (req.method === 'GET' && req.query.id) {
        const destination = await getDestination(req.query.id);
        return sendOk(res, destination);
    }

    if (req.method === 'GET') {
        const destinations = await getDestinations();
        return sendOk(res, destinations);
    }

    if (req.method === 'POST') {
        const destination = await createDestination(req.body);
        return sendOk(res, destination);
    }

    if (req.method === 'PUT') {
        const destination = await updateDestination(req.body);
        return sendOk(res, destination);
    }

    if (req.method === 'DELETE') {
        const destination = await deleteDestination(req.query.id);
        return sendOk(res, destination);
    }
  }