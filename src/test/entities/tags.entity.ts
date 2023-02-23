import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, Generated, ManyToMany, ManyToOne } from "typeorm";
import { Test } from "./test.entity";
@Entity()
export class Tags {
  @PrimaryGeneratedColumn()
  id: number
  
  @Column()
  name: string
  @ManyToOne(() => Test)
  test: Test
}