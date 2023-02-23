import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, Generated, OneToMany } from "typeorm";
import { Tags } from "./tags.entity";
@Entity()
export class Test {
  @PrimaryGeneratedColumn()
  id: number
  @Column()
  name: string
  @Column()
  age: number
  // @PrimaryGeneratedColumn("uuid")
  // id: number
  // @Column({ type: "varchar", length: 255 })
  // name: string
  // @Column({ select: true, comment: "注释", default: 123, nullable: false })
  // password: string
  // @Column()
  // age: number
  // @CreateDateColumn({ type: "timestamp" })
  // create_time: Date
  // @Generated()
  // uuid: string
  // @Column({
  //   type: "enum",
  //   enum: [1, 2, 3],
  //   default: 1
  // })
  // xiaoxue: number
  // @Column("simple-array")
  // names: string[] //数据

  // @Column("simple-json")
  // json: { name: string, age: number }]
  @OneToMany(() => Tags, (tags) => tags.test)
  tags: Tags[]
}
