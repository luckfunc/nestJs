import { PartialType } from '@nestjs/mapped-types';

import { CreateGDto } from './create-g.dto';

export class UpdateGDto extends PartialType(CreateGDto) {}
