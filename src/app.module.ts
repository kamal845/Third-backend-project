// import { Module } from '@nestjs/common';
// import { ApolloDriver } from '@nestjs/apollo';
// import { join } from 'path';
// import { AppController } from './app.controller';
// import { GraphQLModule } from '@nestjs/graphql';
// import { AppService } from './app.service';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { AppResolver } from './app.resolver';
// @Module({
//   imports: [
//     GraphQLModule.forRoot({
//       driver: ApolloDriver,
//       playground: true,
//       autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
//       definitions: {
//         path: join(process.cwd(), 'src/graphql.ts'),
//       },
//     }),
//     TypeOrmModule.forRoot({
//       type: 'postgres',
//       host: 'localhost',
//       port: 5432,
//       username: 'postgres',
//       password: '1234',
//       database: 'testdb',
//       synchronize: true, // for development only, set to false in production
//     }),
//   ],
//   controllers: [AppController],
//   providers: [AppResolver],
// })
// export class AppModule {}

// function Join(arg0: string, arg1: string): any {
//   throw new Error('Function not implemented.');
// }

import { Module } from '@nestjs/common';
import { ApolloDriver } from '@nestjs/apollo';
import { join } from 'path';
import { AppController } from './app.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppResolver } from './app.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.graphql'),
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'testdb',
      synchronize: true, // for development only, set to false in production
    }),
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver], // Include AppService in providers
})
export class AppModule {}
