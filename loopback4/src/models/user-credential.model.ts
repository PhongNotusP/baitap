import {Entity, model, property} from '@loopback/repository';

@model()
export class UserCredential extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
  })
  id?: string;
  index: {
    unique: true
}

  @property({
    type: 'string',
    required: true,
    unique: true

  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'string',
    required: true,
  })
  userId: string;


  constructor(data?: Partial<UserCredential>) {
    super(data);
  }
}

export interface UserCredentialRelations {
  // describe navigational properties here
}

export type UserCredentialWithRelations = UserCredential & UserCredentialRelations;
