import { ObjectType, Field, Int } from '@nestjs/graphql';
@ObjectType()
export class Book {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  type: string | null;
  @Field({ nullable: true })
  title: string | null;

  @Field((type) => Int)
  price: number;
}
