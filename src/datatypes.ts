export class DataType {
    constructor(public type: string, public isAutoIncrement: boolean = false) { }

    toString() {
        return this.type;
    }
}

export class NumberDataType extends DataType {
    constructor(isAutoIncrement: boolean = false) {
        super('number', isAutoIncrement);
    }

    autoIncrement() {
        return new NumberDataType(true);
    }
}

export class DateDataType extends DataType {
    constructor(
        public isCreatedAt: boolean = false,
        public isUpdatedAt: boolean = false,
        public isDeletedAt: boolean = false
    ) {
        super('date');
    }

    createdAt() {
        return new DateDataType(true, this.isUpdatedAt, this.isDeletedAt);
    }

    updatedAt() {
        return new DateDataType(this.isCreatedAt, true, this.isDeletedAt);
    }

    deletedAt() {
        return new DateDataType(this.isCreatedAt, this.isUpdatedAt, true);
    }
}

export const DataTypes = {
    String: new DataType('string'),
    Number: new NumberDataType(),
    Boolean: new DataType('boolean'),
    JSON: new DataType('json'),
    UUID: new DataType('uuid'),
    CUID: new DataType('cuid'),
    Date: new DateDataType()
};
