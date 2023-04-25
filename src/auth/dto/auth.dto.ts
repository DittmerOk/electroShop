import { IsEmail, MinLength, IsString } from 'class-validator'

export class AuthDto {
	@IsEmail()
	email: string

	@MinLength(6, {
		message: 'Must be at least 6'
	})
	@IsString()
	password: string
}
