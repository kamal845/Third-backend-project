import { InputType, Field, Int } from '@nestjs/graphql';
//ye jo diye gaye hai woh decorator hai


@InputType()
export class AddBookArgs {
  @Field({ nullable: true })
  type: string | null;

  @Field()
  title: string;

  @Field((type) => Int)
  price: number;
}

