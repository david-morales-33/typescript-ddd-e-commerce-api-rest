import { DataSource, EntitySchema, Repository } from 'typeorm';
import { AggregateRoot } from '../../../domain/aggregate/AggregateRoot';

export abstract class TypeOrmRepository<E extends { [key: string]: any }> {
    constructor(private _client: Promise<DataSource>) { }

    protected abstract entitySchema(): EntitySchema<E>;

    protected client(): Promise<DataSource> {
        return this._client;
    }

    protected async repository(): Promise<Repository<E>> {
        return (await this._client).getRepository(this.entitySchema());
    }

    protected async persist(aggregateRoot: E): Promise<void> {
        const repository = await this.repository();
        await repository.save(aggregateRoot);
    }
}
