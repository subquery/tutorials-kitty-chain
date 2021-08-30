// Auto-generated , DO NOT EDIT
import {Entity} from "@subql/types";
import assert from 'assert';


export class KittyBirthInfo implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public birthBlockHeight: bigint;

    public owner: string;

    public firstOwner: string;

    public parent1?: string;

    public parent2?: string;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save KittyBirthInfo entity without an ID");
        await store.set('KittyBirthInfo', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove KittyBirthInfo entity without an ID");
        await store.remove('KittyBirthInfo', id.toString());
    }

    static async get(id:string): Promise<KittyBirthInfo | undefined>{
        assert((id !== null && id !== undefined), "Cannot get KittyBirthInfo entity without an ID");
        const record = await store.get('KittyBirthInfo', id.toString());
        if (record){
            return KittyBirthInfo.create(record);
        }else{
            return;
        }
    }



    static create(record){
        let entity = new KittyBirthInfo(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
