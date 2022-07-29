import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStategy } from './strategy';

@Module({
  imports: [JwtModule.register({})],
  controllers: [AuthController], // Responsible for handling request.
  providers: [AuthService, JwtStategy], // Responsible for handling business logic.
})
export class AuthModule {}
