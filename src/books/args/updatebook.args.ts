import { InputType, Field, Int } from '@nestjs/graphql';
//ye jo diye gaye hai woh decorator hai

@InputType()
export class updateBooksArgs {
  @Field((type) => Int)
  id: number;

  @Field({ nullable: true })
  title: string | null;

  @Field((type) => Int)
  price: number;
}
