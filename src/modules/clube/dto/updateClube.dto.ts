import { PartialType } from '@nestjs/mapped-types';
import { CreateClubeDto } from './createClube.dto';

export class UpdateClubeDto extends PartialType(CreateClubeDto) {}
