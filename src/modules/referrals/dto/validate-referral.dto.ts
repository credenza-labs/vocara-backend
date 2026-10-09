import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ValidateReferralDto {
  @ApiProperty({ example: 'VOCARA-A1B2C3', description: 'Referral code to validate' })
  @IsString()
  @IsNotEmpty()
  code: string;
}
