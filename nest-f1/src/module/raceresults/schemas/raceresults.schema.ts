import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RaceresultsDocument = HydratedDocument<Raceresults>;

@Schema()
export class Raceresults {
  @Prop()
  pkey: string;
  @Prop()
  year: number;
  @Prop()
  raceID: number;
  @Prop()
  raceName: string;
  @Prop()
  car: string;
  @Prop()
  pos: string;
  @Prop()
  no: number;
  @Prop()
  driver: string;
  @Prop()
  lastDriver: string;
  @Prop()
  laps: number;
  @Prop()
  timeOrRetired: string;
  @Prop()
  pts: number;
}

export const RaceresultsSchema = SchemaFactory.createForClass(Raceresults);